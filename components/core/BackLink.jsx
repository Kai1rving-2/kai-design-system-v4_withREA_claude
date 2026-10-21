import React from 'react';

export const BackLink = React.forwardRef(function BackLink({ href, className = '', children = '返回', ...rest }, ref) {
  return <a {...rest} ref={ref} href={href}  className={(`kai-backlink` + '' + ' ' + className).trim()}>{children}</a>;
});
