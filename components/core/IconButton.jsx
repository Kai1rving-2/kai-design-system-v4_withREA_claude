import React from 'react';
import { Button } from './Button.jsx';

export const IconButton = React.forwardRef(function IconButton({ className = '', icon, tooltipAlign = 'center', children, ...rest }, ref) {
  return <Button variant="secondary" {...rest} ref={ref} data-tooltip-align={tooltipAlign} className={`kai-icon-button ${className}`.trim()}>{icon ?? children}</Button>;
});
