---
name: kai-design-system-v4_withREA_claude
description: KAI v4 with selected Claude UI interaction patterns: composition-safe confirmation, inspectable process states and reader-controlled live scrolling. Retains KAI v4 quiet base and signature visual language.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. Choose the existing project's consumption mode explicitly: React product, static React prototype, or native HTML. Native HTML is a supported first-class mode and does not require React, the browser bundle, or a CDN. Use local styles, semantic elements and the HTML recipes in examples/html-controls/. If working on production code, use the module entry or controlled vendoring appropriate to that mode.
If the user invokes this skill without other guidance, ask what they want to build and use the source components or HTML preview as appropriate.

This is the independent `kai-design-system-v4_withREA_claude` variant. Apply Claude-derived interaction ideas selectively. Keep KAI tokens, visual hierarchy and voice. See the variant section at the top of readme.md before using ProcessDisclosure or StreamViewport.

For the Dallas Mavericks template, use the self-contained `skills/kai-mavericks/SKILL.md` package. It carries local runtime, fonts and three themes; default to B 午夜蓝 unless the user chooses A or C. Cross-machine setup is documented in docs/cross-machine-mavericks.md.

Version 4.3.0-rea.7 adds FilterChip, SegmentedControl and StatusBadge. Use real buttons with aria-pressed for filters and mutually exclusive action groups; do not add tab roles without complete tab behavior. Theme action foreground/background, hover, pressed and focus together; author Dallas colors in themes.json and generate/validate with scripts/themes.mjs. Keep product request scope/cancellation, permissions, storage and retry safety outside visual components. In HTML mode, native disabled, aria-busy, field associations and persistent errors are the page's responsibility; consult the local recipe rather than assuming CSS provides behavior. Do not hand-edit generated themes, bundles or vendored assets.

This variant uses a three-step corner scale: small framed elements 8px, buttons 10px, and major framed surfaces 12px. Icon-only buttons are circular. Keep underlined inputs, table rules and editorial lines straight. Use the built-in `Icon` for semantic cues alongside text; an icon-only action must have a specific `aria-label`. Do not add emoji or scatter decorative symbols.

For navigation, do not underline links. Inline links use medium weight, restrained blue and a small direction mark (→ for internal, ↗ for external); hover adds a soft wash. Selected navigation uses a rounded wash. Keep keyboard focus outlines visible.
The studio-home starting point contains working in-page destinations and a local search. Preserve its anchor semantics and use `aria-current="location"` for in-page navigation.

For visual hierarchy, use `Surface` outline as an outer boundary, soft for an inner group, and plain for content with no extra box. Avoid nested outlines. `IconButton` shows its `aria-label` visually on hover and keyboard focus; important touch actions need visible text. The `研究流程 · 状态与层级` starting point demonstrates these rules together.

Non-negotiables (from readme.md): 两层结构——90% 的界面保持安静（系统 Sans、中性色、默认 1px 容器边框、无装饰阴影），Signature（serif / steel blue / 深色引言 / 诗句 / kai-moment 斜光）只在明确需要的场景出现（90/10 非像素配额）；**KAI 没有 Primary Color**——主行动是 graphite，blue 只负责 identity/selected/focus/少量 link，green 负责完成与呼吸，danger 只留给事实性失败（Truth → Recovery → Tone）；mono 只承载数据；交互组件必须覆盖状态合同（default/hover/pressed/focus-visible/disabled/pending）。Link `styles.css`（或 `_ds/` 副本）后再设计；React 生产组件从 index.js 导入并使用完整类型，静态 React 演示使用 bundle；原生 HTML 按消费合同接入。Button pending 必须具备 native disabled / aria-busy；表单提交显式 type="submit"。Field/Input/Textarea/Select 共享字段契约；Surface 不负责定位。FocusInput、NotesArea、ReadingCard、TaskItem 是可选 Pattern，不要求产品继承业务假设。受控复制使用 scripts/vendor.mjs；禁止手改生成的 token 和消费端副本。
