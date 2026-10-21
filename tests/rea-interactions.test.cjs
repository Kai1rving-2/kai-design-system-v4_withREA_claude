const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadWithReact(react) {
  react.forwardRef ??= fn => fn;
  react.Children ??= { count: value => value == null ? 0 : Array.isArray(value) ? value.length : 1 };
  const context = { window: {}, React: react };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', '_ds_bundle.js'), 'utf8'), context);
  return context.window.KaiDesignSystemV4_3b9cf5;
}
const createElement = (type, props, ...children) => ({ type, props: { ...props, children } });
function find(node, predicate) {
  if (!node) return null;
  if (Array.isArray(node)) return node.map(item => find(item, predicate)).find(Boolean) ?? null;
  if (predicate(node)) return node;
  return find(node.props?.children, predicate);
}

test('FocusInput preserves IME selection and respects caller key handling', () => {
  const react = { createElement, useState: () => [false, () => {}], useRef: () => ({ current: false }) };
  const ds = loadWithReact(react);
  let confirmed = 0;
  let callerKeys = 0;
  const input = find(ds.FocusInput({ onConfirm: () => confirmed++, onKeyDown: () => callerKeys++ }), node => node.type === 'input');
  input.props.onCompositionStart({});
  input.props.onKeyDown({ key: 'Enter', nativeEvent: { isComposing: true }, keyCode: 229, defaultPrevented: false });
  assert.equal(confirmed, 0);
  input.props.onCompositionEnd({});
  input.props.onKeyDown({ key: 'Enter', nativeEvent: { isComposing: false }, keyCode: 13, defaultPrevented: false });
  assert.equal(confirmed, 1);
  assert.equal(callerKeys, 2);
  const guarded = find(ds.FocusInput({ onConfirm: () => confirmed++, onKeyDown: e => { e.defaultPrevented = true; } }), node => node.type === 'input');
  guarded.props.onKeyDown({ key: 'Enter', nativeEvent: { isComposing: false }, keyCode: 13, defaultPrevented: false });
  assert.equal(confirmed, 1);
});

test('StreamViewport holds reader position after they scroll away from the end', () => {
  let scrollHeight = 1000;
  let scrollTop = 800;
  const node = { clientHeight: 200, get scrollHeight() { return scrollHeight; }, get scrollTop() { return scrollTop; }, set scrollTop(value) { scrollTop = Math.min(value, scrollHeight - 200); } };
  const effects = [];
  const stateWrites = [];
  let refIndex = 0;
  const react = {
    createElement,
    useRef: initial => ({ current: refIndex++ === 0 ? node : initial }),
    useState: initial => [initial, value => stateWrites.push(value)],
    useCallback: fn => fn,
    useLayoutEffect: fn => effects.push(fn),
    useEffect: () => {},
  };
  const ds = loadWithReact(react);
  const view = ds.StreamViewport({ updateKey: 1, children: 'content' });
  const viewport = find(view, item => item.props?.className === 'kai-stream-viewport');
  effects[0]();
  scrollTop = 300;
  viewport.props.onScroll();
  scrollHeight = 1200;
  effects[0]();
  assert.equal(scrollTop, 300);
  assert.ok(stateWrites.includes(true), 'jump affordance becomes visible');
});

test('ProcessDisclosure keeps details under user control and exposes recovery on failure', () => {
  const react = { createElement, useState: () => [false, () => {}], useId: () => 'detail-1' };
  const ds = loadWithReact(react);
  const tree = ds.ProcessDisclosure({ status: 'error', title: '整理资料', children: '失败的步骤', onRetry: () => {} });
  const toggle = find(tree, node => node.type === 'button' && node.props?.['aria-controls'] === 'detail-1');
  const detail = find(tree, node => node.props?.id === 'detail-1');
  const retry = find(tree, node => typeof node.type === 'function' && typeof node.props?.onClick === 'function');
  assert.equal(toggle.props['aria-expanded'], false);
  assert.equal(detail.props.hidden, true);
  assert.ok(retry, 'retry remains visible when details are closed');
});
