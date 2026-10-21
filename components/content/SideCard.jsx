import React from 'react';

export function SideCard({ tone = 'default', title, sub }) {
  return (
    <div className={`kai-side-card${tone === 'dark' ? ' kai-side-card--dark' : ''}`}>
      <div className="kai-side-title">{title}</div>
      {sub ? <div className="kai-side-sub">{sub}</div> : null}
    </div>
  );
}
