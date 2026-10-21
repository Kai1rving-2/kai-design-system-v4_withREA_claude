const { test, before } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
let ds, render, element;
before(async () => {
  const { requireTool } = await import('../scripts/toolchain.mjs');
  const React = requireTool('react');
  element = React.createElement;
  render = requireTool('react-dom/server').renderToStaticMarkup;
  const context = { window: {}, React };
  vm.runInNewContext(fs.readFileSync(path.join(root,'_ds_bundle.js'),'utf8'), context);
  ds = context.window.KaiDesignSystemV4_3b9cf5;
});

test('mixed fields have unique ids and describe only existing elements', () => {
  const html = render(element('form', {}, element(ds.Input, { label:'Name', help:'Help', error:'Error' }), element(ds.Select,{ label:'Type', options:['A'] }), element(ds.Textarea,{label:'Notes',help:'Help'})));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const match of html.matchAll(/(?:aria-describedby|for)="([^"]+)"/g)) for (const id of match[1].split(' ')) assert.ok(ids.includes(id), id);
  assert.match(html,/aria-invalid="true"/);
});
test('explicit field id and external descriptions survive composition', () => {
  const html = render(element(ds.Input,{ id:'custom', label:'Name', 'aria-describedby':'external',help:'Help' }));
  assert.match(html,/id="custom"/); assert.match(html,/aria-describedby="external custom-help"/);
});
test('busy buttons are native disabled, announced and do not implicitly submit', () => {
  for (const props of [{pending:true},{className:'is-pending'}]) {
    const html = render(element(ds.Button,props,'Save'));
    assert.match(html,/disabled=""/); assert.match(html,/aria-busy="true"/); assert.match(html,/type="button"/);
  }
  assert.match(render(element(ds.Button,{type:'submit'},'Save')),/type="submit"/);
});
test('action icons keep a text label and icon-only actions have an accessible name', () => {
  const labelled = render(element(ds.Button, { leadingIcon: element(ds.Icon, { name: 'check' }) }, '保存草稿'));
  assert.match(labelled, /保存草稿/);
  assert.match(labelled, /aria-hidden="true"/);
  const iconOnly = render(element(ds.IconButton, { 'aria-label': '刷新', icon: element(ds.Icon, { name: 'refresh' }) }));
  assert.match(iconOnly, /aria-label="刷新"/);
  assert.match(iconOnly, /<svg/);
});
test('surface variants expose outer, soft and plain layers without leaking a DOM prop', () => {
  const outer = render(element(ds.Surface, { variant: 'outline' }, '外框'));
  const soft = render(element(ds.Surface, { variant: 'soft' }, '说明'));
  const plain = render(element(ds.Surface, { variant: 'plain' }, '结果'));
  assert.match(outer, /kai-surface--outline/);
  assert.match(soft, /kai-surface--soft/);
  assert.match(plain, /kai-surface--plain/);
  assert.ok(!/\svariant=/.test(outer + soft + plain));
});
test('links retain system styles and navigation semantics with custom classes', () => {
  const html=render(element(ds.NavLink,{href:'/a',active:true,className:'extra'},'A'));
  assert.match(html,/kai-navlink is-active extra/); assert.match(html,/aria-current="page"/);
  assert.match(render(element(ds.NavLink,{href:'#notes',active:true,'aria-current':'location'},'笔记')),/aria-current="location"/);
  assert.ok(!render(element(ds.NavLink,{href:'#notes',active:false,'aria-current':'location'},'笔记')).includes('aria-current'));
  const internal=render(element(ds.TextLink,{href:'/a',className:'extra'},'A'));
  assert.match(internal,/kai-textlink extra/);
  assert.match(internal,/aria-hidden="true">→<\/span>/);
  assert.ok(!internal.includes('在新标签页打开'));
  const external=render(element(ds.TextLink,{href:'https://example.com',external:true},'外部论文'));
  assert.match(external,/target="_blank"/);
  assert.match(external,/rel="noopener noreferrer"/);
  assert.match(external,/aria-hidden="true">↗<\/span>/);
  assert.match(external,/在新标签页打开/);
});
test('tasks expose a native named checkbox, including read-only state', () => {
  const html=render(element(ds.TaskItem,{text:'Task',done:true,readOnly:true}));
  assert.match(html,/type="checkbox"/); assert.match(html,/checked=""/); assert.match(html,/disabled=""/);
  assert.ok(!html.includes('kai-task-delete'));
});
test('empty actions use buttons for actions and anchors for navigation', () => {
  assert.match(render(element(ds.EmptyState,{title:'Empty',actionLabel:'Create',onAction() {}})),/<button type="button"/);
  assert.match(render(element(ds.EmptyState,{title:'Empty',actionLabel:'Browse',actionHref:'/browse'})),/<a[^>]*href="\/browse"/);
});
test('reading cards never render a dead default link', () => {
  const plain = render(element(ds.ReadingCard, { title: '示例', readTime: '约 2 分钟' }, '摘要'));
  assert.ok(!plain.includes('href="#"'));
  const linked = render(element(ds.ReadingCard, { title: '示例', readHref: '/notes/one', readLabel: '查看全文' }, '摘要'));
  assert.match(linked, /href="\/notes\/one"/);
  assert.match(linked, /查看全文/);
});
test('charts handle zero and one point without exceptions or invalid coordinates', () => {
  for (const [name,data] of [['LineChart',[]],['SparkLine',[]],['SparkLine',[1]],['BarChart',[]]]) {
    const html=render(element(ds[name],{data})); assert.ok(!/NaN|Infinity/.test(html),name);
  }
});
test('required small text colors meet the system 4.5 contrast target', () => {
  const colors=JSON.parse(fs.readFileSync(path.join(root,'tokens/colors.json'),'utf8'));
  const lum=h=>h.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((v,x,i)=>v+x*[.2126,.7152,.0722][i],0);
  for(const fg of ['text-2','text-3','warm-600','danger','fresh-deep']) for(const bg of ['page','surface']) {
    const ratio=(lum(colors[bg])+.05)/(lum(colors[fg])+.05); assert.ok(ratio>=4.5,`${fg}/${bg}: ${ratio}`);
  }
});
test('manifest types remain intact and all exports match current source hashes', () => {
  const manifest=JSON.parse(fs.readFileSync(path.join(root,'_ds_manifest.json'),'utf8'));
  const chart=manifest.components.find(c=>c.name==='BarChart');
  assert.equal(chart.props.find(p=>p.name==='data').type,'Array<{ label: string; value: number }>');
  assert.ok(!chart.props.find(p=>p.name==='value'));
  for(const c of manifest.components) {
    assert.ok(ds[c.name],c.name);
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,c.sourcePath))).digest('hex'),manifest.sourceHashes[c.sourcePath]);
  }
});
