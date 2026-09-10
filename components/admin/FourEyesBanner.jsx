import React from 'react';

export function FourEyesBanner({ title, detail, action, style }) {
  return (
    <div style={{
      display: 'flex', gap: 'var(--space-3)', alignItems: 'center',
      background: 'var(--color-warning-soft)', border: '1px solid var(--color-warning-line)',
      borderRadius: 'var(--radius-md)', padding: '10px 16px', ...style,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--color-warning)', flexShrink: 0 }} />
      <span style={{ fontSize: 'var(--text-sm)', flex: 1, minWidth: 0 }}>
        <span style={{ fontWeight: 'var(--weight-medium)' }}>{title}</span> {detail}
      </span>
      {action}
    </div>
  );
}
