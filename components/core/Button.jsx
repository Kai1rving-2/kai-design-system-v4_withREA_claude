import React from 'react';

export const Button = React.forwardRef(function Button({ variant = 'primary', pending = false, disabled = false, type = 'button', className = '', leadingIcon, trailingIcon, children, ...rest }, ref) {
  const busy = pending || className.split(/\s+/).includes('is-pending');
  return <button {...rest} ref={ref} type={type} disabled={disabled || busy} aria-busy={busy || rest['aria-busy']}
    className={`kai-btn kai-btn--${variant}${busy ? ' is-pending' : ''} ${className}`.trim()}>
    {leadingIcon ? <span className="kai-btn-icon" aria-hidden="true">{leadingIcon}</span> : null}
    {children}
    {trailingIcon ? <span className="kai-btn-icon" aria-hidden="true">{trailingIcon}</span> : null}
  </button>;
});
