import React from 'react';
import { Button } from '../core/Button.jsx';
import { InlineFeedback } from '../feedback/InlineFeedback.jsx';

/** Fetching, retry and partial-save policy stay in the product. */
export function AsyncState({ state, children, loadingMessage = '正在读取……', emptyMessage = '这里还没有内容。', errorMessage = '没有读取成功，可以再试一次。', onRetry }) {
  if (state === 'ready') return children;
  if (state === 'loading') return <div aria-busy="true"><InlineFeedback>{loadingMessage}</InlineFeedback></div>;
  return <div className="kai-stack"><InlineFeedback tone={state === 'error' ? 'error' : 'info'}>{state === 'error' ? errorMessage : emptyMessage}</InlineFeedback>
    {state === 'error' && onRetry ? <Button variant="secondary" onClick={onRetry}>重新读取</Button> : null}</div>;
}
