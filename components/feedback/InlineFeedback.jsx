import React from 'react';

export function InlineFeedback({ tone = 'info', children, className = '', ...rest }) {
  return <div {...rest} className={`kai-feedback kai-feedback--${tone} ${className}`.trim()}
    role={tone === 'error' ? 'alert' : 'status'} aria-atomic="true">{children}</div>;
}
