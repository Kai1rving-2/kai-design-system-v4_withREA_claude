import type * as React from 'react';
import type { TextareaHTMLAttributes } from 'react';

export interface NotesAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
}

export function NotesArea(props: NotesAreaProps): React.ReactNode;
