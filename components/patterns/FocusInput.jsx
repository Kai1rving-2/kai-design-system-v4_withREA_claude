import React from 'react';

export function FocusInput({ eyebrow = '今天最重要的一件事', prompt = '只有一件。', hint = '按 Enter 确认', value, onChange, onConfirm, onKeyDown, onCompositionStart, onCompositionEnd, placeholder = '写下它……', ...rest }) {
  const [showHint, setShowHint] = React.useState(false);
  const composing = React.useRef(false);
  return (
    <div className="kai-focus-zone" style={{ padding: '72px 0 56px', textAlign: 'center' }}>
      <div className="kai-eyebrow" style={{ justifyContent: 'center', marginBottom: 28 }}>{eyebrow}</div>
      <p style={{
        fontFamily: 'var(--font-serif)', fontWeight: 'var(--weight-display)',
        fontSize: 'var(--text-body-sm)', color: 'var(--text-3)',
        fontStyle: 'italic', marginBottom: 16, letterSpacing: '0.04em',
      }}>{prompt}</p>
      <input
        className="kai-focus-input"
        style={{ maxWidth: 480, display: 'block', margin: '0 auto 12px' }}
        value={value}
        onChange={(e) => { setShowHint(true); onChange && onChange(e); }}
        onCompositionStart={(e) => { composing.current = true; onCompositionStart?.(e); }}
        onCompositionEnd={(e) => { composing.current = false; onCompositionEnd?.(e); }}
        onKeyDown={(e) => {
          onKeyDown?.(e);
          if (e.defaultPrevented || composing.current || e.nativeEvent?.isComposing || e.keyCode === 229) return;
          if (e.key === 'Enter' && onConfirm) { onConfirm(e); setShowHint(false); }
        }}
        placeholder={placeholder}
        maxLength={60}
        autoComplete="off"
        {...rest}
      />
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)',
        color: 'var(--text-3)', letterSpacing: '0.1em',
        textTransform: 'uppercase', marginTop: 16,
        opacity: showHint ? 1 : 0, transition: 'opacity var(--duration-slow)',
      }}>{hint}</div>
    </div>
  );
}
