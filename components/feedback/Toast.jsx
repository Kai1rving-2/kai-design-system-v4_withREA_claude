import React from 'react';

export function Toast({ temp = 'info', tone, title, body, actionLabel, onAction, onDismiss }) {
  return (
    <div className={`kai-toast kai-toast--${tone || temp}`} role={tone === 'error' || (!tone && ['danger', 'error'].includes(temp)) ? 'alert' : 'status'} aria-atomic="true">
      <div className="kai-toast-dot"></div>
      <div style={{ flex: 1 }}>
        <div className="kai-toast-title">{title}</div>
        {body ? <div className="kai-toast-body">{body}</div> : null}
        {actionLabel ? (
          <button type="button" className="kai-toast-action" onClick={onAction}>{actionLabel}</button>
        ) : null}
      </div>
      {onDismiss ? (
        <button type="button" className="kai-toast-dismiss" aria-label="关闭" onClick={onDismiss}>×</button>
      ) : null}
    </div>
  );
}
