import React from 'react';

export function VerseDivider({ children }) {
  return (
    <div className="kai-verse-divider">
      <div className="kai-verse-line"></div>
      <div className="kai-verse-text">{children}</div>
      <div className="kai-verse-line"></div>
    </div>
  );
}
