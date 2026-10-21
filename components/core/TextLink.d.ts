import type * as React from 'react';
export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const TextLink: React.ForwardRefExoticComponent<TextLinkProps & React.RefAttributes<HTMLAnchorElement>>;
