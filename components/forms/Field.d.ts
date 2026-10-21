import type * as React from 'react';
export interface FieldProps { id?: string; label?: React.ReactNode; help?: React.ReactNode; error?: React.ReactNode; required?: boolean; className?: string; style?: React.CSSProperties; children: React.ReactElement; }

export function Field(props: FieldProps): React.ReactNode;
