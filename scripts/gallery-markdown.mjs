const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const inline = (value, tokens = []) => {
  const keep = html => `\u0000${tokens.push(html)-1}\u0000`;
  let text=value.replace(/`([^`]+)`/g,(_,code)=>keep(`<code>${escape(code)}</code>`));
  text=text.replace(/\[([^\]]+)\]\((<[^>]+>|[^)\s]+)\)/g,(_,label,href)=>{
    href=href.replace(/^<|>$/g,'');
    if(/^(?:javascript|data):/i.test(href))return label;
    return keep(`<a href="${escape(href)}"${/^https?:/i.test(href)?' target="_blank" rel="noopener"':''}>${inline(label,tokens)}</a>`);
  });
  text=escape(text).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
  return text.replace(/\u0000(\d+)\u0000/g,(_,index)=>tokens[Number(index)]);
};
const tableCells = line => line.trim().replace(/^\||\|$/g,'').split('|').map(c=>c.trim());

/** Small dependency-free renderer for the Markdown constructs used by this system guide. */
export function renderGuide(markdown) {
  const lines=markdown.split(/\r?\n/), out=[];
  let i=0;
  while(i<lines.length){
    const line=lines[i];
    if(!line.trim()){i++;continue;}
    if(/^```/.test(line)){const language=line.slice(3).trim();const code=[];i++;while(i<lines.length&&!/^```/.test(lines[i]))code.push(lines[i++]);i++;out.push(`<pre><code${language?` class="language-${escape(language)}"`:''}>${escape(code.join('\n'))}</code></pre>`);continue;}
    const heading=/^(#{1,6})\s+(.+)$/.exec(line);if(heading){out.push(`<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`);i++;continue;}
    if(/^\s*(?:---+|\*\*\*+)\s*$/.test(line)){out.push('<hr>');i++;continue;}
    if(line.trim().startsWith('|')&&/^\s*\|?[\s:|-]+\|\s*$/.test(lines[i+1]||'')){
      const headers=tableCells(line);i+=2;const rows=[];while(i<lines.length&&lines[i].trim().startsWith('|'))rows.push(tableCells(lines[i++]));
      out.push(`<div style="overflow-x:auto"><table><thead><tr>${headers.map(c=>`<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(c=>`<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);continue;
    }
    const list=/^\s*(-|\d+\.)\s+(.+)$/.exec(line);
    if(list){const tag=list[1]==='-'?'ul':'ol',items=[];while(i<lines.length){const item=/^\s*(-|\d+\.)\s+(.+)$/.exec(lines[i]);if(!item||(item[1]==='-'?'ul':'ol')!==tag)break;items.push(`<li>${inline(item[2])}</li>`);i++;}out.push(`<${tag}>${items.join('')}</${tag}>`);continue;}
    if(/^>\s?/.test(line)){out.push(`<blockquote><p>${inline(line.replace(/^>\s?/,''))}</p></blockquote>`);i++;continue;}
    const paragraph=[line.trim()];i++;
    while(i<lines.length&&lines[i].trim()&&!/^(?:#{1,6}\s|```|\s*-\s|\s*\d+\.\s|>|\|)/.test(lines[i]))paragraph.push(lines[i++].trim());
    out.push(`<p>${inline(paragraph.join(' '))}</p>`);
  }
  return out.join('\n');
}
