import React from 'react';

export function LineChart({ data, labels, height = 240, area = true, annotation }) {
  if (!data.length) return <p className="kai-field-help" role="status">暂无数据</p>;
  const W = 600;
  const H = height;
  const P = { top: 28, right: 76, bottom: 30, left: 20 };
  const values = data.map((d) => (typeof d === 'number' ? d : d.value));
  const min = Math.min(...values), max = Math.max(...values);
  const pad = (max - min) * 0.08 || Math.abs(max) * 0.08 || 1;
  const lo = min - pad, hi = max + pad, span = hi - lo;
  const iw = W - P.left - P.right, ih = H - P.top - P.bottom;
  const px = (i) => P.left + (values.length === 1 ? iw / 2 : (i / (values.length - 1)) * iw);
  const py = (v) => P.top + ih - ((v - lo) / span) * ih;
  const pts = values.map((v, i) => [px(i), py(v)]);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const base = (P.top + ih).toFixed(1);
  const areaPath = area
    ? `${line} L${pts[pts.length - 1][0].toFixed(1)} ${base} L${pts[0][0].toFixed(1)} ${base} Z`
    : null;
  const last = pts[pts.length - 1];
  const gridVals = [lo + pad, (min + max) / 2, hi - pad];
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em' };
  const n = values.length;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }} role="img">
      {gridVals.map((v, i) => (
        <g key={i}>
          <line x1={P.left} x2={W - P.right} y1={py(v)} y2={py(v)}
            stroke="var(--border-1)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <text x={W - P.right + 8} y={py(v) + 3} fill="var(--text-3)" style={mono}>
            {Math.abs(v) >= 100 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, '')}
          </text>
        </g>
      ))}
      {areaPath && <path d={areaPath} fill="var(--accent-wash)" opacity="0.55" />}
      <path d={line} fill="none" stroke="var(--accent)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <circle cx={last[0]} cy={last[1]} r="3" fill="var(--accent)" />
      <text x={last[0] + 8} y={last[1] + 3} fill="var(--text-1)" style={{ ...mono, fontSize: 11 }}>
        {values[n - 1]}
      </text>
      {annotation && (
        <g>
          <line x1={px(annotation.index)} x2={px(annotation.index)} y1={P.top} y2={P.top + ih}
            stroke="var(--border-2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <text x={px(annotation.index) + 6} y={P.top + 12} fill="var(--text-2)"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 12, fontStyle: 'italic' }}>
            {annotation.label}
          </text>
        </g>
      )}
      {labels && (
        <g>
          <text x={P.left} y={H - 8} fill="var(--text-3)" style={mono}>{labels[0]}</text>
          <text x={W - P.right} y={H - 8} fill="var(--text-3)" style={{ ...mono, textAnchor: 'end' }}>
            {labels[labels.length - 1]}
          </text>
        </g>
      )}
    </svg>
  );
}
