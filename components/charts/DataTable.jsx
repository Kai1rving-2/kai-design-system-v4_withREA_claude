import React from 'react';

export function DataTable({ columns, rows, align }) {
  const alignOf = (c) => (align && align[c] === 'right' ? 'kai-table-num' : '');
  return (
    <table className="kai-table">
      <thead>
        <tr>
          {columns.map((c) => <th key={c} style={align && align[c] === 'right' ? { textAlign: 'right' } : null}>{c}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((cell, j) => (
              <td key={j} className={alignOf(columns[j])}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
