import type * as React from 'react';
export interface Notice { id: string; message: string; tone: 'info' | 'success' | 'warning' | 'error' | 'gentle' | 'warm' | 'danger'; }
export interface ToastHostProps { notices: Notice[]; onDismiss: (id: string) => void; }
export function ToastHost(props: ToastHostProps): React.ReactNode;
