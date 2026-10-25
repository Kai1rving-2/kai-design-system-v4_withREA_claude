import React from 'react';
import { chartHeight, finiteValue, useChartWidth } from './chart-layout.js';

export function LineChart({ data, labels, height = 240, width, density = 'regular', area = true, annotation, color = 'var(--accent)', label = '折线图', summary, formatValue = value => String(Math.abs(value) >= 100 ? Math.round(value) : Number(value.toFixed(1))) }) {
  const [container, W] = useChartWidth(width);
  const H = chartHeight(height, 240);
  const values = data.map(d => typeof d === 'number' ? d : d?.value);
  const available = values.filter(finiteValue);
  if (!available.length) return <p className="kai-field-help" role="status">暂无数据</p>;
  const compact = density === 'compact' || W < 440;
  const P = { top: 28, right: compact ? 54 : 76, bottom: 30, left: 16 };
  const min = Math.min(...available), max = Math.max(...available);
  const pad = (max - min) * .08 || Math.abs(max) * .08 || 1;
  const lo = min - pad, hi = max + pad, span = hi - lo;
  const iw = Math.max(1, W - P.left - P.right), ih = H - P.top - P.bottom;
  const px = i => P.left + (values.length === 1 ? iw / 2 : i / (values.length - 1) * iw);
  const py = v => P.top + ih - (v - lo) / span * ih;
  const segments = [];
  values.forEach((value, i) => { if (!finiteValue(value)) return; if (i === 0 || !finiteValue(values[i - 1])) segments.push([]); segments.at(-1).push([px(i), py(value)]); });
  const lineOf = points => points.map((p,i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const lastIndex = values.findLastIndex(finiteValue), last = [px(lastIndex), py(values[lastIndex])];
  const mono = { fontFamily: 'var(--font-mono)', fontSize: compact ? 11 : 12 };
  const validAnnotation = annotation && Number.isInteger(annotation.index) && annotation.index >= 0 && annotation.index < values.length;
  return <figure ref={container} style={{ margin: 0, width: '100%', minWidth: 0 }}>
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: H, display: 'block' }} role="img" aria-label={label}>
      <title>{label}</title>
      {[min, (min + max) / 2, max].map((v,i) => <g key={i}>
        <line x1={P.left} x2={W - P.right} y1={py(v)} y2={py(v)} stroke="var(--border-1)" strokeWidth="1" />
        <text x={W - P.right + 8} y={py(v) + 4} fill="var(--text-3)" style={mono}>{formatValue(v)}</text>
      </g>)}
      {segments.map((points,i) => <g key={i}>
        {area && points.length > 1 ? <path d={`${lineOf(points)} L${points.at(-1)[0]} ${P.top + ih} L${points[0][0]} ${P.top + ih} Z`} fill={color} opacity=".1" /> : null}
        <path d={lineOf(points)} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {points.length === 1 ? <circle cx={points[0][0]} cy={points[0][1]} r="3" fill={color} /> : null}
      </g>)}
      <circle cx={last[0]} cy={last[1]} r="3" fill={color} />
      <text x={Math.min(last[0] + 8, W - P.right + 8)} y={Math.max(15,last[1] - 8)} fill="var(--text-1)" style={mono}>{formatValue(values[lastIndex])}</text>
      {validAnnotation ? <g>
        <line x1={px(annotation.index)} x2={px(annotation.index)} y1={P.top} y2={P.top + ih} stroke="var(--border-2)" />
        <text x={Math.min(px(annotation.index) + 6, W - 120)} y={P.top + 12} fill="var(--text-2)" style={{ fontFamily: 'var(--font-ui)', fontSize: 12 }}>{annotation.label}</text>
      </g> : null}
      {labels?.length ? <g>
        <text x={P.left} y={H - 8} fill="var(--text-3)" style={mono}>{labels[0]}</text>
        <text x={W - P.right} y={H - 8} fill="var(--text-3)" style={{ ...mono, textAnchor: 'end' }}>{labels.at(-1)}</text>
      </g> : null}
    </svg>
    {summary ? <figcaption className="kai-caption">{summary}</figcaption> : null}
  </figure>;
}
