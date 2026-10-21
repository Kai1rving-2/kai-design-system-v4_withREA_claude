import React from 'react';

export function SparkLine({ data, width = 96, height = 28 }) {
  if (!data.length) return null;
  const min = Math.min(...data), max = Math.max(...data);
  const span = max - min || 1;
  const px = (i) => (data.length === 1 ? 0.5 : i / (data.length - 1)) * (width - 6) + 3;
  const py = (v) => height - 4 - ((v - min) / span) * (height - 8);
  const pts = data.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  const lastX = px(data.length - 1), lastY = py(data[data.length - 1]);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} style={{ display: 'block' }} aria-hidden="true">
      <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <circle cx={lastX} cy={lastY} r="2.5" fill="var(--accent)" />
    </svg>
  );
}
