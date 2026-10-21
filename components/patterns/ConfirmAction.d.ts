import type * as React from 'react';
export interface ConfirmActionProps {
  triggerLabel: string;
  confirmLabel: string;
  description: React.ReactNode;
  onConfirm: () => void | Promise<void>;
  errorMessage?: string | ((reason: unknown) => string);
  pendingLabel?: string;
  cancelLabel?: string;
  disabled?: boolean;
}
export function ConfirmAction(props: ConfirmActionProps): React.ReactNode;
