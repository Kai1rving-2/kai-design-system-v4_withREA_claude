import type * as React from 'react';
export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'outline' | 'soft' | 'plain';
}

export const Surface: React.ForwardRefExoticComponent<SurfaceProps & React.RefAttributes<HTMLDivElement>>;
