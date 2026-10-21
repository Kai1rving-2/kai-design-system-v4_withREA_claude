import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Keeps a live feed pinned only while its reader is already near the end. */
export function StreamViewport({ children, updateKey, height = 320, label = '动态内容', jumpLabel = '查看最新内容', className = '' }) {
  const viewport = React.useRef(null);
  const pinned = React.useRef(true);
  const [showJump, setShowJump] = React.useState(false);
  const [edges, setEdges] = React.useState({ top: false, bottom: false });

  const measure = React.useCallback(() => {
    const node = viewport.current;
    if (!node) return;
    const remaining = node.scrollHeight - node.clientHeight - node.scrollTop;
    setEdges({ top: node.scrollTop > 1, bottom: remaining > 1 });
  }, []);
  const toLatest = React.useCallback(() => {
    const node = viewport.current;
    if (!node) return;
    pinned.current = true;
    node.scrollTop = node.scrollHeight;
    setShowJump(false);
    measure();
  }, [measure]);

  React.useLayoutEffect(() => {
    const node = viewport.current;
    if (!node) return;
    if (pinned.current) node.scrollTop = node.scrollHeight;
    else setShowJump(node.scrollHeight - node.clientHeight - node.scrollTop > 40);
    measure();
  }, [updateKey, measure]);

  React.useEffect(() => {
    const node = viewport.current;
    if (!node || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => {
      if (pinned.current) node.scrollTop = node.scrollHeight;
      measure();
    });
    observer.observe(node);
    if (node.firstElementChild) observer.observe(node.firstElementChild);
    return () => observer.disconnect();
  }, [measure]);

  function handleScroll() {
    const node = viewport.current;
    if (!node) return;
    pinned.current = node.scrollHeight - node.clientHeight - node.scrollTop <= 40;
    setShowJump(!pinned.current);
    measure();
  }
  return <div className={`kai-stream ${className}`.trim()}>
    <div ref={viewport} className="kai-stream-viewport" role="region" aria-label={label} tabIndex={0}
      data-fade-top={edges.top} data-fade-bottom={edges.bottom}
      style={{ height }} onScroll={handleScroll}>
      <div className="kai-stream-content">{children}</div>
    </div>
    {showJump ? <button type="button" className="kai-stream-jump" onClick={toLatest}>{jumpLabel} <Icon name="arrowDown" size={16} /></button> : null}
  </div>;
}
