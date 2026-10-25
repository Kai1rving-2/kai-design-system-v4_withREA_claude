import * as React from 'react';
import { Button, Icon, Input, Select, Textarea, Field, Checkbox, Surface, IconButton, TextLink, AsyncState, ConfirmAction, ToastHost, FocusInput, ProcessDisclosure, StreamViewport, FilterChip, SegmentedControl, StatusBadge } from '../index.js';
import { colorTokens } from '../tokens/colors.js';

const ref = React.createRef<HTMLInputElement>();
export const consumer = <Surface style={{ color: colorTokens['text-1'] }}>
  <Button type="submit" leadingIcon={<Icon name="check" />} pending disabled onClick={() => {}}>保存</Button>
  <IconButton aria-label="关闭" tooltipAlign="end" icon={<Icon name="close" />} onClick={() => {}} />
  <Surface variant="soft">内层说明</Surface>
  <Surface variant="plain">无框内容</Surface>
  <Input ref={ref} label="名称" id="name" name="name" value="示例" onChange={() => {}} autoComplete="name" />
  <Select label="类型" options={['A', 'B']} onChange={() => {}} />
  <Textarea label="说明" help="帮助" error="错误" rows={4} />
  <Field label="原生控件"><input /></Field>
  <Checkbox label="完成" checked onChange={() => {}} />
  <TextLink href="/example" className="custom">导航</TextLink>
  <AsyncState state="error" onRetry={() => {}} />
  <ConfirmAction triggerLabel="删除" confirmLabel="删除项目" description="后果" onConfirm={async () => {}} />
  <ToastHost notices={[{ id: '1', message: '保存完成', tone: 'success' }]} onDismiss={() => {}} />
  <FocusInput value="" onChange={() => {}} onConfirm={() => {}} />
  <ProcessDisclosure title="整理资料" status="error" onRetry={() => {}}>网络中断，内容仍保留。</ProcessDisclosure>
  <StreamViewport updateKey={2} label="动态记录"><p>第二条记录</p></StreamViewport>
  <FilterChip selected count={3} onClick={() => {}}>账号</FilterChip>
  <SegmentedControl label="时间范围" value="day" options={[{ value: 'hour', label: '小时' }, { value: 'day', label: '天' }]} onValueChange={() => {}} />
  <StatusBadge tone="success" title="本地合成结果">已完成</StatusBadge>
</Surface>;
// @ts-expect-error invalid variant must not be silently accepted
export const invalid = <Button variant="invented" />;
// @ts-expect-error icon-only controls require a name
export const unnamed = <IconButton>×</IconButton>;
// @ts-expect-error process status must be one of the supported states
export const invalidProcess = <ProcessDisclosure title="过程" status="unknown" />;
// @ts-expect-error icon names are a fixed semantic set
export const invalidIcon = <Icon name="confetti" />;
// @ts-expect-error surfaces only expose the three documented layers
export const invalidSurface = <Surface variant="floating" />;

// @ts-expect-error badge tone must describe a supported visual status
export const invalidBadge = <StatusBadge tone="danger">错误</StatusBadge>;
// @ts-expect-error counts are numeric data
export const invalidCount = <FilterChip count="three">账号</FilterChip>;
// @ts-expect-error mutually exclusive action groups require a meaningful accessible label
export const unlabelledSegments = <SegmentedControl options={[{ value: 'day', label: '天' }]} />;
