import type * as React from 'react';
export interface StatCardProps {
  label: string;
  value: React.ReactNode;
  sub?: string;
  delta?: string;
}

export function StatCard(props: StatCardProps): React.ReactNode;
