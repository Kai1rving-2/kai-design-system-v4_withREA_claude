import React from 'react';

export function NotesArea({ placeholder = '随手记点什么……', rows = 3, className = '', ...rest }) {
  return (
    <textarea
      className={`kai-notes ${className}`.trim()}
      placeholder={placeholder}
      rows={rows}
      {...rest}
    />
  );
}
