const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

test('authored themes check actual text and action pairs and preserve RGB generation', async () => {
  const { resolveTheme, validateTheme, themeRule } = await import('../scripts/theme-utils.mjs');
  const { buildThemes } = await import('../scripts/themes.mjs');
  const base = JSON.parse(fs.readFileSync(path.join(root, 'tokens/colors.json'), 'utf8'));
  const invalid = resolveTheme(base, { 'action-hover-bg': '#ffffff', 'action-hover-fg': '#ffffff' });
  assert.throws(() => validateTheme(invalid, Object.keys(base)), /action-hover-fg\/action-hover-bg/);
  assert.throws(() => validateTheme(resolveTheme(base, { 'accent-wash': base.accent }), Object.keys(base)), /accent\/accent-wash/);
  assert.throws(() => validateTheme({ ...resolveTheme(base), 'text-3': '#aaaaaa' }, Object.keys(base)), /text-3/);
  assert.match(themeRule('.product-theme', resolveTheme(base, { graphite: '#102030' })), /--action-bg: #102030;\n  --action-bg-rgb: 16, 32, 48;/);
  assert.throws(() => validateTheme({ ...resolveTheme(base), 'action-bg': '#fff' }, Object.keys(base)), /six-digit hex/);
  const results = buildThemes(root, { check: true });
  assert.equal(results.length, 3);
  assert.ok(results.every(theme => theme.pairs.every(pair => pair.contrast >= 4.5)));
});

test('filter and segmented controls render native non-submitting actions with state and labels', async () => {
  const { requireTool, esbuild } = await import('../scripts/toolchain.mjs');
  const React = requireTool('react');
  const render = requireTool('react-dom/server').renderToStaticMarkup;
  const result = await esbuild().build({ stdin: { contents: "export { FilterChip } from './components/core/FilterChip.jsx'; export { SegmentedControl } from './components/core/SegmentedControl.jsx'; export { StatusBadge } from './components/core/StatusBadge.jsx';", resolveDir: root, loader: 'jsx' }, bundle: true, write: false, format: 'cjs', external: ['react'] });
  const module = { exports: {} };
  vm.runInNewContext(result.outputFiles[0].text, { module, exports: module.exports, require: name => { assert.equal(name, 'react'); return React; } });
  const ds = module.exports;
  const chip = render(React.createElement(ds.FilterChip, { selected: true, count: 3, disabled: true }, '账号'));
  assert.match(chip, /type="button"/); assert.match(chip, /aria-pressed="true"/); assert.match(chip, /disabled=""/); assert.match(chip, /kai-filter-chip-count">3/);
  const group = render(React.createElement(ds.SegmentedControl, { label: '时间范围', value: 'day', options: [{ value: 'hour', label: '小时' }, { value: 'day', label: '天', disabled: true }] }));
  assert.match(group, /role="group" aria-label="时间范围"/);
  assert.equal((group.match(/type="button"/g) || []).length, 2);
  assert.match(group, /disabled="" aria-pressed="true"/);
  const badge = render(React.createElement(ds.StatusBadge, { tone: 'error' }, '读取失败'));
  assert.match(badge, /kai-status-badge--error/);
  assert.ok(!badge.includes('role="alert"'), 'static labels must not each become live announcements');
});
