标准输入框，完整 Field 契约：label / help / error / required / aria-describedby 全关联。
```jsx
<Input label="目标价" help="选填，留空则用市场价" />
<Input label="邮箱" required error="这个邮箱好像少了 @"
  value={v} onChange={...} />
```
错误文案三段式：先说发生了什么，再说怎么办，最后才是语气。
