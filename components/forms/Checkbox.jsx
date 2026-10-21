import React from 'react';

export const Checkbox = React.forwardRef(function Checkbox({ label, className = '', ...rest }, ref) {
  return <label className={`kai-checkbox ${className}`.trim()}><input {...rest} ref={ref} type="checkbox" /><span>{label}</span></label>;
});
