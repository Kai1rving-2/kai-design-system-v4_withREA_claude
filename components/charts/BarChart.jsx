import React from 'react';

export function BarChart({ data, height = 220 }) {
  if (!data.length) return <p className="kai-field-help" role="status">暂无数据</p>;
  const W = 600;
  const H = height;
  const P = { top: 24, right: 16, bottom: 28, left: 16 };
  const values = data.map((d) => d.value);
  const max = Math.max(...values, 0);
  const iw = W - P.left - P.right, ih = H - P.top - P.bottom;
  const step = iw / data.length;
  const bw = Math.min(step * 0.52, 48);
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em' };
  const baseline = P.top + ih;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img">
      <line x1={P.left} x2={W - P.right} y1={baseline} y2={baseline}
        stroke="var(--border-1)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      {data.map((d, i) => {
        const bh = max > 0 ? (d.value / max) * (ih - 18) : 0;
        const x = P.left + i * step + (step - bw) / 2;
        const y = baseline - bh;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw} height={Math.max(bh, 1)} fill="var(--accent)" />
            <text x={x + bw / 2} y={y - 6} fill="var(--text-2)" style={{ ...mono, textAnchor: 'middle' }}>
              {d.value}
            </text>
            <text x={x + bw / 2} y={H - 8} fill="var(--text-3)" style={{ ...mono, textAnchor: 'middle' }}>
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
