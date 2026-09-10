import React from 'react';

export function ReviewSummary({ rows = [], style }) {
  return (
    <div style={{
      background: 'var(--surface-page)', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)', padding: '14px 16px', ...style,
    }}>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', gap: 'var(--space-4)', padding: '4px 0',
          fontSize: 'var(--text-sm)',
          borderTop: r.divider ? '1px solid var(--border-default)' : undefined,
          marginTop: r.divider ? 'var(--space-1)' : undefined,
        }}>
          <span style={{ color: 'var(--text-secondary)' }}>{r.label}</span>
          <span style={{
            fontWeight: r.strong ? 'var(--weight-medium)' : 400,
            fontVariantNumeric: 'var(--numeric-tabular)', textAlign: 'right',
          }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}
