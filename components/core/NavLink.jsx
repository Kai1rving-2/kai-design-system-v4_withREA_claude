import React from 'react';

export const NavLink = React.forwardRef(function NavLink({ href, active = false, className = '', children, ...rest }, ref) {
  const current = active ? (rest['aria-current'] || 'page') : undefined;
  return <a {...rest} ref={ref} href={href} aria-current={current} className={`kai-navlink${active ? ' is-active' : ''} ${className}`.trim()}>{children}</a>;
});
