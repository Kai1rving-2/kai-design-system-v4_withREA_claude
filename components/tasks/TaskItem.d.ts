import type * as React from 'react';
export interface TaskItemProps {
  text: string;
  done?: boolean;
  readOnly?: boolean;
  onToggle?: () => void;
  onDelete?: () => void;
}

export function TaskItem(props: TaskItemProps): React.ReactNode;
