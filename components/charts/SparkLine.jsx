import React from 'react';
import { finiteValue } from './chart-layout.js';

export function SparkLine({ data, width = 96, height = 28, color = 'var(--accent)', label }) {
  const available = data.filter(finiteValue);
  if (!available.length) return null;
  const W = Number.isFinite(width) && width >= 8 ? width : 96, H = Number.isFinite(height) && height >= 8 ? height : 28;
  const min = Math.min(...available), max = Math.max(...available), span = max - min || 1;
  const px = i => (data.length === 1 ? .5 : i / (data.length - 1)) * (W - 6) + 3;
  const py = v => H - 4 - (v - min) / span * (H - 8);
  const segments = [];
  data.forEach((value,i) => { if (!finiteValue(value)) return; if (i === 0 || !finiteValue(data[i-1])) segments.push([]); segments.at(-1).push(`${px(i).toFixed(1)},${py(value).toFixed(1)}`); });
  const last = data.findLastIndex(finiteValue);
  return <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ display: 'block' }} aria-hidden={label ? undefined : true} role={label ? 'img' : undefined} aria-label={label}>
    {label ? <title>{label}</title> : null}
    {segments.map((points,i) => <polyline key={i} points={points.join(' ')} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />)}
    <circle cx={px(last)} cy={py(data[last])} r="2.5" fill={color} />
  </svg>;
}
