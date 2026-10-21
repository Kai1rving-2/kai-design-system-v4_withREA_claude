import type * as React from 'react';
export interface BarChartProps {
  data: Array<{ label: string; value: number }>;
  height?: number;
}

export function BarChart(props: BarChartProps): React.ReactNode;
