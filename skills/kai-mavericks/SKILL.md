---
name: kai-mavericks
description: 使用 KAI v4_withREA_claude 的独行侠 A/B/C 配色模板创建或修改界面、工作台与原型，保留其字体、留白和交互规范。
---

使用随本 Skill 携带的 `assets/template/`，不依赖原作者电脑或其他 Skill。默认采用 B 午夜蓝；用户指定时使用 A 冷银蓝或 C 钢蓝银。这是个人配色探索，不是球队官方品牌包。

需要可运行起点时，在用户项目目录执行（路径相对于本 Skill）：

```sh
python3 scripts/create-project.py /path/to/new-project --palette B
```

脚本只创建新目录，不覆盖既有项目。随后在新目录运行 `python3 -m http.server 4311`，通过本地 HTTP 查看 `index.html`。所有 React、Babel、字体和样式均在本地；无需 npm 或 CDN。A/B/C、对比和画布仍可切换，收藏是演示状态。

根据用户目标修改生成项目，替换演示内容与功能。`preview.jsx` 是页面，`preview.css` 是产品布局，`themes.css` 是三套生成主题，`_ds/v4_withREA_claude/styles.css` 是 KAI 基础样式，浏览器组件导出在 `window.KaiDesignSystemV4_3b9cf5`。不要把配色样本误作业务实现。

如用户项目已使用原生 HTML，直接复用样式和主题变量，不强制引入 React；若使用生产 React 项目，按项目现有构建方式消费组件。保留已有技术栈。主题根容器采用 `class="theme" data-palette="A|B|C"`；局部覆盖需一起处理 action 的文字、背景、hover、pressed、focus。

保持 Sans 日常界面、Serif 少量签名、Mono 数值/代码；中性色组织层级，蓝色承担身份/选中/焦点，状态颜色表达事实。按钮默认 graphite，深色主题已提供对应浅底深字角色。使用可见键盘焦点、44px 触控区域和清晰的 label。异步动作显式实现 disabled、aria-busy、错误与恢复；请求、权限、持久化和真实数据由产品负责。

只在需要上游维护规则时读取 `references/design-contract.md`。模板版本和文件哈希见 `template-manifest.json`。修改生成项目，不修改安装目录的模板原件。
