文章卡：tag + 日期 + 标题 + lead 首句 + 摘要；只有提供真实 readHref 才显示阅读链接。信息流的主角色。
```jsx
<ReadingCard tag="量化研究" date="2026.05.17" title="标题"
  lead={<>首句在此断行，<br />让读者停住。</>} readTime="约 12 分钟">
  摘要正文……
</ReadingCard>
```
标题与 lead 是衬线（编辑性内容）；摘要正文是 sans。提供 readHref 时，readLabel 用具体动词；不要用 `#` 充当目标。
