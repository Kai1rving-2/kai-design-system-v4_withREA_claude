import React from 'react';
import { Toast } from '../feedback/Toast.jsx';

function Notice({ notice, onDismiss }) {
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const paused = hovered || focused;
  const [hidden, setHidden] = React.useState(false);
  const remaining = React.useRef(5000);
  const persistent = ['danger', 'error', 'warning', 'warm'].includes(notice.tone);
  React.useEffect(() => {
    const update = () => setHidden(document.hidden);
    update(); document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  React.useEffect(() => {
    if (persistent || paused || hidden) return;
    const start = Date.now();
    const timer = setTimeout(() => onDismiss(notice.id), remaining.current);
    return () => { clearTimeout(timer); remaining.current = Math.max(0, remaining.current - (Date.now() - start)); };
  }, [notice.id, onDismiss, persistent, paused, hidden]);
  return <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocus={() => setFocused(true)} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}>
    <Toast temp={notice.tone} title={notice.message} onDismiss={() => onDismiss(notice.id)} />
  </div>;
}

/** Error/warning notices persist; neutral/success notices pause their timer while read. */
export function ToastHost({ notices, onDismiss }) {
  return <div className="kai-toast-host" aria-label="通知">{notices.map(notice => <Notice key={notice.id} notice={notice} onDismiss={onDismiss} />)}</div>;
}
