数据卡片：caption 标签 + 28px 等宽 sans 数字 + 右侧状态。多张时用 .kai-stat-stack 包裹（1px 缝隙当线）。
```jsx
<div className="kai-stat-stack">
  <StatCard label="本周专注" value="14" sub="小时" delta="+2.3h ↗" />
</div>
```
数字安静但醒目（tabular-nums）；不放假数据。
