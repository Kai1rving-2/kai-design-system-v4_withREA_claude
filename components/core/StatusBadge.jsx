import React from 'react';

/** Static status text. Announcements belong to the surrounding async workflow. */
export function StatusBadge({ tone = 'neutral', className = '', children, ...rest }) {
  return <span {...rest} className={`kai-status-badge kai-status-badge--${tone} ${className}`.trim()}>{children}</span>;
}
