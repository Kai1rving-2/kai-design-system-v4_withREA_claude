import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { esbuild, requireTool } from './toolchain.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const write = (p, value) => fs.writeFileSync(path.join(root, p), value);
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const sources = walk(path.join(root, 'components')).filter(p => p.endsWith('.jsx')).sort().map(p => path.relative(root, p));
const exports = sources.map(p => `export { ${path.basename(p, '.jsx')} } from './${p}';`).join('\n') + '\n';
write('index.js', exports);
write('index.d.ts', sources.map(p => `export * from './${p}';`).join('\n') + '\n');

const colors = JSON.parse(read('tokens/colors.json'));
const channels = Object.fromEntries(Object.entries(colors).map(([k,v]) => [k, v.slice(1).match(/../g).map(n => parseInt(n,16)).join(', ')]));
write('tokens/colors.css', '/* Generated from colors.json. Edit the source, then run npm run build. */\n:root {\n' +
  Object.entries(colors).map(([k,v]) => `  --${k}: ${v};\n  --${k}-rgb: ${channels[k]};`).join('\n') +
  '\n  --bg-page: var(--page);\n  --bg-surface: var(--surface);\n  --bg-sunken: var(--sunken);\n  --surface-overlay: rgba(var(--page-rgb), .94);\n}\n');
write('tokens/colors.js', `// Generated from colors.json.\nexport const colorTokens = Object.freeze(${JSON.stringify(colors,null,2)});\nexport const colorChannels = Object.freeze(${JSON.stringify(channels,null,2)});\n`);
write('tokens/colors.d.ts', `export const colorTokens: Readonly<${JSON.stringify(colors,null,2)}>;\nexport const colorChannels: Readonly<Record<keyof typeof colorTokens, string>>;\n`);

const ts = requireTool('typescript');
const components = sources.map(sourcePath => {
  const name = path.basename(sourcePath, '.jsx');
  const typePath = sourcePath.replace(/\.jsx$/, '.d.ts');
  const source = ts.createSourceFile(typePath, read(typePath), ts.ScriptTarget.Latest, true);
  const iface = source.statements.find(n => ts.isInterfaceDeclaration(n) && n.name.text === `${name}Props`);
  return { name, sourcePath, layer: /patterns\/|content\/(ReadingCard|SideCard|Blockquote|VerseDivider)|forms\/NotesArea|tasks\/TaskItem/.test(sourcePath) ? 'pattern' : 'component',
    nativeProps: Boolean(iface?.heritageClauses?.length),
    props: iface?.members.filter(ts.isPropertySignature).map(p => ({ name: p.name.getText(source).replaceAll("'", ''), type: p.type?.getText(source), optional: Boolean(p.questionToken) })) || [] };
});
const sourceHashes = Object.fromEntries(sources.map(p => [p, createHash('sha256').update(read(p)).digest('hex')]));
const namespace = 'KaiDesignSystemV4_3b9cf5';
// Keep authored cards/starting points discoverable by the single-file gallery builder.
// Both directives live in source HTML; never edit the generated manifest by hand.
const directive = (text, name) => {
  const match = text.slice(0, 800).match(new RegExp(`<!--\\s*@${name}\\b([^>]*?)-->`));
  return match ? Object.fromEntries([...match[1].matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])) : null;
};
const cardFiles = ['guidelines', 'components', 'ui_kits']
  .flatMap(dir => walk(path.join(root, dir)).filter(p => p.endsWith('.html')))
  .sort().map(p => path.relative(root, p).split(path.sep).join('/'));
const cards = cardFiles.flatMap(p => {
  const data = directive(read(p), 'dsCard');
  return data ? [{ path: p, ...data }] : [];
});
const startingPoints = cardFiles.flatMap(p => {
  const data = directive(read(p), 'startingPoint');
  return data ? [{ kind: 'screen', name: path.basename(path.dirname(p)), path: p, previewPath: p, ...data }] : [];
});
const meta = { format: 3, version: '4.3.0-rea.6', namespace, components, sourceHashes, inlinedExternals: [], unexposedExports: [], cards, startingPoints };
write('_ds_manifest.json', JSON.stringify(meta,null,2)+'\n');
const result = await esbuild().build({ entryPoints: [path.join(root, 'index.js')], bundle: true, write: false, format: 'iife', globalName: namespace, platform: 'browser',
  plugins: [{ name: 'react-global', setup(build) {
    build.onResolve({ filter: /^react$/ }, () => ({ path: 'react', namespace: 'react-global' }));
    build.onLoad({ filter: /.*/, namespace: 'react-global' }, () => ({ contents: 'module.exports = globalThis.React;' }));
  } }],
  banner: { js: `/* @ds-bundle: ${JSON.stringify(meta)} */` },
  footer: { js: `window.${namespace} = ${namespace}; window.${namespace}.__errors = [];` },
});
const bundle = result.outputFiles[0].text;
write('_ds_bundle.js', bundle);
// Keep lint intentionally narrow. Native props and nested types are checked by TypeScript.
write('_adherence.oxlintrc.json', JSON.stringify({ rules: { 'no-restricted-syntax': ['warn', {
  selector: "JSXOpeningElement[name.name='Button'] > JSXAttribute[name.name='variant'] > Literal[value!=/^(?:primary|secondary|text)$/]",
  message: 'Button variant must be primary, secondary or text.'
}] } },null,2)+'\n');

// The existing gallery embeds a compiled React bundle and a common CSS pool.
// Refresh these from the same source without changing the gallery's layout/content.
let preview = read('preview.html');
preview = preview.replace(/<script>\s*\/\* @ds-bundle:[\s\S]*?<\/script>/, () => `<script>${bundle.replaceAll('</script', '<\\/script')}</script>`);
preview = preview.replace(/(<script type="application\/json" id="ds-data">)([\s\S]*?)(<\/script>)/, (_, start, json, end) => {
  const data = JSON.parse(json);
  const key = Object.keys(data.css).find(k => data.css[k].includes('--page:') && data.css[k].includes('.kai-btn'));
  if (!key) throw new Error('Cannot find shared gallery CSS');
  const files = ['tokens/colors.css','tokens/typography.css','tokens/spacing.css','tokens/motion.css','tokens/base.css','components/components.css'];
  // Gallery cards use shadow roots. Apply the public root/body rules to their hosts.
  data.css[key] = files.map(read).join('\n').replaceAll(':root', ':host').replace(/html, body/g, ':host').replace(/\bbody\s*\{/g, '.__dsroot {');
  return start + JSON.stringify(data).replaceAll('</script', '<\\/script') + end;
});
write('preview.html', preview);
console.log(`Built ${components.length} components, typed entry, tokens, manifest and preview.`);
