const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('compact chart coordinates use CSS width and a readable label size; gaps stay gaps', async () => {
  const { requireTool }=await import('../scripts/toolchain.mjs');
  const React=requireTool('react'),render=requireTool('react-dom/server').renderToStaticMarkup;
  const context={window:{},React};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../_ds_bundle.js'),'utf8'),context);const ds=context.window.KaiDesignSystemV4_3b9cf5;
  const bar=render(React.createElement(ds.BarChart,{width:300,height:180,data:[{label:'A',value:2},{label:'B',value:3}],label:'请求用量',summary:'两次测量'}));
  assert.match(bar,/viewBox="0 0 300 180"/);assert.match(bar,/font-size:11px/);assert.match(bar,/height:180px/);assert.match(bar,/aria-label="请求用量"/);assert.match(bar,/<figcaption/);
  const line=render(React.createElement(ds.LineChart,{width:300,data:[1,null,3],area:false}));assert.ok(!/NaN|Infinity/.test(line));assert.equal((line.match(/<path /g)||[]).length,2,'missing sample splits the path');
  const spark=render(React.createElement(ds.SparkLine,{data:[1,null,3],color:'red',label:'趋势'}));assert.equal((spark.match(/<polyline/g)||[]).length,2);assert.match(spark,/aria-label="趋势"/);
  const invalid=render(React.createElement(ds.LineChart,{data:[NaN,null]}));assert.match(invalid,/暂无数据/);
});

test('chart measurement attaches when data arrives later and disconnects when its container leaves', async () => {
  const { esbuild } = await import('../scripts/toolchain.mjs');
  const source=fs.readFileSync(path.join(__dirname,'../components/charts/chart-layout.js'),'utf8').replace("import React from 'react';",'const React = globalThis.React;');
  const compiled=await esbuild().transform(source,{format:'cjs',target:'es2022'});
  const states=[], deps=[], cleanup=[], pending=[];let index=0, width=300, observed=0, disconnected=0, resize;
  const React={
    useState(initial){const slot=index++;if(!(slot in states))states[slot]=initial;return [states[slot],value=>{states[slot]=value;}];},
    useEffect(fn,next){const slot=index++;if(!deps[slot]||next.some((v,i)=>!Object.is(v,deps[slot][i]))){pending.push(()=>{cleanup[slot]?.();cleanup[slot]=fn();});deps[slot]=next;}}
  };
  const module={exports:{}};
  const context={React,module,exports:module.exports,ResizeObserver:class{constructor(fn){resize=fn;}observe(){observed++;}disconnect(){disconnected++;}}};
  vm.runInNewContext(compiled.code,context);
  const render=()=>{index=0;return module.exports.useChartWidth();};const flush=()=>{while(pending.length)pending.shift()();};
  let [ref, measured]=render();flush();assert.equal(measured,600);assert.equal(observed,0);
  ref({getBoundingClientRect:()=>({width})});render();flush();[,measured]=render();flush();assert.equal(measured,300);assert.equal(observed,1);
  width=250;resize();[,measured]=render();flush();assert.equal(measured,250);
  ref(null);render();flush();assert.equal(disconnected,1);
});
