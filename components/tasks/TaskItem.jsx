import React from 'react';
import { Checkbox } from '../forms/Checkbox.jsx';

export function TaskItem({ text, done = false, readOnly = false, onToggle, onDelete }) {
  return <div className={`kai-task${done ? ' kai-task--done' : ''}`}>
    <Checkbox label={text} checked={done} disabled={readOnly || !onToggle} onChange={onToggle} />
    {!readOnly && onDelete ? <button type="button" className="kai-task-delete" aria-label={`删除：${text}`} onClick={onDelete}>× 删除</button> : null}
  </div>;
}
