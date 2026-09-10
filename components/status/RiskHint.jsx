import React from 'react';

export function RiskHint({ items = [], style }) {
  return (
    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: '22px', ...style }}>
      {items.map((t, i) => (
        <div key={i} style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <span style={{ color: 'var(--text-muted)' }}>◦</span>{t}
        </div>
      ))}
    </div>
  );
}
