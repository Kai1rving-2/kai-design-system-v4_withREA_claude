import React from 'react';

export function StatCard({ label, value, sub, delta }) {
  return (
    <div className="kai-stat-card">
      <div>
        <div className="kai-stat-label">{label}</div>
        <div className="kai-stat-value">
          {value}
          {sub ? <sub>{sub}</sub> : null}
        </div>
      </div>
      {delta ? <div className="kai-stat-delta">{delta}</div> : null}
    </div>
  );
}
