import React from 'react';

export function EmptyState({ title, body, action, style }) {
  return (
    <div style={{ padding: '40px 24px', textAlign: 'center', ...style }}>
      <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)' }}>{title}</div>
      {body && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 4 }}>{body}</div>}
      {action && <div style={{ marginTop: 'var(--space-4)' }}>{action}</div>}
    </div>
  );
}
