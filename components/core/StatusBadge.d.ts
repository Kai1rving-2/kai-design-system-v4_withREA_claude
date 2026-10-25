import type * as React from 'react';
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}
export function StatusBadge(props: StatusBadgeProps): React.ReactNode;
