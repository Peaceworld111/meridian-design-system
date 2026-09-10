import React from 'react';

export const TONES = {
  neutral:  { bg: 'var(--color-surface-2)',    fg: 'var(--color-state-neutral)' },
  warning:  { bg: 'var(--color-warning-soft)', fg: 'var(--color-warning)' },
  positive: { bg: 'var(--color-positive-soft)',fg: 'var(--color-positive)' },
  negative: { bg: 'var(--color-negative-soft)',fg: 'var(--color-negative)' },
};

export function StatusBadge({ tone = 'neutral', dot = true, children, progress, style }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, padding: '2px 8px',
        borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-xs)', lineHeight: 'var(--leading-xs)',
        fontWeight: 'var(--weight-medium)', whiteSpace: 'nowrap',
        background: t.bg, color: t.fg, ...style,
      }}>
        {dot && <span style={{ width: 6, height: 6, borderRadius: 3, background: t.fg }} />}
        {children}
      </span>
      {progress && (
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontVariantNumeric: 'var(--numeric-tabular)' }}>· {progress}</span>
      )}
    </span>
  );
}
