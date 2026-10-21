import type * as React from 'react';

export type IconName = 'add' | 'arrowRight' | 'arrowUpRight' | 'arrowDown' | 'chevronDown' | 'chevronUp' | 'check' | 'close' | 'search' | 'refresh' | 'info' | 'alert' | 'clock' | 'more' | 'spark';
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}
export function Icon(props: IconProps): React.ReactNode;
