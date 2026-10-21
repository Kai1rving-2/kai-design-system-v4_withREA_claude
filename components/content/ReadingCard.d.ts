import type * as React from 'react';
export interface ReadingCardProps {
  tag?: string;
  date?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  readLabel?: string;
  readHref?: string;
  readTime?: string;
}

export function ReadingCard(props: ReadingCardProps): React.ReactNode;
