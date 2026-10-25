const { Button, Input, Checkbox, BarChart, FilterChip, SegmentedControl, StatusBadge } = window.KaiDesignSystemV4_3b9cf5;
const mavPalettes = {
 A: { title:'冷银蓝', en:'Silver & court blue', desc:'更鲜明的蓝，更轻的银白底。', note:'独行侠联想最直接 · 清爽', swatches:[['主蓝','#2468B4'],['海军蓝','#132A46'],['冷银','#B9C9DA'],['冰白','#F2F6FB'],['浅蓝','#E1EDFB']] },
 B: { title:'午夜蓝', en:'After-hours navy', desc:'深海军蓝包裹银白，亮蓝只在重点处出现。', note:'夜场感更强 · 沉浸', swatches:[['高亮蓝','#78B2F5'],['午夜','#0E1B2D'],['银灰','#AABDD3'],['表面','#15253A'],['品牌蓝','#234F84']] },
 C: { title:'钢蓝银', en:'Quiet steel', desc:'压低蓝的饱和度，让银灰成为底色。', note:'最接近 KAI 原有气质 · 克制', swatches:[['钢蓝','#3C6B8B'],['深蓝','#1D3448'],['银灰','#AABAC6'],['银白','#EEF0F1'],['浅蓝','#DCE7EE']] }
};
function ColorSpecimen({palette, notify}) {
 const [activeTab,setActiveTab]=React.useState('概览');
 const [checked,setChecked]=React.useState(true);
 const [saved,setSaved]=React.useState(false);
 const pal=mavPalettes[palette];
 async function copySwatch(value){try{await navigator.clipboard.writeText(value);notify('已复制 '+value);}catch{notify('色值：'+value);}}
 return <article className="theme" data-palette={palette} data-screen-label={palette+' · '+pal.title}>
  <header className="spec-top"><b>KAI <span>× Dallas</span></b><span>配色样本 / {palette}</span></header>
  <section className="brand-area"><p className="eyebrow">Dallas Mavericks · 独行侠</p><h2 className="brand-title">A different blue.<br/><em>Still Dallas.</em></h2><p className="brand-sub">不必是同一种蓝。<br/>仍然一眼，想起达拉斯。</p></section>
  <div className="color-ribbon" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
  <section className="spec-section"><div className="section-heading"><h3>01 / 色彩角色</h3><span>点击复制色值</span></div><div className="swatch-row">{pal.swatches.map(([label,color])=><button className="swatch" key={label} onClick={()=>copySwatch(color)} aria-label={'复制'+label+color}><span className="swatch-color" style={{background:color}}></span><span className="swatch-name">{label}</span><code>{color}</code></button>)}</div></section>
  <section className="spec-section"><div className="section-heading"><h3>02 / 交互与状态</h3><span>原版 KAI 组件</span></div>
   <SegmentedControl className="sample-nav" label={palette+'版样本选项'} options={['概览','细节','已收藏'].map(value=>({value,label:value}))} value={activeTab} onValueChange={setActiveTab}/>
   <div className="control-row"><Button onClick={()=>{setSaved(!saved);notify(saved?'已取消收藏':'已收藏这版配色');}}>{saved?'已收藏':'收藏配色'}</Button><Button variant="secondary" onClick={()=>{setSaved(false);setChecked(true);setActiveTab('概览');notify('样本状态已重置');}}>重置样本</Button><Button disabled>不可用</Button></div>
   <div className="field-wrap"><Input label={activeTab==='细节'?'配色备注 · 细节':'配色备注'} placeholder="试着输入，看看聚焦时的蓝" help={activeTab==='已收藏'?(saved?'这版配色已收藏。':'还没有收藏，可以点击上方按钮。'):'文字、边框和聚焦态随配色一起变化。'} /></div>
   <div className="check-wrap"><Checkbox checked={checked} onChange={e=>setChecked(e.target.checked)} label="保留 KAI 的排版与留白"/><button className="quiet-link" onClick={()=>notify(pal.note)}>查看说明 →</button></div>
   <div className="feedback-row"><StatusBadge tone={saved?'success':'neutral'}>{saved?'已收藏':'尚未收藏'}</StatusBadge><StatusBadge tone="error">失败状态示例</StatusBadge></div>
  </section>
  <section className="spec-section"><div className="section-heading"><h3>03 / 数字与图表</h3><span>演示数据，非球队统计</span></div><div className="data-layout"><div className="data-stat"><span>数据字形</span><strong>108.6</strong><small>DM Mono · 保留原版字体</small></div><div className="data-stat"><span>重点读数</span><strong style={{color:'var(--accent)'}}>+12.4</strong><small>品牌蓝用于数据强调</small></div></div><div className="mini-chart"><BarChart data={[{label:'01',value:36},{label:'02',value:54},{label:'03',value:43},{label:'04',value:68},{label:'05',value:58},{label:'06',value:82}]} height={180}/></div></section>
  <section className="signature"><div><em>Stay true.<br/>Stay blue.</em><small>深色底 / 签名字体</small></div><div><em>Dallas,<br/>in our own way.</em><small>品牌色底 / 反白文字</small></div></section>
  <footer className="spec-end"><span>Sans 日常 · Serif 签名 · Mono 数据</span><span>KAI v4</span></footer>
 </article>;
}
function MavPreview(){
 const initial=['A','B','C','canvas'].includes(location.hash.slice(1))?location.hash.slice(1):'compare';
 const [view,setView]=React.useState(initial);
 const [toast,setToast]=React.useState('');
 const toastTimer=React.useRef(null);
 const notify=msg=>{setToast(msg);clearTimeout(toastTimer.current);toastTimer.current=setTimeout(()=>setToast(''),2200);};
 function switchView(v){setView(v);history.replaceState(null,'',v==='compare'?location.pathname:'#'+v);}
 React.useEffect(()=>{return()=>clearTimeout(toastTimer.current);},[]);
 return <>
 <header className="studio-header"><div><p className="studio-kicker"><b>KAI DESIGN SYSTEM</b><span>Dallas edition / Color study 01</span></p><h1 className="studio-title">三种蓝色性格，同一个独行侠。</h1><p className="studio-sub">同样的布局、字体与组件，只比较配色。非官方配色 · 不使用球队标志 · 不改原模板</p></div><div className="studio-tools" role="group" aria-label="预览方式">{[['compare','三版对比'],['A','A 冷银蓝'],['B','B 午夜蓝'],['C','C 钢蓝银'],['canvas','自由画布']].map(([value,label])=><FilterChip key={value} selected={view===value} onClick={()=>switchView(value)}>{label}</FilterChip>)}</div></header>
 {view==='canvas'?<div className="canvas-shell"><DesignCanvas><DCSection id="mavs" title="KAI × Dallas / Color studies" subtitle="三种色彩方向 · 同一套组件" gap={32}>{['A','B','C'].map(key=><DCArtboard key={key} id={'mav-'+key} label={key+' · '+mavPalettes[key].title} width={440}><ColorSpecimen palette={key} notify={notify}/></DCArtboard>)}</DCSection></DesignCanvas><p className="canvas-note">拖动空白处平移 · Ctrl/⌘ + 滚轮缩放 · 点击画板上方放大</p></div>:<main className="studio-main"><div className={view==='compare'?'compare-grid':'single-wrap'}>{(view==='compare'?['A','B','C']:[view]).map(key=><section key={key}><div className="variant-label"><div><h2>{key} / {mavPalettes[key].title}</h2><small>{mavPalettes[key].desc}</small></div>{view==='compare'&&<button className="expand-btn" onClick={()=>switchView(key)}>放大 ↗</button>}</div><ColorSpecimen palette={key} notify={notify}/></section>)}</div><footer className="studio-foot"><p>先看整体冷暖、蓝的力度和银灰比例，再试按钮、输入框与选中态。</p><p>可以混搭：例如 A 的蓝 + C 的底色。B 同时探索深色方向。</p></footer></main>}
 {toast&&<div className="toast" role="status">{toast}</div>}
 </>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<MavPreview/>);
