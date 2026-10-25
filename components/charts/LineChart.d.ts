import type * as React from 'react';
export interface LineChartProps {
  data: Array<number | { value: number } | null>;
  labels?: string[];
  height?: number;
  width?: number;
  density?: 'compact' | 'regular';
  color?: string;
  label?: string;
  summary?: React.ReactNode;
  formatValue?: (value: number) => string;
  area?: boolean;
  annotation?: { index: number; label: string };
}

export function LineChart(props: LineChartProps): React.ReactNode;
