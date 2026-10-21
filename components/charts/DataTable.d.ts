import type * as React from 'react';
export interface DataTableProps {
  columns: string[];
  rows: Array<Array<React.ReactNode>>;
  align?: Record<string, 'left' | 'right'>;
}

export function DataTable(props: DataTableProps): React.ReactNode;
