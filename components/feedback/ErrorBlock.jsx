import React from 'react';

export function ErrorBlock({ what, why, action, style }) {
  return (
    <div style={{
      background: 'var(--color-warning-tint)', border: '1px solid var(--color-warning-line)',
      borderRadius: 'var(--radius-md)', padding: '14px 16px', ...style,
    }}>
      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' }}>{what}</div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 2 }}>{why}</div>
      {action && <div style={{ marginTop: 'var(--space-3)' }}>{action}</div>}
    </div>
  );
}
