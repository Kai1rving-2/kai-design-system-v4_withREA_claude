import type * as React from 'react';
export interface SparkLineProps {
  data: Array<number | null>;
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}

export function SparkLine(props: SparkLineProps): React.ReactNode;
