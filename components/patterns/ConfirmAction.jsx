import React from 'react';
import { Button } from '../core/Button.jsx';
import { InlineFeedback } from '../feedback/InlineFeedback.jsx';

/** The product owns consequences and the async operation; this owns confirmation UI. */
export function ConfirmAction({ triggerLabel, confirmLabel, description, onConfirm, errorMessage = '操作没有完成，可以再试一次。', pendingLabel = '正在处理……', cancelLabel = '取消', disabled = false }) {
  const [confirming, setConfirming] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState(null);
  const inFlight = React.useRef(false);
  const trigger = React.useRef(null);
  const cancel = React.useRef(null);
  const descriptionId = React.useId();
  React.useEffect(() => { if (confirming) cancel.current?.focus(); }, [confirming]);
  async function confirm() {
    if (inFlight.current) return;
    inFlight.current = true;
    setPending(true);
    setError(null);
    try { await onConfirm(); setConfirming(false); }
    catch (reason) { setError(typeof errorMessage === 'function' ? errorMessage(reason) : errorMessage); }
    finally { inFlight.current = false; setPending(false); }
  }
  return <div className="kai-stack">
    <Button ref={trigger} variant="secondary" disabled={disabled || confirming} onClick={() => { setError(null); setConfirming(true); }}>{triggerLabel}</Button>
    {confirming ? <div className="kai-stack" role="group" aria-describedby={descriptionId}>
      <p id={descriptionId} className="kai-body">{description}</p>
      {error ? <InlineFeedback tone="error">{error}</InlineFeedback> : null}
      <div className="kai-actions">
        <Button pending={pending} onClick={confirm}>{pending ? pendingLabel : confirmLabel}</Button>
        <Button ref={cancel} variant="secondary" disabled={pending} onClick={() => { setConfirming(false); requestAnimationFrame(() => trigger.current?.focus()); }}>{cancelLabel}</Button>
      </div>
    </div> : null}
  </div>;
}
