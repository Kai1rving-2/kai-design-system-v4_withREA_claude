import type * as React from 'react';
export interface LineChartProps {
  data: Array<number | { value: number }>;
  labels?: string[];
  height?: number;
  area?: boolean;
  annotation?: { index: number; label: string };
}

export function LineChart(props: LineChartProps): React.ReactNode;
