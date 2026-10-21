import type * as React from 'react';
export interface AsyncStateProps { state: 'loading' | 'empty' | 'error' | 'ready'; children?: React.ReactNode; loadingMessage?: React.ReactNode; emptyMessage?: React.ReactNode; errorMessage?: React.ReactNode; onRetry?: () => void; }

export function AsyncState(props: AsyncStateProps): React.ReactNode;
