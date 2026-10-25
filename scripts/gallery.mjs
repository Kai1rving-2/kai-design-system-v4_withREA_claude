import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { renderGuide } from './gallery-markdown.mjs';

const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hash = value => createHash('sha256').update(value).digest('hex').slice(0,16);
const external = value => /^(?:[a-z][\w+.-]*:|\/\/|#|\?)/i.test(value);
const attrs = source => Object.fromEntries([...source.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map(([,k,v]) => [k,v]));
const mime = file => ({'.woff2':'font/woff2','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.webp':'image/webp','.json':'application/json'}[path.extname(file)] || 'application/octet-stream');

/** Rebuild generated card markup/data while keeping the existing gallery shell/runtime. */
export async function rebuildGallery({ root, preview, cards, startingPoints, esbuild }) {
  const pool = {}, dataCards = [], entries = [], assetCache = new Map();
  const relativeAsset = (url, base) => {
    if (external(url) || url.startsWith('/')) return url;
    const match = /^([^?#]*)(.*)$/.exec(url), resolved = path.resolve(base,match[1]);
    if (!resolved.startsWith(root + path.sep) && resolved !== root) throw new Error(`Gallery resource outside system: ${url}`);
    if (!fs.existsSync(resolved)) return path.relative(root,resolved).split(path.sep).join('/') + match[2];
    if (/\.(?:woff2|png|jpe?g|svg|webp)$/i.test(resolved)) {
      if (!assetCache.has(resolved)) assetCache.set(resolved,`data:${mime(resolved)};base64,${fs.readFileSync(resolved).toString('base64')}`);
      return assetCache.get(resolved) + match[2];
    }
    return path.relative(root,resolved).split(path.sep).join('/') + match[2];
  };
  const readCss = (file, stack = []) => {
    if (stack.includes(file)) throw new Error(`Circular CSS import: ${file}`);
    return fs.readFileSync(file,'utf8')
      .replace(/@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;/g, (_,url) => {
        if (external(url)) throw new Error(`Gallery styles must be local: ${url}`);
        return readCss(path.resolve(path.dirname(file),url),[...stack,file]);
      })
      .replace(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/g, (_,q,url) => `url("${relativeAsset(url,path.dirname(file))}")`);
  };
  const scopedCss = css => css.replace(/:root\b/g,':host').replace(/\bhtml\b(?=[\s,.:#{>])/g,':host').replace(/\bbody\b(?=[\s,.:#{>])/g,'.__dsroot');
  const addCss = css => { const value=scopedCss(css), id=hash(value);pool[id]=value;return id; };
  const starts = new Map(startingPoints.map(c=>[c.path,c]));
  const all = new Map(cards.map(c=>[c.path,c]));
  for (const c of startingPoints) if (!all.has(c.path)) all.set(c.path,c);
  for (const spec of all.values()) {
    const start = starts.get(spec.path), sourcePath=path.join(root,spec.path), base=path.dirname(sourcePath), html=fs.readFileSync(sourcePath,'utf8');
    const dimensions = (start?.viewport || spec.viewport || '700x400').split('x').map(Number);
    if (dimensions.length!==2 || dimensions.some(n=>!Number.isFinite(n)||n<=0)) throw new Error(`Invalid gallery viewport: ${spec.path}`);
    const id=`card-${hash(spec.path)}`, group=start ? 'Screens' : spec.group || 'Components', title=spec.name || start?.name || path.basename(base), subtitle=start?.subtitle || spec.subtitle || '';
    const styles=[];
    for (const match of html.matchAll(/<link\b([^>]*)>/gi)) {
      const a=attrs(match[1]);if(a.rel!=='stylesheet'||!a.href)continue;
      if(external(a.href))throw new Error(`Gallery stylesheet must be local: ${spec.path}`);
      styles.push(addCss(readCss(path.resolve(base,a.href))));
    }
    for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) styles.push(addCss(match[1].replace(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/g,(_,q,url)=>`url("${relativeAsset(url,base)}")`)));
    const scripts=[];
    for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      const a=attrs(match[1]);let code=match[2];
      if(a.src){
        // Gallery owns its already-inlined shared runtime and current system bundle.
        if(/(?:react(?:-dom)?(?:[.@/]|$)|babel|_ds_bundle\.js)/i.test(a.src))continue;
        if(external(a.src))throw new Error(`Unsupported external card script: ${a.src}`);
        code=fs.readFileSync(path.resolve(base,a.src),'utf8');
      }
      if(a.type && !['text/babel','text/jsx','text/javascript','application/javascript','module'].includes(a.type))continue;
      const result=await esbuild.transform(code,{loader:/babel|jsx/.test(a.type||'')||/\.jsx$/.test(a.src||'')?'jsx':'js',target:'es2022',charset:'utf8'});
      scripts.push({code:result.code,babel:false,name:a.src||null});
    }
    const bodyMatch=/<body\b([^>]*)>([\s\S]*?)<\/body>/i.exec(html);
    if(!bodyMatch)throw new Error(`Card is missing body: ${spec.path}`);
    const bodyAttrs=attrs(bodyMatch[1]);
    let body=bodyMatch[2].replace(/[ \t]+$/gm,'').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'');
    body=body.replace(/\b(src|href|poster)\s*=\s*(["'])([^"']+)\2/gi,(_,name,q,url)=>`${name}=${q}${escape(relativeAsset(url,base))}${q}`)
      .replace(/\son([a-z]+)\s*=/gi,' data-ds-on$1=');
    const [w,h]=dimensions, groupId=`g-${hash(group)}`;
    const markup=`<section class="ds-card" id="${id}" data-card data-anchor data-anchor-key="${id}"><header class="ds-card-head"><div><h3 class="ds-card-title">${escape(title)}</h3>${subtitle?`<p class="ds-card-sub">${escape(subtitle)}</p>`:''}</div></header><div class="ds-prevwrap" data-fit style="box-sizing:content-box;width:${w}px;height:${h}px"><div class="ds-stage" data-stage style="width:${w}px;height:${h}px"><template shadowrootmode="open"><div class="__dsroot ${escape(bodyAttrs.class||'')}" style="margin:0;width:100%;height:100%;overflow:auto;box-sizing:border-box;${escape(bodyAttrs.style||'')}">${body}</div></template></div></div></section>`;
    dataCards.push({id,w,h,base:path.relative(root,base).split(path.sep).join('/'),css:[...new Set(styles)],js:scripts,sourcePath:spec.path});
    entries.push({id,group,groupId,title,markup});
  }
  const groups=new Map();for(const entry of entries){if(!groups.has(entry.group))groups.set(entry.group,[]);groups.get(entry.group).push(entry);}
  const content=[...groups.entries()].map(([group,rows])=>`<div class="ds-group" id="${rows[0].groupId}" data-anchor data-anchor-key="${rows[0].groupId}"><h2 class="ds-group-label">${escape(group)}</h2>${rows.map(r=>r.markup).join('')}</div>`).join('');
  const caret='<svg class="ds-caret" viewBox="0 0 10 10" fill="none"><path d="M1.5 3.25 5 6.75l3.5-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const nav=`<nav class="ds-outline" aria-label="Design system outline"><div class="ds-outline-head"><h1>Design system</h1></div><div class="ds-outline-scroll"><div class="ds-pinned"><button class="ds-item" data-target="ds-readme"><span>Readme</span></button></div>${[...groups.entries()].map(([group,rows])=>`<div class="ds-outline-group"><button class="ds-group-btn" data-group-toggle>${caret}<span>${escape(group)}</span></button><div class="ds-group-items">${rows.map(r=>`<button class="ds-item" data-target="${r.id}"><span>${escape(r.title)}</span></button>`).join('')}</div></div>`).join('')}</div></nav>`;
  const guide=renderGuide(fs.readFileSync(path.join(root,'readme.md'),'utf8'));
  const readme=`<section class="ds-card" id="ds-readme" data-anchor data-anchor-key="ds-readme"><header class="ds-card-head"><h3 class="ds-card-title">Readme</h3></header><div class="ds-readme-body ds-prose collapsed" data-readme>${guide}</div><button class="ds-readme-toggle" data-readme-toggle type="button">Show more</button></section>`;
  preview=preview.replace(/<nav class="ds-outline"[\s\S]*?<\/nav>/,nav)
    .replace(/<main class="ds-content"[^>]*>[\s\S]*?<\/main>/,`<main class="ds-content" data-scroll><div class="ds-content-inner">${readme}${content}</div></main>`)
    .replace(/(<script type="application\/json" id="ds-data">)[\s\S]*?(<\/script>)/,(_,a,b)=>a+JSON.stringify({cards:dataCards,css:pool}).replaceAll('</script','<\\/script')+b);
  return preview.replace(/^[ \t]+$/gm, '');
}
