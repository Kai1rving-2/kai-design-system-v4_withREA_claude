import type * as React from 'react';
export interface StreamViewportProps {
  children?: React.ReactNode;
  /** Change when content is appended. The component follows updates only while near the end. */
  updateKey?: string | number;
  height?: number | string;
  label?: string;
  jumpLabel?: string;
  className?: string;
}
export function StreamViewport(props: StreamViewportProps): React.ReactNode;
