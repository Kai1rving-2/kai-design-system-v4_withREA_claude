import React from 'react';

export const TextLink = React.forwardRef(function TextLink({ href, external = false, className = '', children, ...rest }, ref) {
  return <a {...rest} ref={ref} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={`kai-textlink ${className}`.trim()}>
    {children}
    <span className="kai-textlink-mark" aria-hidden="true">{external ? '↗' : '→'}</span>
    {external ? <span className="kai-sr-only">（在新标签页打开）</span> : null}
  </a>;
});
