import type * as React from 'react';
import type { SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  controlClassName?: string;
  help?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  options?: string[];
}

export const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
