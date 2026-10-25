import type * as React from 'react';
export interface SegmentedControlProps {
  label: string;
  options: ReadonlyArray<{ value: string; label: React.ReactNode; disabled?: boolean }>;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}
export function SegmentedControl(props: SegmentedControlProps): React.ReactNode;
