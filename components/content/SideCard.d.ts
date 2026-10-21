import type * as React from 'react';
export interface SideCardProps {
  tone?: 'default' | 'dark';
  title: React.ReactNode;
  sub?: string;
}

export function SideCard(props: SideCardProps): React.ReactNode;
