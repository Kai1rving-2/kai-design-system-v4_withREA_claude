import React from 'react';

/** Toggle a product-owned filter; a count is information, not a second action. */
export const FilterChip = React.forwardRef(function FilterChip({ selected = false, count, className = '', children, type = 'button', ...rest }, ref) {
  return <button {...rest} ref={ref} type={type} aria-pressed={selected}
    className={`kai-filter-chip${selected ? ' is-selected' : ''} ${className}`.trim()}>
    <span>{children}</span>{count !== undefined ? <span className="kai-filter-chip-count">{count}</span> : null}
  </button>;
});
