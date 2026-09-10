import React from 'react';

export function Card({ title, action, pad = true, children, style }) {
  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)', overflow: 'hidden', ...style,
    }}>
      {title && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
          padding: '12px 16px', borderBottom: '1px solid var(--border-default)',
        }}>
          <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)' }}>{title}</span>
          <span style={{ flex: 1 }} />
          {action}
        </div>
      )}
      <div style={{ padding: pad ? '20px 24px' : 0 }}>{children}</div>
    </div>
  );
}
