import React from 'react';

export function Blockquote({ text, source }) {
  return (
    <blockquote className="kai-blockquote">
      <p className="kai-blockquote-text">{text}</p>
      {source ? <span className="kai-blockquote-source">{source}</span> : null}
    </blockquote>
  );
}
