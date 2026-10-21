/* @ds-bundle: {"format":3,"version":"4.3.0-rea.6","namespace":"KaiDesignSystemV4_3b9cf5","components":[{"name":"BarChart","sourcePath":"components/charts/BarChart.jsx","layer":"component","nativeProps":false,"props":[{"name":"data","type":"Array<{ label: string; value: number }>","optional":false},{"name":"height","type":"number","optional":true}]},{"name":"DataTable","sourcePath":"components/charts/DataTable.jsx","layer":"component","nativeProps":false,"props":[{"name":"columns","type":"string[]","optional":false},{"name":"rows","type":"Array<Array<React.ReactNode>>","optional":false},{"name":"align","type":"Record<string, 'left' | 'right'>","optional":true}]},{"name":"LineChart","sourcePath":"components/charts/LineChart.jsx","layer":"component","nativeProps":false,"props":[{"name":"data","type":"Array<number | { value: number }>","optional":false},{"name":"labels","type":"string[]","optional":true},{"name":"height","type":"number","optional":true},{"name":"area","type":"boolean","optional":true},{"name":"annotation","type":"{ index: number; label: string }","optional":true}]},{"name":"SparkLine","sourcePath":"components/charts/SparkLine.jsx","layer":"component","nativeProps":false,"props":[{"name":"data","type":"number[]","optional":false},{"name":"width","type":"number","optional":true},{"name":"height","type":"number","optional":true}]},{"name":"Blockquote","sourcePath":"components/content/Blockquote.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"text","type":"React.ReactNode","optional":false},{"name":"source","type":"string","optional":true}]},{"name":"ReadingCard","sourcePath":"components/content/ReadingCard.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"tag","type":"string","optional":true},{"name":"date","type":"string","optional":true},{"name":"title","type":"React.ReactNode","optional":false},{"name":"lead","type":"React.ReactNode","optional":true},{"name":"children","type":"React.ReactNode","optional":true},{"name":"readLabel","type":"string","optional":true},{"name":"readHref","type":"string","optional":true},{"name":"readTime","type":"string","optional":true}]},{"name":"SideCard","sourcePath":"components/content/SideCard.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"tone","type":"'default' | 'dark'","optional":true},{"name":"title","type":"React.ReactNode","optional":false},{"name":"sub","type":"string","optional":true}]},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx","layer":"component","nativeProps":false,"props":[{"name":"label","type":"string","optional":false},{"name":"value","type":"React.ReactNode","optional":false},{"name":"sub","type":"string","optional":true},{"name":"delta","type":"string","optional":true}]},{"name":"Tag","sourcePath":"components/content/Tag.jsx","layer":"component","nativeProps":false,"props":[{"name":"children","type":"React.ReactNode","optional":false}]},{"name":"VerseDivider","sourcePath":"components/content/VerseDivider.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"children","type":"React.ReactNode","optional":false}]},{"name":"BackLink","sourcePath":"components/core/BackLink.jsx","layer":"component","nativeProps":true,"props":[{"name":"href","type":"string","optional":true},{"name":"onClick","type":"(e: React.MouseEvent<HTMLAnchorElement>) => void","optional":true},{"name":"children","type":"React.ReactNode","optional":true}]},{"name":"Button","sourcePath":"components/core/Button.jsx","layer":"component","nativeProps":true,"props":[{"name":"pending","type":"boolean","optional":true},{"name":"variant","type":"'primary' | 'secondary' | 'text'","optional":true},{"name":"leadingIcon","type":"React.ReactNode","optional":true},{"name":"trailingIcon","type":"React.ReactNode","optional":true},{"name":"children","type":"React.ReactNode","optional":true}]},{"name":"Icon","sourcePath":"components/core/Icon.jsx","layer":"component","nativeProps":true,"props":[{"name":"name","type":"IconName","optional":false},{"name":"size","type":"number","optional":true},{"name":"strokeWidth","type":"number","optional":true}]},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx","layer":"component","nativeProps":true,"props":[{"name":"aria-label","type":"string","optional":false},{"name":"icon","type":"React.ReactNode","optional":true},{"name":"tooltipAlign","type":"'center' | 'start' | 'end'","optional":true}]},{"name":"NavLink","sourcePath":"components/core/NavLink.jsx","layer":"component","nativeProps":true,"props":[{"name":"href","type":"string","optional":true},{"name":"active","type":"boolean","optional":true},{"name":"children","type":"React.ReactNode","optional":false}]},{"name":"Surface","sourcePath":"components/core/Surface.jsx","layer":"component","nativeProps":true,"props":[{"name":"variant","type":"'outline' | 'soft' | 'plain'","optional":true}]},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx","layer":"component","nativeProps":true,"props":[{"name":"href","type":"string","optional":true},{"name":"external","type":"boolean","optional":true},{"name":"children","type":"React.ReactNode","optional":false}]},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx","layer":"component","nativeProps":false,"props":[{"name":"icon","type":"React.ReactNode","optional":true},{"name":"title","type":"string","optional":false},{"name":"body","type":"React.ReactNode","optional":true},{"name":"actionLabel","type":"string","optional":true},{"name":"actionHref","type":"string","optional":true},{"name":"onAction","type":"(e: React.MouseEvent<HTMLButtonElement>) => void","optional":true}]},{"name":"InlineFeedback","sourcePath":"components/feedback/InlineFeedback.jsx","layer":"component","nativeProps":true,"props":[{"name":"tone","type":"'info' | 'success' | 'warning' | 'error'","optional":true}]},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx","layer":"component","nativeProps":false,"props":[{"name":"tone","type":"'info' | 'success' | 'warning' | 'error'","optional":true},{"name":"temp","type":"'info' | 'warm' | 'gentle' | 'danger' | 'success' | 'warning' | 'error'","optional":true},{"name":"title","type":"string","optional":false},{"name":"body","type":"string","optional":true},{"name":"actionLabel","type":"string","optional":true},{"name":"onAction","type":"() => void","optional":true},{"name":"onDismiss","type":"() => void","optional":true}]},{"name":"ToastDark","sourcePath":"components/feedback/ToastDark.jsx","layer":"component","nativeProps":false,"props":[{"name":"children","type":"React.ReactNode","optional":false}]},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx","layer":"component","nativeProps":true,"props":[{"name":"label","type":"React.ReactNode","optional":false}]},{"name":"Field","sourcePath":"components/forms/Field.jsx","layer":"component","nativeProps":false,"props":[{"name":"id","type":"string","optional":true},{"name":"label","type":"React.ReactNode","optional":true},{"name":"help","type":"React.ReactNode","optional":true},{"name":"error","type":"React.ReactNode","optional":true},{"name":"required","type":"boolean","optional":true},{"name":"className","type":"string","optional":true},{"name":"style","type":"React.CSSProperties","optional":true},{"name":"children","type":"React.ReactElement","optional":false}]},{"name":"Input","sourcePath":"components/forms/Input.jsx","layer":"component","nativeProps":true,"props":[{"name":"label","type":"React.ReactNode","optional":true},{"name":"controlClassName","type":"string","optional":true},{"name":"help","type":"React.ReactNode","optional":true},{"name":"error","type":"React.ReactNode","optional":true},{"name":"required","type":"boolean","optional":true}]},{"name":"NotesArea","sourcePath":"components/forms/NotesArea.jsx","layer":"pattern","nativeProps":true,"props":[{"name":"placeholder","type":"string","optional":true}]},{"name":"Select","sourcePath":"components/forms/Select.jsx","layer":"component","nativeProps":true,"props":[{"name":"label","type":"React.ReactNode","optional":true},{"name":"controlClassName","type":"string","optional":true},{"name":"help","type":"React.ReactNode","optional":true},{"name":"error","type":"React.ReactNode","optional":true},{"name":"required","type":"boolean","optional":true},{"name":"options","type":"string[]","optional":true}]},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx","layer":"component","nativeProps":true,"props":[{"name":"label","type":"React.ReactNode","optional":true},{"name":"help","type":"React.ReactNode","optional":true},{"name":"error","type":"React.ReactNode","optional":true},{"name":"controlClassName","type":"string","optional":true}]},{"name":"AsyncState","sourcePath":"components/patterns/AsyncState.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"state","type":"'loading' | 'empty' | 'error' | 'ready'","optional":false},{"name":"children","type":"React.ReactNode","optional":true},{"name":"loadingMessage","type":"React.ReactNode","optional":true},{"name":"emptyMessage","type":"React.ReactNode","optional":true},{"name":"errorMessage","type":"React.ReactNode","optional":true},{"name":"onRetry","type":"() => void","optional":true}]},{"name":"ConfirmAction","sourcePath":"components/patterns/ConfirmAction.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"triggerLabel","type":"string","optional":false},{"name":"confirmLabel","type":"string","optional":false},{"name":"description","type":"React.ReactNode","optional":false},{"name":"onConfirm","type":"() => void | Promise<void>","optional":false},{"name":"errorMessage","type":"string | ((reason: unknown) => string)","optional":true},{"name":"pendingLabel","type":"string","optional":true},{"name":"cancelLabel","type":"string","optional":true},{"name":"disabled","type":"boolean","optional":true}]},{"name":"FocusInput","sourcePath":"components/patterns/FocusInput.jsx","layer":"pattern","nativeProps":true,"props":[{"name":"eyebrow","type":"string","optional":true},{"name":"prompt","type":"string","optional":true},{"name":"hint","type":"string","optional":true},{"name":"value","type":"string","optional":true},{"name":"onChange","type":"(e: React.ChangeEvent<HTMLInputElement>) => void","optional":true},{"name":"onConfirm","type":"(e: React.KeyboardEvent<HTMLInputElement>) => void","optional":true}]},{"name":"ProcessDisclosure","sourcePath":"components/patterns/ProcessDisclosure.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"status","type":"'idle' | 'running' | 'success' | 'error'","optional":true},{"name":"title","type":"React.ReactNode","optional":false},{"name":"message","type":"React.ReactNode","optional":true},{"name":"children","type":"React.ReactNode","optional":true},{"name":"onRetry","type":"() => void","optional":true},{"name":"retryLabel","type":"string","optional":true},{"name":"defaultOpen","type":"boolean","optional":true}]},{"name":"StreamViewport","sourcePath":"components/patterns/StreamViewport.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"children","type":"React.ReactNode","optional":true},{"name":"updateKey","type":"string | number","optional":true},{"name":"height","type":"number | string","optional":true},{"name":"label","type":"string","optional":true},{"name":"jumpLabel","type":"string","optional":true},{"name":"className","type":"string","optional":true}]},{"name":"ToastHost","sourcePath":"components/patterns/ToastHost.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"notices","type":"Notice[]","optional":false},{"name":"onDismiss","type":"(id: string) => void","optional":false}]},{"name":"ProgressLine","sourcePath":"components/tasks/ProgressLine.jsx","layer":"component","nativeProps":false,"props":[{"name":"value","type":"number","optional":true},{"name":"label","type":"string","optional":true}]},{"name":"TaskItem","sourcePath":"components/tasks/TaskItem.jsx","layer":"pattern","nativeProps":false,"props":[{"name":"text","type":"string","optional":false},{"name":"done","type":"boolean","optional":true},{"name":"readOnly","type":"boolean","optional":true},{"name":"onToggle","type":"() => void","optional":true},{"name":"onDelete","type":"() => void","optional":true}]}],"sourceHashes":{"components/charts/BarChart.jsx":"3b392f1ab000a92217ea442ddd6ec239006b3e3a6a15a7b8dba7a6b7cd8bd83a","components/charts/DataTable.jsx":"8f5eadea4a4ae241c946bdac0ee61eb6c72ada9ba3d6575faa80d6063f6f96c3","components/charts/LineChart.jsx":"a77f084035d35e5d3d86481f96eebc42094521ad1c77fca60d8f7a6a89ec756e","components/charts/SparkLine.jsx":"234272618a6b3a653891867c2aff88284603f0325750572188a527ec7c1b3f84","components/content/Blockquote.jsx":"b57b98e93c4a1796deee1a75a606678ecca0212c07da161a02721b41b8e75e36","components/content/ReadingCard.jsx":"5aada5f9b1d263d6a84196ce73cd20bcba7e105b191e7a2c18d0c728738d4bb4","components/content/SideCard.jsx":"c302fd34adb79d2c46bbf71e956e253af98ea1f8c90978501c060f0101562111","components/content/StatCard.jsx":"9f35449604c64c473c0d84f55a3c940b95e30780f7038b64c951e8f7c577530e","components/content/Tag.jsx":"b2dfa49a5765e3a1b8cb045d38ad0d27faac92a41c3f2ed93af1a24dc2aed987","components/content/VerseDivider.jsx":"6a2dc68cd5392f5450ca6bdc5996cdc7ed4aad6085236c26d0742c8c4d6090da","components/core/BackLink.jsx":"a9cfd58ba5df2ad2c21a2c779507833e0504aa5082708dd6f4a23905e18dd548","components/core/Button.jsx":"85d3290887e933991ff2f48541185d45b3840d843bf434ad221d484815df8f0b","components/core/Icon.jsx":"52f593314cf49cf57148098d0f9e2fed440d8b5e9f76c0a66ad8cfef5149f157","components/core/IconButton.jsx":"6445ee101e713e57505400e3c89c3d06e786cdcb7c9ee71b0a23cc2708ff3847","components/core/NavLink.jsx":"a312b10fa7ff0a63e54c480184d2c2602b37642fe65f0dc53452c58f9ad85d7d","components/core/Surface.jsx":"c7078a63f71cf65094fcb5f62fc558e5dbd78464050c4be528fbebf638f9722f","components/core/TextLink.jsx":"d44d6150a17af7389e232a7e69878851b10826e0a34252171f3f545f92266e41","components/feedback/EmptyState.jsx":"02204ae9df8c86f37e152df962c8d9f8bff853e2be1ebfac9fe21adf1fa30c01","components/feedback/InlineFeedback.jsx":"ad062dfcf8f6d17339abd8927c4d8a90f7253db789215c85a334fce5f384da59","components/feedback/Toast.jsx":"a7b0451f58a16eb8ccac5e36be51bae842eaf8eeb9f7cc1465898f2c3a65da4d","components/feedback/ToastDark.jsx":"59dedf72eed77e4f060670437ffc743ca246e6c884723e76cff05a2634c370b3","components/forms/Checkbox.jsx":"70ce8850a54ed1f1af7bcea713c8510817c07e4acc0bd8ee48326eb18cd2c8d0","components/forms/Field.jsx":"bc9517b14771d4ffe85a308c655db96b819316845cc3decd5eeef879a0caeea2","components/forms/Input.jsx":"10d2e0e227cc0362870660be7620df66cb434c2e8a92638eeaace2f1aa55a7f9","components/forms/NotesArea.jsx":"d5123e2ea1ca2a471dcd8a2a4f8581b65fc2f7939ac274425932b2bb6a6e4c00","components/forms/Select.jsx":"248f9c3d67910aeba33e2ec6fc38fdb917307c5c61b9f420ce559fe739de2643","components/forms/Textarea.jsx":"cf250a4d46fcd3ae97be858287d4c00c9669dc473bb7af81d47de671dcce0c8f","components/patterns/AsyncState.jsx":"ae35af33001e59a427334869ce6d46f5a07442695ab6b712ff6c34ef6fbfff39","components/patterns/ConfirmAction.jsx":"ed9c42199c06e4e414d339c8f74f309f337f029ceaae92f15a3773f2068b5b20","components/patterns/FocusInput.jsx":"51a9c7908a3e58f52db19c5cba9d29a2b8024742a71e610b904527a20b532232","components/patterns/ProcessDisclosure.jsx":"c05b9962b1a49714a5ca521be9bc1b74a70bd255a8ec32be39cfa6e7da817b9c","components/patterns/StreamViewport.jsx":"cd74c8128549ac720ae2e77a211504a18f7c9f2663370b863fcd7853dd52ac32","components/patterns/ToastHost.jsx":"637e6e4d270efa79d7ff26bd504b1dbf4e4c5c4cd824e5d0251b00a02bb13517","components/tasks/ProgressLine.jsx":"cd48db258a13b5ae1f3f5682b26b7ca527519bd9903a956cb5599e69546b51eb","components/tasks/TaskItem.jsx":"2f2e6c42282537a4cf77d554ce57636f2d3b6e6cd73be133c97b9bdd8c512cd8"},"inlinedExternals":[],"unexposedExports":[],"cards":[{"path":"components/charts/charts.card.html","group":"Components","viewport":"700x1150","name":"Charts 图表","subtitle":"KAI 图表语言"},{"path":"components/content/content.card.html","group":"Components","viewport":"700x980","name":"Content 内容"},{"path":"components/core/buttons.card.html","group":"Components","viewport":"700x690","name":"Core · Button 与 Link","subtitle":"10px 圆角 · 语义图标 · 状态合同"},{"path":"components/core/surface-hierarchy.card.html","group":"Components","viewport":"700x390","name":"Core · Surface 层级","subtitle":"outline 外框 · soft 内层 · plain 内容"},{"path":"components/feedback/feedback.card.html","group":"Components","viewport":"700x560","name":"Feedback 反馈"},{"path":"components/forms/forms.card.html","group":"Components","viewport":"700x660","name":"Forms 表单","subtitle":"Field 契约"},{"path":"components/patterns/focus-pattern.card.html","group":"Patterns","viewport":"700x400","name":"Focus 一天一件事","subtitle":"KAI 产品模式 · 非 Core"},{"path":"components/patterns/rea-interactions.card.html","group":"Patterns","viewport":"1000x680","name":"REA × Claude · 交互借鉴","subtitle":"过程可见 · 滚动有控制 · KAI 视觉"},{"path":"components/tasks/tasks.card.html","group":"Components","viewport":"700x420","name":"Tasks 待办"},{"path":"guidelines/borders-radius.card.html","group":"Spacing","viewport":"700x330","name":"边界与圆角","subtitle":"小框 8 · 按钮 10 · 容器 12"},{"path":"guidelines/brand-glow.card.html","group":"Brand","viewport":"700x230","name":"品牌时刻","subtitle":"原「斜光」· opt-in · 编辑性页面才点灯"},{"path":"guidelines/brand-icons.card.html","group":"Voice","viewport":"700x410","name":"符号语言","subtitle":"轻线条图标 · 语义清楚 · 少量 Signature"},{"path":"guidelines/brand-layers.card.html","group":"Brand","viewport":"700x300","name":"两层结构","subtitle":"Quiet Base 90% · Signature 10%"},{"path":"guidelines/brand-motion.card.html","group":"Brand","viewport":"700x210","name":"Motion","subtitle":"入场一次 · hover 只变颜色 · 无位移"},{"path":"guidelines/brand-voice.card.html","group":"Voice","viewport":"700x280","name":"语气","subtitle":"不警告 · 不邀功 · 不归咎 · 事实例外"},{"path":"guidelines/charts-language.card.html","group":"Charts","viewport":"700x250","name":"图表语言","subtitle":"数据线 2px · 网格中性 · mono 标数"},{"path":"guidelines/colors-accent.card.html","group":"Colors","viewport":"700x190","name":"Blue 蓝色是性格","subtitle":"steel blue · 身份、选中、焦点、少量链接"},{"path":"guidelines/colors-green.card.html","group":"Colors","viewport":"700x190","name":"Green 绿色是呼吸","subtitle":"完成 · 恢复 · 自然 · 让界面松下来"},{"path":"guidelines/colors-neutral.card.html","group":"Colors","viewport":"700x210","name":"Quiet Base 中性色","subtitle":"90% 的界面住在这里"},{"path":"guidelines/colors-text.card.html","group":"Colors","viewport":"700x220","name":"文字色与对比度","subtitle":"四级中性 · 全部达标"},{"path":"guidelines/colors-warm.card.html","group":"Colors","viewport":"700x140","name":"温度色","subtitle":"仅 warm toast ·「需要留意」不是错误"},{"path":"guidelines/experiment-surface.card.html","group":"Experiments","viewport":"700x310","name":"实验 · 容器柔和度","subtitle":"8 / 12 / 16px 对照 · 采用 12px"},{"path":"guidelines/mobile-scale.card.html","group":"Mobile","viewport":"700x200","name":"字号塌缩","subtitle":"只动大字档 · 小的依然小"},{"path":"guidelines/mobile-tap.card.html","group":"Mobile","viewport":"700x220","name":"触控与输入","subtitle":"≥44px · 16px 防缩放 · 常显删除"},{"path":"guidelines/spacing-rhythm.card.html","group":"Spacing","viewport":"700x280","name":"排版节奏","subtitle":"签名层：断行与诗句感"},{"path":"guidelines/spacing-scale.card.html","group":"Spacing","viewport":"700x240","name":"间距标尺","subtitle":"4px 基数 · 12 档"},{"path":"guidelines/type-mono-data.card.html","group":"Type","viewport":"700x230","name":"Mono 纯数据","subtitle":"时间 · 数值 · 代码 · ID · 状态"},{"path":"guidelines/type-roles.card.html","group":"Type","viewport":"700x330","name":"Type Roles","subtitle":"先定角色，再定字号"},{"path":"guidelines/type-serif-signature.card.html","group":"Type","viewport":"700x250","name":"Serif 签名","subtitle":"只在被点名的地方出声"},{"path":"guidelines/type-ui-sans.card.html","group":"Type","viewport":"700x250","name":"UI Sans 默认语言","subtitle":"系统字体 · 中文优先 · 零设计感"},{"path":"ui_kits/daily-planner-mobile/index.html","group":"UI Kits","viewport":"390x880","name":"Planner 移动版","subtitle":"390 · 触控优先 · 全安静"},{"path":"ui_kits/daily-planner/index.html","group":"UI Kits","viewport":"680x980","name":"今日 Planner","subtitle":"工具页 · 全安静，serif 只留一处"},{"path":"ui_kits/research-flow/index.html","group":"UI Kits","viewport":"980x900","name":"研究流程 · 状态与层级","subtitle":"检索 → 处理中 → 结果/失败 · 外框与内层分工"},{"path":"ui_kits/studio-home/index.html","group":"UI Kits","viewport":"900x860","name":"工作台首页","subtitle":"品牌页 · kai-moment 点亮"}],"startingPoints":[{"kind":"screen","name":"daily-planner-mobile","path":"ui_kits/daily-planner-mobile/index.html","previewPath":"ui_kits/daily-planner-mobile/index.html","section":"Screens","subtitle":"Planner 移动版","viewport":"390x880"},{"kind":"screen","name":"daily-planner","path":"ui_kits/daily-planner/index.html","previewPath":"ui_kits/daily-planner/index.html","section":"Screens","subtitle":"今日 Planner","viewport":"680x980"},{"kind":"screen","name":"research-flow","path":"ui_kits/research-flow/index.html","previewPath":"ui_kits/research-flow/index.html","section":"Screens","subtitle":"研究流程 · Surface 层级与 Tooltip","viewport":"980x900"},{"kind":"screen","name":"studio-home","path":"ui_kits/studio-home/index.html","previewPath":"ui_kits/studio-home/index.html","section":"Screens","subtitle":"工作台首页","viewport":"900x860"}]} */
var KaiDesignSystemV4_3b9cf5 = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-global:react
  var require_react = __commonJS({
    "react-global:react"(exports, module) {
      module.exports = globalThis.React;
    }
  });

  // index.js
  var index_exports = {};
  __export(index_exports, {
    AsyncState: () => AsyncState,
    BackLink: () => BackLink,
    BarChart: () => BarChart,
    Blockquote: () => Blockquote,
    Button: () => Button,
    Checkbox: () => Checkbox,
    ConfirmAction: () => ConfirmAction,
    DataTable: () => DataTable,
    EmptyState: () => EmptyState,
    Field: () => Field,
    FocusInput: () => FocusInput,
    Icon: () => Icon,
    IconButton: () => IconButton,
    InlineFeedback: () => InlineFeedback,
    Input: () => Input,
    LineChart: () => LineChart,
    NavLink: () => NavLink,
    NotesArea: () => NotesArea,
    ProcessDisclosure: () => ProcessDisclosure,
    ProgressLine: () => ProgressLine,
    ReadingCard: () => ReadingCard,
    Select: () => Select,
    SideCard: () => SideCard,
    SparkLine: () => SparkLine,
    StatCard: () => StatCard,
    StreamViewport: () => StreamViewport,
    Surface: () => Surface,
    Tag: () => Tag,
    TaskItem: () => TaskItem,
    TextLink: () => TextLink,
    Textarea: () => Textarea,
    Toast: () => Toast,
    ToastDark: () => ToastDark,
    ToastHost: () => ToastHost,
    VerseDivider: () => VerseDivider
  });

  // components/charts/BarChart.jsx
  var import_react = __toESM(require_react(), 1);
  function BarChart({ data, height = 220 }) {
    if (!data.length) return /* @__PURE__ */ import_react.default.createElement("p", { className: "kai-field-help", role: "status" }, "\u6682\u65E0\u6570\u636E");
    const W = 600;
    const H = height;
    const P = { top: 24, right: 16, bottom: 28, left: 16 };
    const values = data.map((d) => d.value);
    const max = Math.max(...values, 0);
    const iw = W - P.left - P.right, ih = H - P.top - P.bottom;
    const step = iw / data.length;
    const bw = Math.min(step * 0.52, 48);
    const mono = { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em" };
    const baseline = P.top + ih;
    return /* @__PURE__ */ import_react.default.createElement("svg", { viewBox: `0 0 ${W} ${H}`, style: { width: "100%", height: "auto", display: "block" }, role: "img" }, /* @__PURE__ */ import_react.default.createElement(
      "line",
      {
        x1: P.left,
        x2: W - P.right,
        y1: baseline,
        y2: baseline,
        stroke: "var(--border-1)",
        strokeWidth: "1",
        vectorEffect: "non-scaling-stroke"
      }
    ), data.map((d, i) => {
      const bh = max > 0 ? d.value / max * (ih - 18) : 0;
      const x = P.left + i * step + (step - bw) / 2;
      const y = baseline - bh;
      return /* @__PURE__ */ import_react.default.createElement("g", { key: i }, /* @__PURE__ */ import_react.default.createElement("rect", { x, y, width: bw, height: Math.max(bh, 1), fill: "var(--accent)" }), /* @__PURE__ */ import_react.default.createElement("text", { x: x + bw / 2, y: y - 6, fill: "var(--text-2)", style: { ...mono, textAnchor: "middle" } }, d.value), /* @__PURE__ */ import_react.default.createElement("text", { x: x + bw / 2, y: H - 8, fill: "var(--text-3)", style: { ...mono, textAnchor: "middle" } }, d.label));
    }));
  }

  // components/charts/DataTable.jsx
  var import_react2 = __toESM(require_react(), 1);
  function DataTable({ columns, rows, align }) {
    const alignOf = (c) => align && align[c] === "right" ? "kai-table-num" : "";
    return /* @__PURE__ */ import_react2.default.createElement("table", { className: "kai-table" }, /* @__PURE__ */ import_react2.default.createElement("thead", null, /* @__PURE__ */ import_react2.default.createElement("tr", null, columns.map((c) => /* @__PURE__ */ import_react2.default.createElement("th", { key: c, style: align && align[c] === "right" ? { textAlign: "right" } : null }, c)))), /* @__PURE__ */ import_react2.default.createElement("tbody", null, rows.map((r, i) => /* @__PURE__ */ import_react2.default.createElement("tr", { key: i }, r.map((cell, j) => /* @__PURE__ */ import_react2.default.createElement("td", { key: j, className: alignOf(columns[j]) }, cell))))));
  }

  // components/charts/LineChart.jsx
  var import_react3 = __toESM(require_react(), 1);
  function LineChart({ data, labels, height = 240, area = true, annotation }) {
    if (!data.length) return /* @__PURE__ */ import_react3.default.createElement("p", { className: "kai-field-help", role: "status" }, "\u6682\u65E0\u6570\u636E");
    const W = 600;
    const H = height;
    const P = { top: 28, right: 76, bottom: 30, left: 20 };
    const values = data.map((d) => typeof d === "number" ? d : d.value);
    const min = Math.min(...values), max = Math.max(...values);
    const pad = (max - min) * 0.08 || Math.abs(max) * 0.08 || 1;
    const lo = min - pad, hi = max + pad, span = hi - lo;
    const iw = W - P.left - P.right, ih = H - P.top - P.bottom;
    const px = (i) => P.left + (values.length === 1 ? iw / 2 : i / (values.length - 1) * iw);
    const py = (v) => P.top + ih - (v - lo) / span * ih;
    const pts = values.map((v, i) => [px(i), py(v)]);
    const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
    const base = (P.top + ih).toFixed(1);
    const areaPath = area ? `${line} L${pts[pts.length - 1][0].toFixed(1)} ${base} L${pts[0][0].toFixed(1)} ${base} Z` : null;
    const last = pts[pts.length - 1];
    const gridVals = [lo + pad, (min + max) / 2, hi - pad];
    const mono = { fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em" };
    const n = values.length;
    return /* @__PURE__ */ import_react3.default.createElement("svg", { viewBox: `0 0 ${W} ${H}`, style: { width: "100%", height: "auto", display: "block" }, role: "img" }, gridVals.map((v, i) => /* @__PURE__ */ import_react3.default.createElement("g", { key: i }, /* @__PURE__ */ import_react3.default.createElement(
      "line",
      {
        x1: P.left,
        x2: W - P.right,
        y1: py(v),
        y2: py(v),
        stroke: "var(--border-1)",
        strokeWidth: "1",
        vectorEffect: "non-scaling-stroke"
      }
    ), /* @__PURE__ */ import_react3.default.createElement("text", { x: W - P.right + 8, y: py(v) + 3, fill: "var(--text-3)", style: mono }, Math.abs(v) >= 100 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, "")))), areaPath && /* @__PURE__ */ import_react3.default.createElement("path", { d: areaPath, fill: "var(--accent-wash)", opacity: "0.55" }), /* @__PURE__ */ import_react3.default.createElement(
      "path",
      {
        d: line,
        fill: "none",
        stroke: "var(--accent)",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        vectorEffect: "non-scaling-stroke"
      }
    ), /* @__PURE__ */ import_react3.default.createElement("circle", { cx: last[0], cy: last[1], r: "3", fill: "var(--accent)" }), /* @__PURE__ */ import_react3.default.createElement("text", { x: last[0] + 8, y: last[1] + 3, fill: "var(--text-1)", style: { ...mono, fontSize: 11 } }, values[n - 1]), annotation && /* @__PURE__ */ import_react3.default.createElement("g", null, /* @__PURE__ */ import_react3.default.createElement(
      "line",
      {
        x1: px(annotation.index),
        x2: px(annotation.index),
        y1: P.top,
        y2: P.top + ih,
        stroke: "var(--border-2)",
        strokeWidth: "1",
        vectorEffect: "non-scaling-stroke"
      }
    ), /* @__PURE__ */ import_react3.default.createElement(
      "text",
      {
        x: px(annotation.index) + 6,
        y: P.top + 12,
        fill: "var(--text-2)",
        style: { fontFamily: "var(--font-serif)", fontSize: 12, fontStyle: "italic" }
      },
      annotation.label
    )), labels && /* @__PURE__ */ import_react3.default.createElement("g", null, /* @__PURE__ */ import_react3.default.createElement("text", { x: P.left, y: H - 8, fill: "var(--text-3)", style: mono }, labels[0]), /* @__PURE__ */ import_react3.default.createElement("text", { x: W - P.right, y: H - 8, fill: "var(--text-3)", style: { ...mono, textAnchor: "end" } }, labels[labels.length - 1])));
  }

  // components/charts/SparkLine.jsx
  var import_react4 = __toESM(require_react(), 1);
  function SparkLine({ data, width = 96, height = 28 }) {
    if (!data.length) return null;
    const min = Math.min(...data), max = Math.max(...data);
    const span = max - min || 1;
    const px = (i) => (data.length === 1 ? 0.5 : i / (data.length - 1)) * (width - 6) + 3;
    const py = (v) => height - 4 - (v - min) / span * (height - 8);
    const pts = data.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
    const lastX = px(data.length - 1), lastY = py(data[data.length - 1]);
    return /* @__PURE__ */ import_react4.default.createElement("svg", { viewBox: `0 0 ${width} ${height}`, width, height, style: { display: "block" }, "aria-hidden": "true" }, /* @__PURE__ */ import_react4.default.createElement(
      "polyline",
      {
        points: pts,
        fill: "none",
        stroke: "var(--accent)",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        vectorEffect: "non-scaling-stroke"
      }
    ), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: lastX, cy: lastY, r: "2.5", fill: "var(--accent)" }));
  }

  // components/content/Blockquote.jsx
  var import_react5 = __toESM(require_react(), 1);
  function Blockquote({ text, source }) {
    return /* @__PURE__ */ import_react5.default.createElement("blockquote", { className: "kai-blockquote" }, /* @__PURE__ */ import_react5.default.createElement("p", { className: "kai-blockquote-text" }, text), source ? /* @__PURE__ */ import_react5.default.createElement("span", { className: "kai-blockquote-source" }, source) : null);
  }

  // components/content/ReadingCard.jsx
  var import_react6 = __toESM(require_react(), 1);
  function ReadingCard({ tag, date, title, lead, children, readLabel = "\u7EE7\u7EED\u9605\u8BFB", readHref, readTime }) {
    return /* @__PURE__ */ import_react6.default.createElement("article", { className: "kai-reading-card" }, (tag || date) && /* @__PURE__ */ import_react6.default.createElement("div", { className: "kai-reading-meta" }, tag ? /* @__PURE__ */ import_react6.default.createElement("span", { className: "kai-tag" }, tag) : null, date ? /* @__PURE__ */ import_react6.default.createElement("span", { className: "kai-reading-date" }, date) : null), /* @__PURE__ */ import_react6.default.createElement("h2", { className: "kai-reading-title" }, title), lead ? /* @__PURE__ */ import_react6.default.createElement("span", { className: "kai-reading-lead" }, lead) : null, /* @__PURE__ */ import_react6.default.createElement("div", { className: "kai-reading-body" }, children), readHref || readTime ? /* @__PURE__ */ import_react6.default.createElement("div", { className: `kai-reading-footer${readHref ? "" : " is-meta-only"}` }, readHref ? /* @__PURE__ */ import_react6.default.createElement("a", { className: "kai-read-more", href: readHref }, readLabel) : null, readTime ? /* @__PURE__ */ import_react6.default.createElement("span", { className: "kai-read-time" }, readTime) : null) : null);
  }

  // components/content/SideCard.jsx
  var import_react7 = __toESM(require_react(), 1);
  function SideCard({ tone = "default", title, sub }) {
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: `kai-side-card${tone === "dark" ? " kai-side-card--dark" : ""}` }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "kai-side-title" }, title), sub ? /* @__PURE__ */ import_react7.default.createElement("div", { className: "kai-side-sub" }, sub) : null);
  }

  // components/content/StatCard.jsx
  var import_react8 = __toESM(require_react(), 1);
  function StatCard({ label, value, sub, delta }) {
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: "kai-stat-card" }, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("div", { className: "kai-stat-label" }, label), /* @__PURE__ */ import_react8.default.createElement("div", { className: "kai-stat-value" }, value, sub ? /* @__PURE__ */ import_react8.default.createElement("sub", null, sub) : null)), delta ? /* @__PURE__ */ import_react8.default.createElement("div", { className: "kai-stat-delta" }, delta) : null);
  }

  // components/content/Tag.jsx
  var import_react9 = __toESM(require_react(), 1);
  function Tag({ children }) {
    return /* @__PURE__ */ import_react9.default.createElement("span", { className: "kai-tag" }, children);
  }

  // components/content/VerseDivider.jsx
  var import_react10 = __toESM(require_react(), 1);
  function VerseDivider({ children }) {
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "kai-verse-divider" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "kai-verse-line" }), /* @__PURE__ */ import_react10.default.createElement("div", { className: "kai-verse-text" }, children), /* @__PURE__ */ import_react10.default.createElement("div", { className: "kai-verse-line" }));
  }

  // components/core/BackLink.jsx
  var import_react11 = __toESM(require_react(), 1);
  var BackLink = import_react11.default.forwardRef(function BackLink2({ href, className = "", children = "\u8FD4\u56DE", ...rest }, ref) {
    return /* @__PURE__ */ import_react11.default.createElement("a", { ...rest, ref, href, className: (`kai-backlink ` + className).trim() }, children);
  });

  // components/core/Button.jsx
  var import_react12 = __toESM(require_react(), 1);
  var Button = import_react12.default.forwardRef(function Button2({ variant = "primary", pending = false, disabled = false, type = "button", className = "", leadingIcon, trailingIcon, children, ...rest }, ref) {
    const busy = pending || className.split(/\s+/).includes("is-pending");
    return /* @__PURE__ */ import_react12.default.createElement(
      "button",
      {
        ...rest,
        ref,
        type,
        disabled: disabled || busy,
        "aria-busy": busy || rest["aria-busy"],
        className: `kai-btn kai-btn--${variant}${busy ? " is-pending" : ""} ${className}`.trim()
      },
      leadingIcon ? /* @__PURE__ */ import_react12.default.createElement("span", { className: "kai-btn-icon", "aria-hidden": "true" }, leadingIcon) : null,
      children,
      trailingIcon ? /* @__PURE__ */ import_react12.default.createElement("span", { className: "kai-btn-icon", "aria-hidden": "true" }, trailingIcon) : null
    );
  });

  // components/core/Icon.jsx
  var import_react13 = __toESM(require_react(), 1);
  var drawings = {
    add: /* @__PURE__ */ import_react13.default.createElement("path", { d: "M12 5v14M5 12h14" }),
    arrowRight: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M4 12h15" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "m13 6 6 6-6 6" })),
    arrowUpRight: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M5 19 19 5" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M9 5h10v10" })),
    arrowDown: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M12 4v15" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "m6 13 6 6 6-6" })),
    chevronDown: /* @__PURE__ */ import_react13.default.createElement("path", { d: "m6 9 6 6 6-6" }),
    chevronUp: /* @__PURE__ */ import_react13.default.createElement("path", { d: "m6 15 6-6 6 6" }),
    check: /* @__PURE__ */ import_react13.default.createElement("path", { d: "m5 12 4 4L19 6" }),
    close: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M6 6 18 18" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M18 6 6 18" })),
    search: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("circle", { cx: "10.8", cy: "10.8", r: "6.3" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "m16 16 4 4" })),
    refresh: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M20 7v5h-5" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M4 17v-5h5" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M5.8 9A7 7 0 0 1 18 7l2 5M4 12l2 5a7 7 0 0 0 12.2-2" })),
    info: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("circle", { cx: "12", cy: "12", r: "8" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M12 11v5" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M12 8h.01" })),
    alert: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "M10.3 4.5 2.8 17.2a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.5a2 2 0 0 0-3.4 0Z" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M12 9v4" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M12 17h.01" })),
    clock: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("circle", { cx: "12", cy: "12", r: "8" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "M12 7.5V12l3.5 2" })),
    more: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("circle", { cx: "5", cy: "12", r: ".8", fill: "currentColor", stroke: "none" }), /* @__PURE__ */ import_react13.default.createElement("circle", { cx: "12", cy: "12", r: ".8", fill: "currentColor", stroke: "none" }), /* @__PURE__ */ import_react13.default.createElement("circle", { cx: "19", cy: "12", r: ".8", fill: "currentColor", stroke: "none" })),
    spark: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement("path", { d: "m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" }), /* @__PURE__ */ import_react13.default.createElement("path", { d: "m19 16 .6 1.4L21 18l-1.4.6L19 20l-.6-1.4L17 18l1.4-.6L19 16Z" }))
  };
  function Icon({ name, size = 18, strokeWidth = 1.75, className = "", ...rest }) {
    if (!Object.hasOwn(drawings, name)) return null;
    const labelled = Boolean(rest["aria-label"]);
    return /* @__PURE__ */ import_react13.default.createElement(
      "svg",
      {
        ...rest,
        className: `kai-icon ${className}`.trim(),
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        focusable: "false",
        role: labelled ? "img" : void 0,
        "aria-hidden": labelled ? void 0 : true
      },
      drawings[name]
    );
  }

  // components/core/IconButton.jsx
  var import_react14 = __toESM(require_react(), 1);
  var IconButton = import_react14.default.forwardRef(function IconButton2({ className = "", icon, tooltipAlign = "center", children, ...rest }, ref) {
    return /* @__PURE__ */ import_react14.default.createElement(Button, { variant: "secondary", ...rest, ref, "data-tooltip-align": tooltipAlign, className: `kai-icon-button ${className}`.trim() }, icon ?? children);
  });

  // components/core/NavLink.jsx
  var import_react15 = __toESM(require_react(), 1);
  var NavLink = import_react15.default.forwardRef(function NavLink2({ href, active = false, className = "", children, ...rest }, ref) {
    const current = active ? rest["aria-current"] || "page" : void 0;
    return /* @__PURE__ */ import_react15.default.createElement("a", { ...rest, ref, href, "aria-current": current, className: `kai-navlink${active ? " is-active" : ""} ${className}`.trim() }, children);
  });

  // components/core/Surface.jsx
  var import_react16 = __toESM(require_react(), 1);
  var Surface = import_react16.default.forwardRef(function Surface2({ variant = "outline", className = "", children, ...rest }, ref) {
    return /* @__PURE__ */ import_react16.default.createElement("div", { ...rest, ref, className: `kai-surface kai-surface--${variant} ${className}`.trim() }, children);
  });

  // components/core/TextLink.jsx
  var import_react17 = __toESM(require_react(), 1);
  var TextLink = import_react17.default.forwardRef(function TextLink2({ href, external = false, className = "", children, ...rest }, ref) {
    return /* @__PURE__ */ import_react17.default.createElement("a", { ...rest, ref, href, ...external ? { target: "_blank", rel: "noopener noreferrer" } : {}, className: `kai-textlink ${className}`.trim() }, children, /* @__PURE__ */ import_react17.default.createElement("span", { className: "kai-textlink-mark", "aria-hidden": "true" }, external ? "\u2197" : "\u2192"), external ? /* @__PURE__ */ import_react17.default.createElement("span", { className: "kai-sr-only" }, "\uFF08\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00\uFF09") : null);
  });

  // components/feedback/EmptyState.jsx
  var import_react18 = __toESM(require_react(), 1);
  function EmptyState({ icon = "\u25CB", title, body, actionLabel, actionHref, onAction }) {
    return /* @__PURE__ */ import_react18.default.createElement("div", { className: "kai-empty" }, /* @__PURE__ */ import_react18.default.createElement("div", { className: "kai-empty-icon" }, icon), /* @__PURE__ */ import_react18.default.createElement("div", { className: "kai-empty-title" }, title), body ? /* @__PURE__ */ import_react18.default.createElement("div", { className: "kai-empty-body" }, body) : null, actionLabel ? /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, actionHref ? /* @__PURE__ */ import_react18.default.createElement("a", { className: "kai-empty-action", href: actionHref }, actionLabel) : /* @__PURE__ */ import_react18.default.createElement("button", { type: "button", className: "kai-empty-action", onClick: onAction }, actionLabel)) : null);
  }

  // components/feedback/InlineFeedback.jsx
  var import_react19 = __toESM(require_react(), 1);
  function InlineFeedback({ tone = "info", children, className = "", ...rest }) {
    return /* @__PURE__ */ import_react19.default.createElement(
      "div",
      {
        ...rest,
        className: `kai-feedback kai-feedback--${tone} ${className}`.trim(),
        role: tone === "error" ? "alert" : "status",
        "aria-atomic": "true"
      },
      children
    );
  }

  // components/feedback/Toast.jsx
  var import_react20 = __toESM(require_react(), 1);
  function Toast({ temp = "info", tone, title, body, actionLabel, onAction, onDismiss }) {
    return /* @__PURE__ */ import_react20.default.createElement("div", { className: `kai-toast kai-toast--${tone || temp}`, role: tone === "error" || !tone && ["danger", "error"].includes(temp) ? "alert" : "status", "aria-atomic": "true" }, /* @__PURE__ */ import_react20.default.createElement("div", { className: "kai-toast-dot" }), /* @__PURE__ */ import_react20.default.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ import_react20.default.createElement("div", { className: "kai-toast-title" }, title), body ? /* @__PURE__ */ import_react20.default.createElement("div", { className: "kai-toast-body" }, body) : null, actionLabel ? /* @__PURE__ */ import_react20.default.createElement("button", { type: "button", className: "kai-toast-action", onClick: onAction }, actionLabel) : null), onDismiss ? /* @__PURE__ */ import_react20.default.createElement("button", { type: "button", className: "kai-toast-dismiss", "aria-label": "\u5173\u95ED", onClick: onDismiss }, "\xD7") : null);
  }

  // components/feedback/ToastDark.jsx
  var import_react21 = __toESM(require_react(), 1);
  function ToastDark({ children }) {
    return /* @__PURE__ */ import_react21.default.createElement("div", { className: "kai-toast kai-toast--dark", role: "status" }, children);
  }

  // components/forms/Checkbox.jsx
  var import_react22 = __toESM(require_react(), 1);
  var Checkbox = import_react22.default.forwardRef(function Checkbox2({ label, className = "", ...rest }, ref) {
    return /* @__PURE__ */ import_react22.default.createElement("label", { className: `kai-checkbox ${className}`.trim() }, /* @__PURE__ */ import_react22.default.createElement("input", { ...rest, ref, type: "checkbox" }), /* @__PURE__ */ import_react22.default.createElement("span", null, label));
  });

  // components/forms/Field.jsx
  var import_react23 = __toESM(require_react(), 1);
  function Field({ id, label, help, error, required = false, className = "", style, children }) {
    const generatedId = import_react23.default.useId();
    const control = import_react23.default.Children.only(children);
    const controlId = id || control.props.id || `kai-field-${generatedId}`;
    const message = error || help;
    const messageId = message ? `${controlId}-${error ? "error" : "help"}` : void 0;
    const describedBy = [control.props["aria-describedby"], messageId].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ import_react23.default.createElement("div", { className: `kai-field ${className}`.trim(), style }, label ? /* @__PURE__ */ import_react23.default.createElement("label", { className: "kai-field-label", htmlFor: controlId }, label, required ? /* @__PURE__ */ import_react23.default.createElement("span", { "aria-hidden": "true" }, " *") : null) : null, import_react23.default.cloneElement(control, {
      id: controlId,
      required: required || control.props.required,
      "aria-invalid": error ? true : control.props["aria-invalid"],
      "aria-describedby": describedBy
    }), message ? /* @__PURE__ */ import_react23.default.createElement("p", { id: messageId, className: error ? "kai-field-error" : "kai-field-help" }, message) : null);
  }

  // components/forms/Input.jsx
  var import_react24 = __toESM(require_react(), 1);
  var Input = import_react24.default.forwardRef(function Input2({ label, help, error, required = false, className = "", controlClassName = "", id, style, ...rest }, ref) {
    return /* @__PURE__ */ import_react24.default.createElement(Field, { id, label, help, error, required, className, style }, /* @__PURE__ */ import_react24.default.createElement("input", { ...rest, ref, className: `kai-input${error ? " kai-input--error" : ""} ${controlClassName}`.trim() }));
  });

  // components/forms/NotesArea.jsx
  var import_react25 = __toESM(require_react(), 1);
  function NotesArea({ placeholder = "\u968F\u624B\u8BB0\u70B9\u4EC0\u4E48\u2026\u2026", rows = 3, className = "", ...rest }) {
    return /* @__PURE__ */ import_react25.default.createElement(
      "textarea",
      {
        className: `kai-notes ${className}`.trim(),
        placeholder,
        rows,
        ...rest
      }
    );
  }

  // components/forms/Select.jsx
  var import_react26 = __toESM(require_react(), 1);
  var Select = import_react26.default.forwardRef(function Select2({ label, help, error, required = false, options = [], children, className = "", controlClassName = "", id, style, ...rest }, ref) {
    return /* @__PURE__ */ import_react26.default.createElement(Field, { id, label, help, error, required, className, style }, /* @__PURE__ */ import_react26.default.createElement("select", { ...rest, ref, className: `kai-select${error ? " kai-select--error" : ""} ${controlClassName}`.trim() }, children || options.map((o) => /* @__PURE__ */ import_react26.default.createElement("option", { key: o, value: o }, o))));
  });

  // components/forms/Textarea.jsx
  var import_react27 = __toESM(require_react(), 1);
  var Textarea = import_react27.default.forwardRef(function Textarea2({ label, help, error, required = false, rows = 3, className = "", controlClassName = "", id, style, ...rest }, ref) {
    return /* @__PURE__ */ import_react27.default.createElement(Field, { id, label, help, error, required, className, style }, /* @__PURE__ */ import_react27.default.createElement("textarea", { ...rest, ref, rows, className: `kai-input kai-textarea${error ? " kai-input--error" : ""} ${controlClassName}`.trim() }));
  });

  // components/patterns/AsyncState.jsx
  var import_react28 = __toESM(require_react(), 1);
  function AsyncState({ state, children, loadingMessage = "\u6B63\u5728\u8BFB\u53D6\u2026\u2026", emptyMessage = "\u8FD9\u91CC\u8FD8\u6CA1\u6709\u5185\u5BB9\u3002", errorMessage = "\u6CA1\u6709\u8BFB\u53D6\u6210\u529F\uFF0C\u53EF\u4EE5\u518D\u8BD5\u4E00\u6B21\u3002", onRetry }) {
    if (state === "ready") return children;
    if (state === "loading") return /* @__PURE__ */ import_react28.default.createElement("div", { "aria-busy": "true" }, /* @__PURE__ */ import_react28.default.createElement(InlineFeedback, null, loadingMessage));
    return /* @__PURE__ */ import_react28.default.createElement("div", { className: "kai-stack" }, /* @__PURE__ */ import_react28.default.createElement(InlineFeedback, { tone: state === "error" ? "error" : "info" }, state === "error" ? errorMessage : emptyMessage), state === "error" && onRetry ? /* @__PURE__ */ import_react28.default.createElement(Button, { variant: "secondary", onClick: onRetry }, "\u91CD\u65B0\u8BFB\u53D6") : null);
  }

  // components/patterns/ConfirmAction.jsx
  var import_react29 = __toESM(require_react(), 1);
  function ConfirmAction({ triggerLabel, confirmLabel, description, onConfirm, errorMessage = "\u64CD\u4F5C\u6CA1\u6709\u5B8C\u6210\uFF0C\u53EF\u4EE5\u518D\u8BD5\u4E00\u6B21\u3002", pendingLabel = "\u6B63\u5728\u5904\u7406\u2026\u2026", cancelLabel = "\u53D6\u6D88", disabled = false }) {
    const [confirming, setConfirming] = import_react29.default.useState(false);
    const [pending, setPending] = import_react29.default.useState(false);
    const [error, setError] = import_react29.default.useState(null);
    const inFlight = import_react29.default.useRef(false);
    const trigger = import_react29.default.useRef(null);
    const cancel = import_react29.default.useRef(null);
    const descriptionId = import_react29.default.useId();
    import_react29.default.useEffect(() => {
      if (confirming) cancel.current?.focus();
    }, [confirming]);
    async function confirm() {
      if (inFlight.current) return;
      inFlight.current = true;
      setPending(true);
      setError(null);
      try {
        await onConfirm();
        setConfirming(false);
      } catch (reason) {
        setError(typeof errorMessage === "function" ? errorMessage(reason) : errorMessage);
      } finally {
        inFlight.current = false;
        setPending(false);
      }
    }
    return /* @__PURE__ */ import_react29.default.createElement("div", { className: "kai-stack" }, /* @__PURE__ */ import_react29.default.createElement(Button, { ref: trigger, variant: "secondary", disabled: disabled || confirming, onClick: () => {
      setError(null);
      setConfirming(true);
    } }, triggerLabel), confirming ? /* @__PURE__ */ import_react29.default.createElement("div", { className: "kai-stack", role: "group", "aria-describedby": descriptionId }, /* @__PURE__ */ import_react29.default.createElement("p", { id: descriptionId, className: "kai-body" }, description), error ? /* @__PURE__ */ import_react29.default.createElement(InlineFeedback, { tone: "error" }, error) : null, /* @__PURE__ */ import_react29.default.createElement("div", { className: "kai-actions" }, /* @__PURE__ */ import_react29.default.createElement(Button, { pending, onClick: confirm }, pending ? pendingLabel : confirmLabel), /* @__PURE__ */ import_react29.default.createElement(Button, { ref: cancel, variant: "secondary", disabled: pending, onClick: () => {
      setConfirming(false);
      requestAnimationFrame(() => trigger.current?.focus());
    } }, cancelLabel))) : null);
  }

  // components/patterns/FocusInput.jsx
  var import_react30 = __toESM(require_react(), 1);
  function FocusInput({ eyebrow = "\u4ECA\u5929\u6700\u91CD\u8981\u7684\u4E00\u4EF6\u4E8B", prompt = "\u53EA\u6709\u4E00\u4EF6\u3002", hint = "\u6309 Enter \u786E\u8BA4", value, onChange, onConfirm, onKeyDown, onCompositionStart, onCompositionEnd, placeholder = "\u5199\u4E0B\u5B83\u2026\u2026", ...rest }) {
    const [showHint, setShowHint] = import_react30.default.useState(false);
    const composing = import_react30.default.useRef(false);
    return /* @__PURE__ */ import_react30.default.createElement("div", { className: "kai-focus-zone", style: { padding: "72px 0 56px", textAlign: "center" } }, /* @__PURE__ */ import_react30.default.createElement("div", { className: "kai-eyebrow", style: { justifyContent: "center", marginBottom: 28 } }, eyebrow), /* @__PURE__ */ import_react30.default.createElement("p", { style: {
      fontFamily: "var(--font-serif)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-body-sm)",
      color: "var(--text-3)",
      fontStyle: "italic",
      marginBottom: 16,
      letterSpacing: "0.04em"
    } }, prompt), /* @__PURE__ */ import_react30.default.createElement(
      "input",
      {
        className: "kai-focus-input",
        style: { maxWidth: 480, display: "block", margin: "0 auto 12px" },
        value,
        onChange: (e) => {
          setShowHint(true);
          onChange && onChange(e);
        },
        onCompositionStart: (e) => {
          composing.current = true;
          onCompositionStart?.(e);
        },
        onCompositionEnd: (e) => {
          composing.current = false;
          onCompositionEnd?.(e);
        },
        onKeyDown: (e) => {
          onKeyDown?.(e);
          if (e.defaultPrevented || composing.current || e.nativeEvent?.isComposing || e.keyCode === 229) return;
          if (e.key === "Enter" && onConfirm) {
            onConfirm(e);
            setShowHint(false);
          }
        },
        placeholder,
        maxLength: 60,
        autoComplete: "off",
        ...rest
      }
    ), /* @__PURE__ */ import_react30.default.createElement("div", { style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-caption)",
      color: "var(--text-3)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginTop: 16,
      opacity: showHint ? 1 : 0,
      transition: "opacity var(--duration-slow)"
    } }, hint));
  }

  // components/patterns/ProcessDisclosure.jsx
  var import_react31 = __toESM(require_react(), 1);
  var copy = {
    idle: "\u51C6\u5907\u5C31\u7EEA",
    running: "\u6B63\u5728\u5904\u7406\u2026\u2026",
    success: "\u5DF2\u7ECF\u5B8C\u6210",
    error: "\u6CA1\u6709\u5B8C\u6210\uFF0C\u53EF\u4EE5\u518D\u8BD5\u4E00\u6B21\u3002"
  };
  var statusIcon = { idle: "info", running: "clock", success: "check", error: "alert" };
  function ProcessDisclosure({ status = "idle", title, message, children, onRetry, retryLabel = "\u91CD\u8BD5", defaultOpen = false }) {
    const [open, setOpen] = import_react31.default.useState(defaultOpen);
    const detailId = import_react31.default.useId();
    const hasDetails = import_react31.default.Children.count(children) > 0;
    const current = copy[status] ? status : "idle";
    return /* @__PURE__ */ import_react31.default.createElement("section", { className: "kai-process", "data-status": current, "aria-busy": current === "running" }, /* @__PURE__ */ import_react31.default.createElement("div", { className: "kai-process-head" }, /* @__PURE__ */ import_react31.default.createElement(Icon, { className: "kai-process-mark", name: statusIcon[current], size: 18 }), /* @__PURE__ */ import_react31.default.createElement("div", { className: "kai-process-main" }, /* @__PURE__ */ import_react31.default.createElement("div", { className: "kai-process-title" }, title), /* @__PURE__ */ import_react31.default.createElement("div", { className: "kai-process-message", role: "status", "aria-live": "polite" }, message ?? copy[current])), hasDetails ? /* @__PURE__ */ import_react31.default.createElement("button", { type: "button", className: "kai-process-toggle", "aria-expanded": open, "aria-controls": detailId, onClick: () => setOpen((value) => !value) }, open ? "\u6536\u8D77\u8BE6\u60C5" : "\u67E5\u770B\u8BE6\u60C5", " ", /* @__PURE__ */ import_react31.default.createElement(Icon, { name: open ? "chevronUp" : "chevronDown", size: 16 })) : null), hasDetails ? /* @__PURE__ */ import_react31.default.createElement("div", { id: detailId, className: "kai-process-detail", hidden: !open }, children) : null, current === "error" && onRetry ? /* @__PURE__ */ import_react31.default.createElement("div", { className: "kai-process-actions" }, /* @__PURE__ */ import_react31.default.createElement(Button, { variant: "secondary", leadingIcon: /* @__PURE__ */ import_react31.default.createElement(Icon, { name: "refresh", size: 16 }), onClick: onRetry }, retryLabel)) : null);
  }

  // components/patterns/StreamViewport.jsx
  var import_react32 = __toESM(require_react(), 1);
  function StreamViewport({ children, updateKey, height = 320, label = "\u52A8\u6001\u5185\u5BB9", jumpLabel = "\u67E5\u770B\u6700\u65B0\u5185\u5BB9", className = "" }) {
    const viewport = import_react32.default.useRef(null);
    const pinned = import_react32.default.useRef(true);
    const [showJump, setShowJump] = import_react32.default.useState(false);
    const [edges, setEdges] = import_react32.default.useState({ top: false, bottom: false });
    const measure = import_react32.default.useCallback(() => {
      const node = viewport.current;
      if (!node) return;
      const remaining = node.scrollHeight - node.clientHeight - node.scrollTop;
      setEdges({ top: node.scrollTop > 1, bottom: remaining > 1 });
    }, []);
    const toLatest = import_react32.default.useCallback(() => {
      const node = viewport.current;
      if (!node) return;
      pinned.current = true;
      node.scrollTop = node.scrollHeight;
      setShowJump(false);
      measure();
    }, [measure]);
    import_react32.default.useLayoutEffect(() => {
      const node = viewport.current;
      if (!node) return;
      if (pinned.current) node.scrollTop = node.scrollHeight;
      else setShowJump(node.scrollHeight - node.clientHeight - node.scrollTop > 40);
      measure();
    }, [updateKey, measure]);
    import_react32.default.useEffect(() => {
      const node = viewport.current;
      if (!node || typeof ResizeObserver === "undefined") return;
      const observer = new ResizeObserver(() => {
        if (pinned.current) node.scrollTop = node.scrollHeight;
        measure();
      });
      observer.observe(node);
      if (node.firstElementChild) observer.observe(node.firstElementChild);
      return () => observer.disconnect();
    }, [measure]);
    function handleScroll() {
      const node = viewport.current;
      if (!node) return;
      pinned.current = node.scrollHeight - node.clientHeight - node.scrollTop <= 40;
      setShowJump(!pinned.current);
      measure();
    }
    return /* @__PURE__ */ import_react32.default.createElement("div", { className: `kai-stream ${className}`.trim() }, /* @__PURE__ */ import_react32.default.createElement(
      "div",
      {
        ref: viewport,
        className: "kai-stream-viewport",
        role: "region",
        "aria-label": label,
        tabIndex: 0,
        "data-fade-top": edges.top,
        "data-fade-bottom": edges.bottom,
        style: { height },
        onScroll: handleScroll
      },
      /* @__PURE__ */ import_react32.default.createElement("div", { className: "kai-stream-content" }, children)
    ), showJump ? /* @__PURE__ */ import_react32.default.createElement("button", { type: "button", className: "kai-stream-jump", onClick: toLatest }, jumpLabel, " ", /* @__PURE__ */ import_react32.default.createElement(Icon, { name: "arrowDown", size: 16 })) : null);
  }

  // components/patterns/ToastHost.jsx
  var import_react33 = __toESM(require_react(), 1);
  function Notice({ notice, onDismiss }) {
    const [hovered, setHovered] = import_react33.default.useState(false);
    const [focused, setFocused] = import_react33.default.useState(false);
    const paused = hovered || focused;
    const [hidden, setHidden] = import_react33.default.useState(false);
    const remaining = import_react33.default.useRef(5e3);
    const persistent = ["danger", "error", "warning", "warm"].includes(notice.tone);
    import_react33.default.useEffect(() => {
      const update = () => setHidden(document.hidden);
      update();
      document.addEventListener("visibilitychange", update);
      return () => document.removeEventListener("visibilitychange", update);
    }, []);
    import_react33.default.useEffect(() => {
      if (persistent || paused || hidden) return;
      const start = Date.now();
      const timer = setTimeout(() => onDismiss(notice.id), remaining.current);
      return () => {
        clearTimeout(timer);
        remaining.current = Math.max(0, remaining.current - (Date.now() - start));
      };
    }, [notice.id, onDismiss, persistent, paused, hidden]);
    return /* @__PURE__ */ import_react33.default.createElement(
      "div",
      {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onFocus: () => setFocused(true),
        onBlur: (e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
        }
      },
      /* @__PURE__ */ import_react33.default.createElement(Toast, { temp: notice.tone, title: notice.message, onDismiss: () => onDismiss(notice.id) })
    );
  }
  function ToastHost({ notices, onDismiss }) {
    return /* @__PURE__ */ import_react33.default.createElement("div", { className: "kai-toast-host", "aria-label": "\u901A\u77E5" }, notices.map((notice) => /* @__PURE__ */ import_react33.default.createElement(Notice, { key: notice.id, notice, onDismiss })));
  }

  // components/tasks/ProgressLine.jsx
  var import_react34 = __toESM(require_react(), 1);
  function ProgressLine({ value = 0, label }) {
    const pct = Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
    return /* @__PURE__ */ import_react34.default.createElement("div", { className: "kai-progress" }, label ? /* @__PURE__ */ import_react34.default.createElement("span", { className: "kai-progress-text" }, label) : null, /* @__PURE__ */ import_react34.default.createElement("div", { className: "kai-progress-track", role: "progressbar", "aria-label": label || "\u8FDB\u5EA6", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": pct }, /* @__PURE__ */ import_react34.default.createElement("div", { className: "kai-progress-fill", style: { width: pct + "%" } })));
  }

  // components/tasks/TaskItem.jsx
  var import_react35 = __toESM(require_react(), 1);
  function TaskItem({ text, done = false, readOnly = false, onToggle, onDelete }) {
    return /* @__PURE__ */ import_react35.default.createElement("div", { className: `kai-task${done ? " kai-task--done" : ""}` }, /* @__PURE__ */ import_react35.default.createElement(Checkbox, { label: text, checked: done, disabled: readOnly || !onToggle, onChange: onToggle }), !readOnly && onDelete ? /* @__PURE__ */ import_react35.default.createElement("button", { type: "button", className: "kai-task-delete", "aria-label": `\u5220\u9664\uFF1A${text}`, onClick: onDelete }, "\xD7 \u5220\u9664") : null);
  }
  return __toCommonJS(index_exports);
})();
window.KaiDesignSystemV4_3b9cf5 = KaiDesignSystemV4_3b9cf5; window.KaiDesignSystemV4_3b9cf5.__errors = [];
