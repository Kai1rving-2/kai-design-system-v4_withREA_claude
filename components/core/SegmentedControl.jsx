import React from 'react';

/** A labelled group of mutually exclusive action buttons, not a tab interface. */
export function SegmentedControl({ label, options, value, defaultValue, onValueChange, disabled = false, className = '' }) {
  const [localValue, setLocalValue] = React.useState(defaultValue ?? options.find(option => !option.disabled)?.value);
  const selected = value === undefined ? localValue : value;
  return <div role="group" aria-label={label} className={`kai-segmented ${className}`.trim()}>
    {options.map(option => <button key={option.value} type="button" className="kai-segmented-option"
      disabled={disabled || option.disabled} aria-pressed={selected === option.value}
      onClick={() => {
        if (selected === option.value) return;
        if (value === undefined) setLocalValue(option.value);
        onValueChange?.(option.value);
      }}>{option.label}</button>)}
  </div>;
}
