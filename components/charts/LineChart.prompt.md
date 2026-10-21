主趋势图：2px accent 数据线 + 水平 1px 中性网格 + mono 直接标注，无图例无阴影。
```jsx
<LineChart data={weekly} labels={['5月', '8月']}
  annotation={{ index: 7, label: '政策声明日' }} />
```
单系列专用；要对比第二系列用 BarChart 或两张图并排，不加双线。
