import type * as React from 'react';
export interface ProcessDisclosureProps {
  status?: 'idle' | 'running' | 'success' | 'error';
  title: React.ReactNode;
  message?: React.ReactNode;
  children?: React.ReactNode;
  onRetry?: () => void;
  retryLabel?: string;
  defaultOpen?: boolean;
}
export function ProcessDisclosure(props: ProcessDisclosureProps): React.ReactNode;
