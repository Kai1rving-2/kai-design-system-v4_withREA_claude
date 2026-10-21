import React from 'react';

export function ToastDark({ children }) {
  return <div className="kai-toast kai-toast--dark" role="status">{children}</div>;
}
