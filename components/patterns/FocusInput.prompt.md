【Pattern · 非 Core】一天只问一件事的巨大下划线输入——这是 KAI 的产品模式，
不是所有产品都应继承的基础控件；通用输入用 Input。
```jsx
<FocusInput value={v} onChange={setV} onConfirm={() => save(v)}
  eyebrow="今天最重要的一件事" prompt="只有一件。" />
```
衬线 28px / 300，居中，placeholder 斜体；一屏只出现一次。
eyebrow / prompt / hint 都是 props，别的产品可以换成自己的问题。
