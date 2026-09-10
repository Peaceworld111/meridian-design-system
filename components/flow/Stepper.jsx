import React from 'react';

export function Stepper({ steps = [], current = 0, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap', ...style }}>
      {steps.map((s, i) => {
        const state = i < current ? 'done' : i === current ? 'current' : 'future';
        const k = state === 'done'
          ? { bg: 'var(--color-positive-soft)', fg: 'var(--color-positive)' }
          : state === 'current'
            ? { bg: 'var(--color-primary)', fg: '#fff' }
            : { bg: 'var(--color-surface-2)', fg: 'var(--text-muted)' };
        return (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ width: 24, height: 1, background: i <= current ? 'var(--color-line-2)' : 'var(--color-line)' }} />}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', opacity: state === 'future' ? 0.6 : 1 }}>
              <span style={{
                width: 20, height: 20, borderRadius: 10, background: k.bg, color: k.fg,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 'var(--weight-semibold)',
              }}>{state === 'done' ? '✓' : i + 1}</span>
              <span style={{
                fontSize: 'var(--text-sm)',
                fontWeight: state === 'current' ? 'var(--weight-medium)' : 400,
                color: state === 'current' ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}>{s}</span>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}
