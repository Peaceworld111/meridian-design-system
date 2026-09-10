import React from 'react';

export function ApprovalChain({ steps = [], style }) {
  const skin = {
    done:    { bg: 'var(--color-positive-soft)', fg: 'var(--color-positive)' },
    current: { bg: 'var(--color-warning-soft)',  fg: 'var(--color-warning)' },
    future:  { bg: 'var(--color-surface-2)',     fg: 'var(--text-muted)' },
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', ...style }}>
      {steps.map((s, i) => {
        const k = skin[s.state] || skin.future;
        return (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ width: 28, height: 1, background: s.state === 'future' ? 'var(--color-line)' : 'var(--color-line-2)', margin: '0 10px' }} />}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', opacity: s.state === 'future' ? 0.6 : 1 }}>
              <span style={{
                width: 22, height: 22, borderRadius: 11, background: k.bg, color: k.fg,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 'var(--weight-semibold)',
              }}>{s.state === 'done' ? '✓' : i}</span>
              <span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: s.state === 'future' ? 400 : 'var(--weight-medium)', display: 'block', lineHeight: '16px' }}>{s.name}</span>
                <span style={{ fontSize: 11, color: s.state === 'current' ? 'var(--color-warning)' : 'var(--text-muted)', fontVariantNumeric: 'var(--numeric-tabular)' }}>{s.sub}</span>
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
