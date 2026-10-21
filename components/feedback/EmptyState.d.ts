import type * as React from 'react';
export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  body?: React.ReactNode;
  actionLabel?: string;
  actionHref?: string;
  onAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function EmptyState(props: EmptyStateProps): React.ReactNode;
