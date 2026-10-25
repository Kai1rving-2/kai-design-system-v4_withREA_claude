import React from 'react';
import { chartHeight, finiteValue, useChartWidth } from './chart-layout.js';

export function BarChart({ data, height = 220, width, density = 'regular', color = 'var(--accent)', label = '柱状图', summary, formatValue = String }) {
  const [container, W] = useChartWidth(width);
  const H = chartHeight(height, 220);
  const points = data.filter(d => d && finiteValue(d.value));
  if (!points.length) return <p className="kai-field-help" role="status">暂无数据</p>;
  const compact = density === 'compact' || W < 440;
  const P = { top: 26, right: 12, bottom: 30, left: 12 };
  const hi = Math.max(...points.map(d => d.value), 0), lo = Math.min(...points.map(d => d.value), 0);
  const span = hi - lo || 1;
  const iw = Math.max(1, W - P.left - P.right), ih = H - P.top - P.bottom;
  const upper = hi === 0 && lo === 0 ? 1 : hi;
  const py = value => P.top + (upper - value) / span * ih;
  const baseline = py(0), step = iw / points.length, bw = Math.min(step * .52, 48);
  const every = Math.max(1, Math.ceil(points.length / Math.max(1, Math.floor(iw / (compact ? 52 : 64)))));
  const mono = { fontFamily: 'var(--font-mono)', fontSize: compact ? 11 : 12 };
  return <figure ref={container} style={{ margin: 0, width: '100%', minWidth: 0 }}>
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: H, display: 'block' }} role="img" aria-label={label}>
      <title>{label}</title>
      <line x1={P.left} x2={W - P.right} y1={baseline} y2={baseline} stroke="var(--border-1)" strokeWidth="1" />
      {points.map((d, i) => {
        const y = py(d.value), bh = Math.abs(y - baseline), x = P.left + i * step + (step - bw) / 2;
        return <g key={i}>
          <title>{`${d.label}: ${formatValue(d.value)}`}</title>
          <rect x={x} y={Math.min(y, baseline)} width={bw} height={bh} fill={color} />
          {i % every === 0 ? <>
            <text x={x + bw / 2} y={d.value >= 0 ? y - 7 : y + 15} fill="var(--text-2)" style={{ ...mono, textAnchor: 'middle' }}>{formatValue(d.value)}</text>
            <text x={x + bw / 2} y={H - 8} fill="var(--text-3)" style={{ ...mono, textAnchor: 'middle' }}>{d.label}</text>
          </> : null}
        </g>;
      })}
    </svg>
    {summary ? <figcaption className="kai-caption">{summary}</figcaption> : null}
  </figure>;
}
