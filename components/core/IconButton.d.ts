import type * as React from 'react';
import type { ButtonProps } from './Button.jsx';
export interface IconButtonProps extends ButtonProps {
  'aria-label': string;
  icon?: React.ReactNode;
  tooltipAlign?: 'center' | 'start' | 'end';
}

export const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
