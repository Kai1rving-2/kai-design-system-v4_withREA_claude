import React from 'react';

const drawings = {
  add: <path d="M12 5v14M5 12h14" />,
  arrowRight: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  arrowUpRight: <><path d="M5 19 19 5" /><path d="M9 5h10v10" /></>,
  arrowDown: <><path d="M12 4v15" /><path d="m6 13 6 6 6-6" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronUp: <path d="m6 15 6-6 6 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  close: <><path d="M6 6 18 18" /><path d="M18 6 6 18" /></>,
  search: <><circle cx="10.8" cy="10.8" r="6.3" /><path d="m16 16 4 4" /></>,
  refresh: <><path d="M20 7v5h-5" /><path d="M4 17v-5h5" /><path d="M5.8 9A7 7 0 0 1 18 7l2 5M4 12l2 5a7 7 0 0 0 12.2-2" /></>,
  info: <><circle cx="12" cy="12" r="8" /><path d="M12 11v5" /><path d="M12 8h.01" /></>,
  alert: <><path d="M10.3 4.5 2.8 17.2a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.5a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></>,
  clock: <><circle cx="12" cy="12" r="8" /><path d="M12 7.5V12l3.5 2" /></>,
  more: <><circle cx="5" cy="12" r=".8" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r=".8" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r=".8" fill="currentColor" stroke="none" /></>,
  spark: <><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" /><path d="m19 16 .6 1.4L21 18l-1.4.6L19 20l-.6-1.4L17 18l1.4-.6L19 16Z" /></>,
};

/** Decorative by default. Give a standalone icon an aria-label, or label its parent control. */
export function Icon({ name, size = 18, strokeWidth = 1.75, className = '', ...rest }) {
  if (!Object.hasOwn(drawings, name)) return null;
  const labelled = Boolean(rest['aria-label']);
  return <svg {...rest} className={`kai-icon ${className}`.trim()} width={size} height={size}
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
    strokeLinecap="round" strokeLinejoin="round" focusable="false"
    role={labelled ? 'img' : undefined} aria-hidden={labelled ? undefined : true}>
    {drawings[name]}
  </svg>;
}
