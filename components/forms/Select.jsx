import React from 'react';
import { Field } from './Field.jsx';

export const Select = React.forwardRef(function Select({ label, help, error, required = false, options = [], children, className = '', controlClassName = '', id, style, ...rest }, ref) {
  return <Field id={id} label={label} help={help} error={error} required={required} className={className} style={style}>
    <select {...rest} ref={ref} className={`kai-select${error ? ' kai-select--error' : ''} ${controlClassName}`.trim()}>
      {children || options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  </Field>;
});
