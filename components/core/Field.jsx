import React from 'react';

export function Field({ label, optional, help, error, children, style }) {
  return (
    <div style={{ display: 'grid', gap: 'var(--space-1)', ...style }}>
      {label && (
        <label style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-primary)' }}>
          {label}
          {optional && <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>（可选）</span>}
        </label>
      )}
      {children}
      {error
        ? <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-negative)' }}>{error}</div>
        : help ? <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{help}</div> : null}
    </div>
  );
}
