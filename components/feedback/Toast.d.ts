import type * as React from 'react';
export interface ToastProps {
  tone?: 'info' | 'success' | 'warning' | 'error';
  temp?: 'info' | 'warm' | 'gentle' | 'danger' | 'success' | 'warning' | 'error';
  title: string;
  body?: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
}

export function Toast(props: ToastProps): React.ReactNode;
