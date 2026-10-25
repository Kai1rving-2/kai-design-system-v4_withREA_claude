import React from 'react';

/** Match SVG coordinates to CSS pixels so chart labels keep their readable size. */
export function useChartWidth(width) {
  const [container, setContainer] = React.useState(null);
  const [measured, setMeasured] = React.useState(width || 600);
  React.useEffect(() => {
    if (width || !container) return;
    const node = container;
    const measure = () => { const next = node.getBoundingClientRect().width; if (next > 0) setMeasured(Math.max(1, Math.round(next))); };
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [width, container]);
  return [setContainer, Math.max(1, width || measured)];
}
export const chartHeight = (height, fallback) => Number.isFinite(height) && height > 80 ? height : fallback;
export const finiteValue = value => typeof value === 'number' && Number.isFinite(value);
