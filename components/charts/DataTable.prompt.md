数据表：sans 表头 + sans 正文 + 1px 行分隔，数字列 mono 右对齐（Data 归 mono）。
```jsx
<DataTable columns={['轮次', '特征', 'AUC']} align={{ AUC: 'right' }}
  rows={[['第 4 轮', '48', '0.812']]} />
```
行数多时每页 ≤ 12 行；hover 只变底色。
