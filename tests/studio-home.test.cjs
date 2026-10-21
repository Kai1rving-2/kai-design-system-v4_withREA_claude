const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('studio home has real destinations and filters its local content', async () => {
  const root = path.resolve(__dirname, '..');
  const { requireTool, esbuild: loadEsbuild } = await import('../scripts/toolchain.mjs');
  const React = requireTool('react');
  const render = requireTool('react-dom/server').renderToStaticMarkup;
  const esbuild = loadEsbuild();
  const bundleContext = { window: {}, React };
  vm.runInNewContext(fs.readFileSync(path.join(root, '_ds_bundle.js'), 'utf8'), bundleContext);

  const htmlSource = fs.readFileSync(path.join(root, 'ui_kits/studio-home/index.html'), 'utf8');
  const jsx = htmlSource.match(/<script type="text\/babel">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(jsx, 'studio home JSX exists');
  const compiled = await esbuild.transform(`${jsx}\nwindow.__homeTest = { filterContent, contentIndex };`, { loader: 'jsx', format: 'iife' });
  let tree;
  const windowStub = { KaiDesignSystemV4_3b9cf5: bundleContext.window.KaiDesignSystemV4_3b9cf5, location: { hash: '', pathname: '/ui_kits/studio-home/index.html' } };
  vm.runInNewContext(compiled.code, {
    window: windowStub,
    document: { getElementById: () => ({}) },
    React,
    ReactDOM: { createRoot: () => ({ render: node => { tree = node; } }) },
  });
  const markup = render(tree);
  for (const id of ['overview', 'projects', 'notes', 'workspace', 'about']) {
    assert.match(markup, new RegExp(`id="${id}"`));
    assert.match(markup, new RegExp(`href="#${id}"`));
  }
  assert.match(markup, /aria-current="location"/);
  assert.match(markup, /<form[^>]*role="search"/);
  assert.match(markup, /<button[^>]*type="submit"/);
  assert.match(markup, /href="\.\.\/research-flow\/index\.html"/);
  assert.ok(fs.existsSync(path.join(root, 'ui_kits/research-flow/index.html')));
  assert.ok(!markup.includes('href="#"'));

  const { filterContent, contentIndex } = windowStub.__homeTest;
  assert.equal(filterContent(contentIndex, 'kaggle', '全部').length, 1);
  assert.equal(filterContent(contentIndex, '', '工程').length, 2);
  assert.equal(filterContent(contentIndex, 'AVL tree', '工程').length, 1);
  assert.equal(filterContent(contentIndex, '不存在的内容', '全部').length, 0);
});
