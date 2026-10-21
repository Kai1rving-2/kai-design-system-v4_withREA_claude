import type * as React from 'react';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { label?: React.ReactNode; help?: React.ReactNode; error?: React.ReactNode; controlClassName?: string; }

export const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
