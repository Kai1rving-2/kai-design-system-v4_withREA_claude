import type * as React from 'react';
export interface InlineFeedbackProps extends React.HTMLAttributes<HTMLDivElement> { tone?: 'info' | 'success' | 'warning' | 'error'; }

export function InlineFeedback(props: InlineFeedbackProps): React.ReactNode;
