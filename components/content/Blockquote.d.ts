import type * as React from 'react';
export interface BlockquoteProps {
  text: React.ReactNode;
  source?: string;
}

export function Blockquote(props: BlockquoteProps): React.ReactNode;
