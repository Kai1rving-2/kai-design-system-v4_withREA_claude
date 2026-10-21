import React from 'react';

/** Appearance only: no position, scrolling, width or focus policy. */
export const Surface = React.forwardRef(function Surface({ variant = 'outline', className = '', children, ...rest }, ref) {
  return <div {...rest} ref={ref} className={`kai-surface kai-surface--${variant} ${className}`.trim()}>{children}</div>;
});
