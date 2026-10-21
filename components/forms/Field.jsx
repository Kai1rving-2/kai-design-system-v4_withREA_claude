import React from 'react';

/** Shared semantics; the child stays native and keeps its ref. */
export function Field({ id, label, help, error, required = false, className = '', style, children }) {
  const generatedId = React.useId();
  const control = React.Children.only(children);
  const controlId = id || control.props.id || `kai-field-${generatedId}`;
  const message = error || help;
  const messageId = message ? `${controlId}-${error ? 'error' : 'help'}` : undefined;
  const describedBy = [control.props['aria-describedby'], messageId].filter(Boolean).join(' ') || undefined;
  return <div className={`kai-field ${className}`.trim()} style={style}>
    {label ? <label className="kai-field-label" htmlFor={controlId}>{label}{required ? <span aria-hidden="true"> *</span> : null}</label> : null}
    {React.cloneElement(control, { id: controlId, required: required || control.props.required,
      'aria-invalid': error ? true : control.props['aria-invalid'], 'aria-describedby': describedBy })}
    {message ? <p id={messageId} className={error ? 'kai-field-error' : 'kai-field-help'}>{message}</p> : null}
  </div>;
}
