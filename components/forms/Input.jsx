import React from 'react';
import { Field } from './Field.jsx';

export const Input = React.forwardRef(function Input({ label, help, error, required = false, className = '', controlClassName = '', id, style, ...rest }, ref) {
  return <Field id={id} label={label} help={help} error={error} required={required} className={className} style={style}>
    <input {...rest} ref={ref} className={`kai-input${error ? ' kai-input--error' : ''} ${controlClassName}`.trim()} />
  </Field>;
});
