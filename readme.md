# kai-design-system-v4_withREA_claude

KAI Design System v4.3 · REA × Claude 交互版。一个可供浏览、复用的 React 设计系统与静态交互展示。

## 快速开始

- [在线体验设计系统](https://kai1rving-2.github.io/kai-design-system-v4_withREA_claude/)：GitHub Pages 根地址自动进入预览。本机也可以直接用浏览器打开 `index.html` 或 `preview.html`。各个 `ui_kits/` 页面是静态示例；没有后端服务。
- React 18/19 项目可运行 `npm install github:Kai1rving-2/kai-design-system-v4_withREA_claude`，然后参考下方「生产接入」的导入示例。此包未发布到 npm。
- 本地开发与验证：安装 Node.js 后运行 `npm install`、`npm run build`、`npm run check`、`npm test`。构建生成预览与组件入口。

> 许可：本项目代码采用 MIT（见 `LICENSE`），所附字体仍采用 OFL 1.1（见 `fonts/LICENSE.txt` 与 `fonts/OFL.txt`），第三方说明见 `THIRD_PARTY_NOTICES.md`。注明来源不能代替遵守各自的许可证。

这是从 `kai-design-system-v4` 独立复制的 `kai-design-system-v4_withREA_claude`。视觉骨架、排版与 KAI 文案语气沿用 v4；借鉴的是 [open-claude-ui](https://github.com/Caho1/open-claude-ui) 的交互结构，不移植它的颜色、阴影或聊天产品假设。这里的「REA」指对参考实现进行拆解、验证和再设计，不代表逐字复制源码。

### 圆角与符号 · 本版的视觉修订

- 圆角按尺度分工：输入框、标签等小框使用 `--radius-sm: 8px`；普通按钮使用 `--radius-control: 10px`；Surface、卡片和状态框使用 `--radius-md: 12px`。图标按钮为圆形、至少 `44px` 点击区域。保留 `1px` 边框与零装饰阴影。
- 下划线输入、表格分隔线、引言竖线等是内容结构，不套圆角。整块内容的圆角只描绘真实边界，不给每一层嵌套都画框。
- 新增 `Icon`：统一 `24×24` 画布、默认 `18px`、`1.75px` 圆头线条，使用 `currentColor` 跟随语义。`Button` 提供 `leadingIcon` / `trailingIcon`，`IconButton` 必须有具体的 `aria-label`。
- 符号帮助扫读，但不代替重要文字。添加、检索、重试、完成、失败等有明确含义时使用；`spark` 只留给少数 Signature 时刻。预览中的 **Core · Button 与 Link** 和 **符号语言** 可直接对照。

### 框的层级与图标提示

`Surface` 提供三种外观：`outline` 是默认的外层边界，`soft` 用浅底色表达内层分组，`plain` 不画框也不额外加 padding。避免连续嵌套带边框的容器；结果列表通常用文字层级与分隔线。`IconButton` 在鼠标悬停和键盘 `focus-visible` 时显示与 `aria-label` 一致的文字提示；靠近屏幕边缘可设 `tooltipAlign="start"` 或 `"end"`。触屏的重要操作仍应使用带可见文字的按钮。

```jsx
<Surface variant="outline">
  <Surface variant="soft">补充说明</Surface>
  <Surface variant="plain">用分隔线组织结果</Surface>
</Surface>
<IconButton aria-label="刷新结果" tooltipAlign="end" icon={<Icon name="refresh" />} />
```

预览中 [**Core · Surface 层级**](./components/core/surface-hierarchy.card.html) 展示三种外观；[**研究流程 · 状态与层级**](./ui_kits/research-flow/index.html) 把检索、处理中、结果、失败恢复放进同一页。示例只使用本地资料，不连接检索服务。

### 工作台首页 · 从组件到页面

[`工作台首页`](./ui_kits/studio-home/index.html) 的导航现在指向索引、项目、笔记和关于四个真实页内区块；主行动进入可用的本地检索区，检索支持关键词、分类、结果跳转和无结果后的清除筛选。`NavLink` 的选中态跟随页内地址并使用 `aria-current="location"`，浏览器前进/后退也会更新；窄屏导航换行、表单纵排，键盘操作保留原生链接与提交语义。这个页面仍是示例，不连接外部资料。

### 本版新增的三个可选做法

| 场景 | KAI 实现 | 使用原则 |
|---|---|---|
| 中文输入确认 | `FocusInput` 在 IME 组合输入时忽略 Enter，并保留调用方的 `onKeyDown` / composition handlers | 避免选字误提交；只有真正的 Enter 才调用 `onConfirm` |
| 可检查的过程 | `ProcessDisclosure` 展示 idle / running / success / error，详情可由用户收起，失败时可提供重试 | 产品负责真实执行、错误事实和重试安全性；组件不内置模拟流程 |
| 连续新增的内容 | `StreamViewport` 在读者位于底部附近时跟随新增内容；读者上滚后保持位置并显示返回最新内容的按钮 | 由产品传入 `updateKey`；适用于日志、活动流、生成内容，不强制用于所有页面 |

交互预览见 [`preview.html`](./preview.html) 中的 **REA × Claude · 交互借鉴**；源卡片为 [`components/patterns/rea-interactions.card.html`](./components/patterns/rea-interactions.card.html)。新模式都是 Pattern，不是 Core。它们尊重 v4 的 Quiet Base、1px 边框、graphite 行动、blue 焦点和 green 完成。

参考实现分别是 `open-claude-ui/code-examples/RichComposerWithMentions.tsx`、`useClaudeScrollPinning.ts`、`ScrollFadeContainer.tsx` 和 `McpToolDecisionCard.tsx`。本版只提取组合输入保护、滚动控制及过程状态的思路，代码和产品语义按 KAI 重写。

---

# KAI Design System v4.3 · 澄明 · 笃定 · 斜光

一套个人设计系统。主张仍然只有一句话：**设计是一种照顾。**

v4 回答的问题变了。v3 在回答「我喜欢什么」——于是把喜欢的海色、暖底、衬线、mono、诗句、斜光、极轻大字同时常开；单独看每一个都成立，组合起来却在说「看，我在设计」。v4 回答的是：

> **底层非常安静，细节非常讲究，个性只在少数地方出现。**

高级感恰恰来自：第一眼没意识到它设计了很多东西。

**来源：** v3（`../kai-design-system-v3/`，含 v2 文档、v11 展示页、Planner）是这套系统的母体；v4 是对它的一次 **subtractive redesign**——先把所有特色拿掉，确认剩下的部分好用，再一件一件加回来，只有答案是非常明确的「需要」才加。方法论参考了 Apple HIG（品牌让位于内容、系统字体用于正文与小字号 UI、颜色承担语义）与 OpenAI 设计原则（功能性、清晰、亲和）。

---

## 两层结构（v4 的宪法）

> **Neutral is the structure. Blue is the character. Green is the breath.**
> **中性是骨架，蓝色是性格，绿色是呼吸。**

### Quiet Base · 90% 的界面

尽可能没有性格。背景、文字、按钮、输入框、列表、导航、表格、表单——极其稳定、清楚、自然。Sans（系统字体）、中性色、1px 边框、4px 间距。这一层唯一的任务是**消失**。

### Signature · 10% 的时刻

这里才允许：Serif、斜体、steel blue、深色引言卡、诗句、斜光、64px 的字。判断一个元素的不再是「它应该怎么更 KAI」，而是——

> **这里真的需要 KAI 出声吗？**

只要答案不是非常明确的「需要」，就不加。主色出现的次数越少，每次出现越有分量。

### 颜色的三角色（每次用色前问三句）

```text
这个页面首先应该干净、利落吗？   → 用 neutral（骨架）
这里需要表达 KAI 本身的身份吗？  → 用 blue（性格）
这里需要让界面松下来、自然一点吗？→ 才用 green（呼吸）
```

**KAI 没有 Primary Color。** v4.2 起 blue 不再承担 primary action——主行动按钮是 graphite 近黑（行动是骨架动作，用骨架的颜色）。blue 只负责：identity（wordmark、图表数据线、品牌时刻）、selected、focus、少量 link。绿色负责 fresh / success / completion。不这样压住，blue 就会重演 teal 的膨胀史。

气质溯源：**黑武士**负责结构（干练、克制、硬朗、低噪音），**独行侠蓝**负责性格（冷静、可靠、灰里带蓝，不是体育品牌的鲜蓝），**绿色清新**负责呼吸（少量、偏灰偏自然）。三个词比「主色/辅色」更有用。

---

## 三把量尺（v4 释义）

这三个词仍然不出现在界面上，但它们的意思被重新校准：

### 澄明 — 没有多余的视觉声音

不只是信息层级干净，是整个页面不再时刻宣告「我是暖色设计、我是 teal 设计」。检查：把页面截图变灰，它是否依然好用？

### 笃定 — 所有东西都像它本来就应该在那里

不是「必须 1px、必须 0 圆角」的教条，而是每个决定都站得住：4px 间距骨架、两级边框、零阴影。结构自己站得住，所以装饰有资格缺席。

### 斜光 — 冷静的系统里，偶尔有人性的温度

不再是页面上永远存在的一束渐变光。它可以是一句文案、一点 blue、一个 serif 标题、一段留白——甚至什么都没有。CSS 效果变成了设计原则。

---

## CONTENT FUNDAMENTALS · 语气（v4 不变，它是这套系统的灵魂）

**不警告，不邀功，不归咎用户。**

- 空状态是陪伴：「这里还什么都没有 / 还没关系，每件事都有它开始的时候。」
- 完成不说「成功！」，说「已经保存了，不用担心。」
- 错误先陈述事实和恢复动作；加载用 Sans 一行「正在读取……」，技术标识/数值才用 mono。
- **事实性失败例外（v4.2）——Truth → Recovery → Tone**：删除失败、网络失败、数据可能丢失时，先说发生了什么（「没有删掉」），再说用户怎么办（「内容还在，可以再试一次」），最后才是 KAI 的语气。温和不能代替事实；`--danger` 砖红为这类时刻保留。
- 标签用具体动词：「检索」「继续阅读」「开始第一个项目」。
- v4 语气纪律：**Sans 正体承载告知，斜体只留给 serif 签名**——toast、表单提示不再用斜体抒情。
- 不用 emoji。`○`、`→`、`↗` 保留为文字中的标点式符号；操作可用 `Icon` 的语义线性图标，并配具体动词。

## VISUAL FOUNDATIONS

- **颜色（Foundation · 骨架）**：`--page #f7f7f5`、`--surface #ffffff`（**纯白被平反**：卡片与输入用白）、`--sunken #f0f1f2`、边框两级 `#e6e8ea / #d3d7db`、文字四级冷中性 `#1f2124 / #5f646b / #6b7077 / #b6b9be`（仅装饰）。文字没有色相，只有深浅。
- **颜色（Blue · 性格）**：唯一身份色 `--accent #315a75`（steel blue），一个 token 三用——白字底 7.4:1、彩字（白底 7.4:1）、选中与焦点。只负责 identity / selected / link（少量）/ focus / 品牌时刻。`--accent-deep #294b61`、`--accent-wash #e7edf1`。
- **颜色（Graphite · 行动）**：`--graphite #24272b`（白字 15:1）承担 primary button——**KAI 没有 Primary Color**。
- **颜色（Danger · 事实）**：`--danger #a0524a` 砖红，只留给事实性失败（删除失败、网络失败、数据可能丢失）。它可以几年不出现，但系统必须有这个能力。温度色 `--warm-600 #80651e` 仅 warm toast。
- **颜色（Green · 呼吸）**：`--fresh #4f806b` / `--fresh-deep #3f6753` / `--fresh-wash #e3ece7`。绿色不再是品牌主色，是 freshness accent：**完成态归绿**（任务勾选、进度线）、恢复、成功、自然场景。它不表达身份，只让界面松下来——所以它珍贵。
- **字体**：`--font-ui` 系统栈（-apple-system / SF Pro + PingFang SC）是默认语言，中文优先——先把中文 UI 做舒服，英文跟随。`--font-serif`（Source Serif 4，本地 woff2）是签名：hero、引言、编辑性内容。`--font-mono`（DM Mono）是纯数据：时间、数值、代码、ID、技术状态。**按钮是 Sans**——按钮不是机器知道的事，是人在做的事。
- **Type Roles**（先定角色再定字号）：Display 44（serif 300，品牌页可到 64/250）· Title 28 · Heading 20 · Body 15 · Body Sm 14 · Label 13（500）· Caption 12 · Data 13（mono）。10px/11px UI 字被砍掉——那是设计稿的味道。UI 世界只有 400/500 两个字重；轻字重是 serif 签名的特权（display 300、editorial 250）。
- **斜光 → 品牌时刻**：`.kai-moment` opt-in。编辑性页面（工作台首页）点灯，工具页（Planner）不点。判断：这一页是不是在替你说话？
- **边框与阴影**：容器默认 1px 两级灰，禁装饰性投影。层级靠边框深浅与底色；定位/状态 halo 可作为产品的明确例外。
- **圆角**：小框 8px、按钮 10px、主要容器 12px，图标按钮为 44px 圆形。只有完整边界的元素才套圆角；线性分隔与签名引言维持直线。
- **符号**：图标默认 18px、1.75px 圆头线条，继承文字颜色。行动图标与文字同行；单独图标操作需明确的无障碍名称。
- **动效**：通用入场仅透明度/500ms，不占用 transform，结束后不保留动画属性；最多交错 0.24s；hover 只变颜色；**v3 的「CTA 上移 1px」特权废除**——安静的界面不表演。
- **排版节奏**：断行、诗句分割线、竖线引用块保留，但全部归入 Signature 层——出现在编辑性内容里，不是每个页面的义务。

## INTERACTION · 状态合同（v4.2）

按组件的原生语义回答适用状态，不允许只有「快乐路径」。静态 Tag 不承担 selected；可选择行为由 Checkbox 等原生控件提供：

| 状态 | 所有交互组件 | 备注 |
|---|---|---|
| default | ✓ | |
| hover | ✓ | 只变底色/边框色/文字色；链接不用下划线 |
| pressed (`:active`) | ✓ | primary 加深一档、secondary 落 border-1 |
| focus-visible | ✓ | 原生焦点可见；表单 2px accent 外描边 |
| disabled | ✓ | opacity 0.4 |
| pending | 异步动作 | `<Button pending>`：native disabled + aria-busy，保留 Sans；仅加 CSS 类不构成行为保障 |
| selected | 可选择的组件 | NavLink active、Checkbox checked、任务勾选 |
| error / success | 表单 | Field 契约：label / help / error / required / aria-describedby 全关联 |

Links：`TextLink`（行内，blue + 中字重；hover 浅底；内链 → / 外链 ↗）、`NavLink`（常态中性、选中态圆角浅底）、`BackLink`（← 自带）。不用下划线表达跳转；键盘焦点保留清晰外描边。
页内区块导航传 `aria-current="location"`；普通页面导航沿用默认的 `"page"`。

## CORE 与 PATTERNS（v4.2）

- **基础组件**：Button/链接、Field/Input/Textarea/Select/Checkbox、IconButton、Surface、InlineFeedback 等，提供不包含业务名词的契约。图表属于可选专用组件，并非每个产品必须继承。
- **模式**：FocusInput、NotesArea、ReadingCard、SideCard、签名引言、TaskItem 都带场景观点；为保持兼容，旧文件路径不变，manifest 的 layer 明确标记。AsyncState / ConfirmAction / ToastHost 管理展示与交互，数据请求、权限、删除后果和幂等仍由产品提供。

## RESPONSIVE · 移动端

| 规则 | 标准 |
|---|---|
| 触控目标 | ≥ 44px（`pointer: coarse` 自动放大按钮/输入/任务行） |
| 输入字号 | 16px，防 iOS 聚焦缩放 |
| hover 补偿 | 「× 删除」等悬停操作在触屏常显 |
| 断点 | ≤760px 塌单栏；≤480px 收紧内边距 |
| 字号塌缩 | 只动 Display/Title 档；Body 以下不动 |

## DATA-VIZ · 图表语言

| 元素 | 标准 |
|---|---|
| 数据线 / 柱 | 2px accent——数据线默认规格，不限制焦点环和状态标记 |
| 网格 | 1px `--border-1`，只有水平线 |
| 系列 | 至多三系列；超过就拆图 |
| 标注 | 数值 mono 直接标注（Data 归 mono），不用图例 |
| 注释 | 事件 = 1px 竖线 + serif 斜体（人的批注） |
| 填充 | 无阴影、无渐变；折线下方允许 accent-wash 平涂 |

组件：`SparkLine / LineChart / BarChart / DataTable`。

## v4 Changelog（subtractive redesign）

1. **两层结构入宪**：Quiet Base 90% / Signature 10%；设计问题从「怎么更 KAI」变成「这里需要 KAI 出声吗」。
2. **颜色减法**：teal 十档 → 单一 accent 三 token（accent/deep/wash）；stone 十二档 → 四级中性文字 + 两级边框；**删除「不用纯白」教条**，Surface 用白。
3. **字体减法**：UI 默认语言改为系统 Sans（中英皆然），DM Sans 退役；Serif 收缩为签名（hero/引言/编辑内容）；Mono 收缩为纯数据——按钮、标签、toast 全部归还 Sans。
4. **Type Roles 取代字号标尺**：8 个角色各司其职；10/11px UI 字砍掉，Label 从 11px mono 大写 → 13px sans 句子大小写。
5. **68/200 降级**：hero 不再是默认，Editorial Display 44（品牌页 64/250）取而代之，普通页面 Title 28/500。
6. **斜光 → 品牌时刻**：`.kai-moment` opt-in，工具页默认不点灯。
7. **动效减法**：入场位移 14→10px，废除 CTA 上移特权；UI 斜体全部撤除，斜体只属于 serif 签名。
8. **CJK 优先**：以 PingFang SC 为先建立 UI 排版，Latin 跟随——修复 v3 中西混排的 x-height 与字面率错位感。

### v4.1 · 三角色颜色结构

9. **颜色从「一个主色」变成「三种分工」**：中性是骨架，蓝色是性格，绿色是呼吸（Neutral is the structure. Blue is the character. Green is the breath.）。teal 退役，accent 改为 steel blue `#315a75`（对比度 7.4:1，比原 teal 更高）；新增 freshness green `#4f806b`，**完成态（勾选、进度）归绿**；中性系转冷（黑武士骨架）。每次用色前问三句：干净利落→neutral，表达身份→blue，松一口气→green。

### v4.2 · Hardening

10. **无主色化**：blue 卸下 primary action；主行动按钮改 graphite `#24272b`（白字 15:1）。**KAI 没有 Primary Color**——不压住，blue 就会重演 teal 的膨胀史。
11. **v3 残留清扫**：demo 里的 `variant="ghost"`、「hover 上移 1px」文案、规范文字里的 teal 提法全部清除；README / 组件 API / demo 三者口径一致。
12. **状态合同**：default / hover / pressed / focus-visible / disabled / pending（+selected / error / success）全组件覆盖；新增 `TextLink` / `NavLink` / `BackLink`。
13. **Field 契约**：Input / Select 补齐 label 关联、help、error、required、aria-describedby、aria-invalid。
14. **Toast 语义化**：role="status" + aria-live，支持动作按钮与关闭；新增 danger 温度。
15. **错误文案原则**：Truth → Recovery → Tone——温和不能代替事实，`--danger #a0524a` 为事实性失败保留。
16. **Core / Patterns 分层**：FocusInput 降级为 Pattern（KAI 产品模式，非通用控件）。
17. **圆角实验**：原 v4 曾对照硬边与柔面。本变体根据使用反馈采用小框 8px、按钮 10px、主要容器 12px；对照卡展示 8/12/16px 的容器效果，仍不加装饰阴影。

## Index

```
styles.css                    全局入口（唯一需要链接的文件）
fonts/                        Source Serif 4 + DM Mono woff2（OFL）
tokens/                       colors / typography / spacing / motion / base
components/components.css     全部组件类（.kai-*）
components/core/              Button · Icon · IconButton · Surface · TextLink · NavLink · BackLink
components/forms/             Field · Input · Textarea · Select · Checkbox · NotesArea（可选模式）
components/content/           Tag · VerseDivider · Blockquote · StatCard · ReadingCard · SideCard
components/feedback/          InlineFeedback · Toast · ToastDark · EmptyState
components/tasks/             TaskItem · ProgressLine
components/charts/            SparkLine · LineChart · BarChart · DataTable
components/patterns/          FocusInput · AsyncState · ConfirmAction · ToastHost
guidelines/                   规范卡（两层结构 / 三角色 / Type Roles / 图表语言 / 实验……）
ui_kits/studio-home/          工作台首页（品牌页示范：kai-moment 点亮）
ui_kits/daily-planner/        今日 Planner（工具页示范：全安静）
ui_kits/daily-planner-mobile/ Planner 移动版（390 触控）
ui_kits/research-flow/        检索流程（Surface 层级、Tooltip、状态恢复）
preview.html                  单文件全系统预览（构建产物）
```

## v4.3 · 消费与行为契约

90/10 是品牌强调原则，不是像素配额。用户内容可以采用阅读排版，不等同于品牌装饰。mono 用于数值、时间、代码、ID；错误原因、说明和操作文案使用 Sans。必要的小字号文本在 page/surface 上的目标对比度至少 4.5:1；text-4 仍只作装饰。

### 生产接入

包入口为 `index.js`，对应 `index.d.ts`；推荐由 Vite 等现代 bundler 消费。样式入口仍为 `styles.css`。`_ds_bundle.js` 是供浏览器演示使用的全局 React bundle，不是生产模块入口。React 18/19 为 peer dependency。

```tsx
import { Button, Input, Textarea, InlineFeedback } from 'kai-design-system-v4_withrea_claude';
import 'kai-design-system-v4_withrea_claude/styles.css';
// Button 默认 type="button"；表单提交必须显式传 type="submit"。
<Button type="submit" pending={saving}>保存</Button>
<Input label="名称" help="帮助" error={error} value={name} onChange={onChange} />
```

原生属性、ref 与自定义 className 受类型检查。Input/Select/Textarea 的 className/style 保持 v4.2 的 **Field 外层**含义，`controlClassName` 指向原生控件。Field 合并描述 ID，只引用真实呈现的内部提示；error 暂时替代 help。

仅导入 CSS 的项目仍需自己实现 disabled、busy、标签关联等行为；不能把 `.is-pending` 当作键盘操作保障。使用组件可自动获得这些契约。静态 Tag 不用于选择；选择用 Checkbox。

### 可追踪复制

不需要 npm 发布也可采用受控复制：

```sh
npm run build
node scripts/vendor.mjs /path/to/product/src/styles/kai
node scripts/vendor.mjs /path/to/product/src/styles/kai --check
```

生成 `.kai-source.json` 记录版本与逐文件哈希。后续同步会拒绝覆盖消费端被手改的 vendored 文件；产品覆盖放在独立 app.css 中。修改 `tokens/colors.json` 后构建，CSS、JS 和类型会同步生成；MapLibre/Canvas 的适配由产品使用 JS token 完成。不要再手工复制 hex。

### 组合规则

- `Surface` 只负责表面、边框和 padding；`outline` 外框、`soft` 内层、`plain` 无框。宿主决定位置、滚动、宽高、modal/non-modal 和焦点。非模态地图面板不加焦点陷阱；模态场景另行验证。
- `.kai-title/.kai-heading/.kai-body/.kai-caption` 提供文本组合；`.kai-stack/.kai-actions` 提供最小布局。产品仍决定密度和页面结构。
- 760px 下 display/editorial 收缩，480px 下 title 和 page padding 收缩；Body 不缩小。coarse pointer 下普通输入/textarea 至少 16px，独立小操作按 44px 命中区处理；行内文本链接不强制变成大按钮。
- `InlineFeedback` 的 info/success/warning/error 描述事实；文案先事实再恢复。Toast 保留旧 temp 别名兼容；中性完成通知可使用 gentle，不强制每次完成都用绿色。
- `ToastHost` 的 error/warning 持续至用户关闭，其他通知默认 5 秒，鼠标悬停、焦点进入、页面隐藏时暂停。需要用户操作的失败不能只放短暂通知。
- `AsyncState` 不拉取数据；`ConfirmAction` 不决定能否删除。产品负责无空间、权限、部分保存、重试和事务语义。

### 维护检查

```sh
npm run build
npm run check
npm test
```

build 从源组件/类型生成入口、manifest、bundle、颜色 token 并刷新预览的公共 CSS 和组件 bundle。类型契约交给 TypeScript；adherence 仅保留可确信的规则，不再误拒绝原生属性。

离线审查可设 `KAI_TOOLCHAIN_ROOT=/path/to/existing/react-project` 借用已有 React/TypeScript/esbuild（或 Vite 内置 esbuild）；通常在系统目录安装 package.json 的开发依赖即可。构建不读取账号或环境凭据。
