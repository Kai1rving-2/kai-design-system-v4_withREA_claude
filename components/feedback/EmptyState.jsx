import React from 'react';

export function EmptyState({ icon = '○', title, body, actionLabel, actionHref, onAction }) {
  return (
    <div className="kai-empty">
      <div className="kai-empty-icon">{icon}</div>
      <div className="kai-empty-title">{title}</div>
      {body ? <div className="kai-empty-body">{body}</div> : null}
      {actionLabel ? (
        <>{actionHref ? <a className="kai-empty-action" href={actionHref}>{actionLabel}</a> : <button type="button" className="kai-empty-action" onClick={onAction}>{actionLabel}</button>}</>
      ) : null}
    </div>
  );
}
