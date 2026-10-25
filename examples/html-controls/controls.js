'use strict';
const selectOption = (group, clicked) => {
  group.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button === clicked)));
};
document.getElementById('scope-controls').addEventListener('click', event => {
  const button = event.target.closest('button[data-scope]');
  if (!button) return;
  selectOption(event.currentTarget, button);
  document.getElementById('scope-summary').textContent = `查看${button.dataset.scope}示例数据。`;
});
document.getElementById('range-controls').addEventListener('click', event => {
  const button = event.target.closest('button[data-range]');
  if (!button) return;
  selectOption(event.currentTarget, button);
  document.getElementById('range-summary').textContent = `当前范围：按${button.dataset.range}。`;
});

const form = document.getElementById('sample-form');
const submit = document.getElementById('sample-submit');
const feedback = document.getElementById('action-feedback');
const badge = document.getElementById('action-badge');
const freshness = document.getElementById('freshness');
const markStale = document.getElementById('mark-stale');
let pending = false;
let hasResult = false;

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (pending || !form.reportValidity()) return;
  pending = true;
  submit.disabled = true;
  submit.setAttribute('aria-busy', 'true');
  submit.textContent = '正在生成……';
  badge.dataset.tone = 'neutral';
  badge.textContent = '正在处理';
  feedback.dataset.state = 'pending';
  feedback.textContent = '正在执行本地合成操作……';
  // Capture the submitted values before the simulated async operation begins.
  const name = document.getElementById('sample-name').value.trim();
  const fail = document.getElementById('simulate-failure').checked;
  try {
    await new Promise(resolve => setTimeout(resolve, 350));
    if (fail) throw new Error('本次是模拟失败。取消勾选“模拟一次读取失败”后可以重试。');
    const time = new Date().toLocaleTimeString();
    document.getElementById('sample-result').textContent = `${name} · 生成于 ${time}`;
    feedback.dataset.state = 'success';
    feedback.textContent = '本地合成结果已生成。页面没有保存或上传数据。';
    badge.dataset.tone = 'success';
    badge.textContent = '已经完成';
    freshness.dataset.state = 'live';
    freshness.textContent = `本地合成来源 · 更新于 ${time}`;
    hasResult = true;
    markStale.disabled = false;
  } catch (error) {
    feedback.dataset.state = 'error';
    feedback.textContent = error.message;
    badge.dataset.tone = 'error';
    badge.textContent = '没有完成';
    freshness.dataset.state = 'error';
    freshness.textContent = hasResult ? '本地合成来源 · 更新失败，保留上次结果' : '本地合成来源 · 读取失败，尚无结果';
  } finally {
    pending = false;
    submit.disabled = false;
    submit.setAttribute('aria-busy', 'false');
    submit.textContent = feedback.dataset.state === 'error' ? '重试合成操作' : '生成合成结果';
  }
});
markStale.addEventListener('click', () => {
  freshness.dataset.state = 'stale';
  freshness.textContent = '本地合成来源 · 已手动标记为过期，可以重新生成';
  markStale.disabled = true;
});
