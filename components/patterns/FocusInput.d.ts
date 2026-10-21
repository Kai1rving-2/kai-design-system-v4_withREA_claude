import type * as React from 'react';
import type { InputHTMLAttributes } from 'react';

export interface FocusInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  eyebrow?: string;
  prompt?: string;
  hint?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirm?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function FocusInput(props: FocusInputProps): React.ReactNode;
