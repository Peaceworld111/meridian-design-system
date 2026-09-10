import React from 'react';

export function Timeline({ steps = [], style }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '0 12px', ...style }}>
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        const dot = s.state === 'done'
          ? { background: 'var(--color-ink)', border: 'none' }
          : s.state === 'current'
            ? { background: '#fff', border: '2px solid var(--color-state-neutral)' }
            : s.state === 'failed'
              ? { background: 'var(--color-negative)', border: 'none' }
              : { background: '#fff', border: '1px solid var(--color-line-2)' };
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ width: 10, height: 10, borderRadius: 5, boxSizing: 'border-box', marginTop: 5, ...dot }} />
              {!last && <span style={{ width: 1, flex: 1, background: 'var(--color-line)' }} />}
            </div>
            <div style={{ paddingBottom: last ? 0 : 'var(--space-4)' }}>
              <div style={{
                fontSize: 'var(--text-sm)',
                fontWeight: s.state === 'future' ? 400 : 'var(--weight-medium)',
                color: s.state === 'future' ? 'var(--text-secondary)' : 'var(--text-primary)',
              }}>{s.label}</div>
              {s.sub && (
                <div style={{
                  fontSize: 'var(--text-xs)',
                  color: s.state === 'current' ? 'var(--text-secondary)' : 'var(--text-muted)',
                  fontVariantNumeric: 'var(--numeric-tabular)',
                }}>{s.sub}</div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
