import type * as React from 'react';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  controlClassName?: string;
  help?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
}

export const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
