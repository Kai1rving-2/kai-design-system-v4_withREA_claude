import React from 'react';
import { Field } from './Field.jsx';

export const Textarea = React.forwardRef(function Textarea({ label, help, error, required = false, rows = 3, className = '', controlClassName = '', id, style, ...rest }, ref) {
  return <Field id={id} label={label} help={help} error={error} required={required} className={className} style={style}>
    <textarea {...rest} ref={ref} rows={rows} className={`kai-input kai-textarea${error ? ' kai-input--error' : ''} ${controlClassName}`.trim()} />
  </Field>;
});
