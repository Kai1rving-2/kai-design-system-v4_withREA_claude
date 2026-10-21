import type * as React from 'react';
export interface BackLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: React.ReactNode;
}

export const BackLink: React.ForwardRefExoticComponent<BackLinkProps & React.RefAttributes<HTMLAnchorElement>>;
