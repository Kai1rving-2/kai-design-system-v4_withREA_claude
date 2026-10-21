import React from 'react';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

const copy = {
  idle: '准备就绪',
  running: '正在处理……',
  success: '已经完成',
  error: '没有完成，可以再试一次。',
};
const statusIcon = { idle: 'info', running: 'clock', success: 'check', error: 'alert' };

/** Displays a product-owned process. Never starts or retries work on its own. */
export function ProcessDisclosure({ status = 'idle', title, message, children, onRetry, retryLabel = '重试', defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const detailId = React.useId();
  const hasDetails = React.Children.count(children) > 0;
  const current = copy[status] ? status : 'idle';
  return <section className="kai-process" data-status={current} aria-busy={current === 'running'}>
    <div className="kai-process-head">
      <Icon className="kai-process-mark" name={statusIcon[current]} size={18} />
      <div className="kai-process-main">
        <div className="kai-process-title">{title}</div>
        <div className="kai-process-message" role="status" aria-live="polite">{message ?? copy[current]}</div>
      </div>
      {hasDetails ? <button type="button" className="kai-process-toggle" aria-expanded={open} aria-controls={detailId} onClick={() => setOpen(value => !value)}>
        {open ? '收起详情' : '查看详情'} <Icon name={open ? 'chevronUp' : 'chevronDown'} size={16} />
      </button> : null}
    </div>
    {hasDetails ? <div id={detailId} className="kai-process-detail" hidden={!open}>{children}</div> : null}
    {current === 'error' && onRetry ? <div className="kai-process-actions"><Button variant="secondary" leadingIcon={<Icon name="refresh" size={16} />} onClick={onRetry}>{retryLabel}</Button></div> : null}
  </section>;
}
