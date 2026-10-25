# KAI 的消费模式与原生 HTML 合同

React 产品从模块入口导入组件及类型。静态 React 原型使用本地 React、浏览器 bundle 和样式。原生 HTML 页面使用 styles.css、公有类名与本地脚本即可；不必加载 React 或 CDN。使用已有项目的合适路径，不能把“静态”自动解释成“必须 React”。

## 公共接口

| 职责 | 原生 HTML | 页面承担的行为 |
| --- | --- | --- |
| 行动 | `button.kai-btn.kai-btn--primary/secondary/text` | type、disabled、aria-busy、请求执行、异常恢复 |
| 筛选 | `button.kai-filter-chip[aria-pressed]`，计数 `.kai-filter-chip-count` | 将点击映射到实际筛选，并更新所有关联选中态 |
| 互斥操作 | `.kai-segmented[role=group][aria-label] > button.kai-segmented-option[aria-pressed]` | 同一组保留一个选项；保持原生 Tab/Enter/Space 操作 |
| 状态文字 | `.kai-status-badge[data-tone=neutral/info/success/warning/error]` | 提供事实，不以颜色替代文字；静态 badge 不自动成为 live region |
| 字段 | `.kai-field`、label `.kai-field-label`、input `.kai-input`、帮助 `.kai-field-help` | 稳定 id/for、aria-describedby、required、必要时 aria-invalid |
| 异步反馈 | `.kai-async-action[aria-busy]`、`.kai-async-feedback[data-state]` | 防重、try/catch/finally、持续错误、可重试；不能仅用 pointer-events 禁用 |
| 新鲜度 | `.kai-data-freshness[data-state=live/stale/error]` | 数据来源、真实更新时间、缓存/失败事实，与可见文字同步 |

这些互斥操作是按钮组，不是 Tab 界面。只有实现了关联面板、键盘方向移动和焦点合同的组件才使用 tablist/tab/tabpanel。

## 异步操作与数据事实

pending 时同时设置 native disabled 与 aria-busy；捕获错误并在操作附近持续展示，finally 恢复按钮。保留旧结果时明确写出“更新失败，保留上次结果”。只有确认完成的操作才显示 success；只改变按钮文字不能代替失败恢复。

账号筛选、请求取消、latest-request 检查、权限、存储 schema 与后端事务属于产品。视觉组件可以展示这些状态，不会决定哪个请求代表当前账号。选择变化后收到旧响应时，产品必须丢弃它；不能把旧数据当成新范围的结果。

若多个节点同时更新，集中安排一个 status/live region，而不是每个 badge 都独立播报。必要错误应持续可读；仅有短暂 Toast 不足以说明操作失败。

## 主题与来源追踪

局部主题用 action / focus 角色覆盖所有交互状态，配合脚本生成 RGB 通道。主题校验的门槛见 readme；组件消费时继续使用真实状态做验收。

受管副本由 vendor / 原型导出脚本更新。应用覆盖放在独立 CSS 和脚本中，不直接编辑系统副本。记录源 package、version、hash 与 consumption mode，保留原生 HTML 的选择。

## 本地验证

直接打开 [HTML 起点](../examples/html-controls/index.html)。检查筛选选中态、原生键盘操作、表单必填、pending 禁用、模拟失败后的持续提示、取消失败选项后重试，以及 live/stale/error 的文字与圆点同步。这个示例只有本地合成数据，不证明真实后端已经可用。

维护者运行 `npm run build`、`npm run check`、`npm test`、`npm run theme:check`。这些检查不能代替产品的窄屏、键盘和真实错误路径验收。
