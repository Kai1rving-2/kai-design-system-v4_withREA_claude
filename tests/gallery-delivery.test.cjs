const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');

test('gallery rebuild reflects authored markup, local CSS, JSX and card add/remove', async () => {
  const { rebuildGallery } = await import('../scripts/gallery.mjs');
  const { esbuild } = await import('../scripts/toolchain.mjs');
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'kai-gallery-test-'));
  try {
    fs.mkdirSync(path.join(dir,'cards'));
    fs.writeFileSync(path.join(dir,'readme.md'),'# Current guide\n\nREADME-marker **current**\n\n```html\n<button>sample</button>\n```');
    fs.writeFileSync(path.join(dir,'cards/test.html'), '<body class="kai-test"><style>body{color:red}</style><button onclick="window.clicked=true">authored-v1</button><script type="text/babel">window.node=<b>new content</b>;</script></body>');
    const shell='<nav class="ds-outline"></nav><main class="ds-content"><section class="ds-card" id="ds-readme">guide</section></main><script type="application/json" id="ds-data">{}</script>';
    const spec={path:'cards/test.html',name:'Test',group:'Examples',viewport:'300x200'};
    let result=await rebuildGallery({root:dir,preview:shell,cards:[spec],startingPoints:[],esbuild:esbuild()});
    assert.match(result,/README-marker <strong>current<\/strong>/);assert.match(result,/&lt;button&gt;sample&lt;\/button&gt;/);
    assert.match(result,/authored-v1/);assert.match(result,/data-ds-onclick=/);assert.match(result,/__dsroot\{color:red\}/);assert.match(result,/React.createElement/);assert.match(result,/class="__dsroot kai-test"/);
    fs.writeFileSync(path.join(dir,'cards/test.html'),'<body>authored-v2</body>');
    result=await rebuildGallery({root:dir,preview:result,cards:[spec],startingPoints:[],esbuild:esbuild()});assert.match(result,/authored-v2/);assert.ok(!result.includes('authored-v1'));
    result=await rebuildGallery({root:dir,preview:result,cards:[],startingPoints:[],esbuild:esbuild()});assert.ok(!result.includes('authored-v2'));assert.match(result,/"cards":\[\]/);
  } finally { fs.rmSync(dir,{recursive:true,force:true}); }
});

test('prototype export supports HTML and rejects changed managed resources', () => {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'kai-export-test-'));
  const run=(...args)=>execFileSync(process.execPath,[path.join(root,'scripts/export-prototype.mjs'),dir,...args],{encoding:'utf8',stdio:'pipe'});
  try {
    run('--mode','html');assert.ok(!fs.existsSync(path.join(dir,'_ds_bundle.js')));assert.match(fs.readFileSync(path.join(dir,'_ds_prompt.md'),'utf8'),/React and the browser bundle are not required/);
    run('--mode','html','--check');
    fs.appendFileSync(path.join(dir,'components/components.css'),'\n.local-edit{}');
    assert.throws(()=>run('--mode','html'), /Command failed/);
  } finally {fs.rmSync(dir,{recursive:true,force:true});}
});


test('guide inline rendering preserves code, bold and link combinations', async () => {
  const { renderGuide } = await import('../scripts/gallery-markdown.mjs');
  const html=renderGuide('**[Open](./index.html)**\n\n[`Button`](./components/core/Button.jsx)\n\n[**`Token`**](./tokens/colors.json)\n\n[**Strong** and `code`](./index.html)');
  assert.ok(!html.includes('undefined'));
  assert.match(html, /<strong><a href="\.\/index\.html">Open<\/a><\/strong>/);
  assert.match(html, /<a href="\.\/components\/core\/Button\.jsx"><code>Button<\/code><\/a>/);
  assert.match(html, /<a href="\.\/tokens\/colors\.json"><strong><code>Token<\/code><\/strong><\/a>/);
  assert.match(html, /<strong>Strong<\/strong> and <code>code<\/code>/);
});
