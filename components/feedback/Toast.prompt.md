通知条：role="status" + aria-live="polite"，支持动作与关闭。
```jsx
<Toast temp="danger" title="没有删掉" body="网络断了一下，内容还在。"
  actionLabel="再试一次" onAction={retry} onDismiss={close} />
```
错误文案三段式 Truth → Recovery → Tone：先事实，再出路，最后语气。
danger 砖红只留给事实性失败；「需要留意」仍用 warm。
