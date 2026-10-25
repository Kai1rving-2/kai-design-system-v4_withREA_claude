# KAI × Dallas · 配色探索 01

以当前 KAI Design System v4_withREA_claude 为基础的三版配色预览。不是网站方案，不是官方球队品牌规范。

## 打开

在项目根目录运行 `python3 -m http.server 4311 --directory designs`，打开 http://localhost:4311/mavericks-colors/index.html 。所有运行库、字体与组件均已本地化，无需外部 CDN。

- A 冷银蓝：#2468B4 主蓝、#132A46 海军蓝、#B9C9DA 冷银、#F2F6FB 冰白。
- B 午夜蓝：#0E1B2D 页面、#15253A 表面、#78B2F5 高亮蓝、#234F84 品牌蓝底。
- C 钢蓝银：#3C6B8B 钢蓝、#1D3448 深蓝、#AABAC6 银灰、#EEF0F1 银白。

三版使用相同内容与原模板 Button、Input、Checkbox、BarChart。保留原版字体角色、间距与圆角，仅覆盖局部颜色变量；原模板文件未修改。深色版将行动按钮改成浅银底、深色字，维持对比度。图表均为演示数据。

支持：并排比较、单版放大、自由画布、复制色值、组件交互。收藏是临时演示状态，不跨刷新保存。配色探索尚未生成生产主题包；确认方向后再同步全量 token、状态与文档。

## 跨电脑调用

已提供可独立安装的 `skills/kai-mavericks/`，自带本地字体、React/Babel、设计资源与三套主题，默认 B 午夜蓝。[安装与调用说明](../../docs/cross-machine-mavericks.md)。模板在本地 HTTP 下运行，不依赖原作者目录或外部 CDN；自由画布在普通浏览器中的改动不承诺跨刷新保存。

rea.7 的主题改为 `themes.json` 单源生成 `themes.css`，并采用 FilterChip、SegmentedControl、StatusBadge；必要次级文字、按钮状态和紧凑图表已经校验。此前的静态样例描述不能代替生产业务实现。

## 设计来源

本地源设计系统：../../ （v4_withREA_claude）。通过 baoyu-design 的 import-design-system.mjs 导入至 _ds/v4_withREA_claude/。三版颜色是本次原创候选，不声明为官方球队色值。

## 验证

rea.7 已检查 390px 页面无水平溢出，图表标签实际为 11px，选中项 hover 配色保持可读；三套主题自动校验文字、action、focus 及 wash 配对。源码与独立 Skill 资源另有一致性与隔离目录实例化回归。
