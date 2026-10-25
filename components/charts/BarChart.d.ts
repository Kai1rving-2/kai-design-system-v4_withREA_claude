import type * as React from 'react';
export interface BarChartProps {
  data: Array<{ label: string; value: number }>;
  height?: number;
  width?: number;
  density?: 'compact' | 'regular';
  color?: string;
  label?: string;
  summary?: React.ReactNode;
  formatValue?: (value: number) => string;
}

export function BarChart(props: BarChartProps): React.ReactNode;
