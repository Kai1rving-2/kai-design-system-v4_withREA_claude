主行动使用 graphite；次行动白底，轻操作用 text。默认 type="button"，提交表单显式 type="submit"。异步操作用 pending，系统负责 disabled 与 aria-busy。
```jsx
<Button type="submit" pending={saving}>保存</Button>
<Button variant="secondary" onClick={cancel}>取消</Button>
```

本变体的按钮默认圆角为 `--radius-control: 10px`。有明确动作含义时，可在文字旁放一个 `Icon` 作为 `leadingIcon` / `trailingIcon`；图标只是识别辅助，按钮仍保留文字。仅图标操作用 `IconButton` 并写具体的 `aria-label`，系统会在 hover / focus-visible 显示同一段提示。
