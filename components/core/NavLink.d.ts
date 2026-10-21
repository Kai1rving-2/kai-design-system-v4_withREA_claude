import type * as React from 'react';
export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  active?: boolean;
  children: React.ReactNode;
}

export const NavLink: React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLAnchorElement>>;
