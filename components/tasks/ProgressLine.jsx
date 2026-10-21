import React from 'react';

export function ProgressLine({ value = 0, label }) {
  const pct = Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
  return (
    <div className="kai-progress">
      {label ? <span className="kai-progress-text">{label}</span> : null}
      <div className="kai-progress-track" role="progressbar" aria-label={label || '进度'} aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
        <div className="kai-progress-fill" style={{ width: pct + '%' }}></div>
      </div>
    </div>
  );
}
