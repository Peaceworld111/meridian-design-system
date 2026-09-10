import React from 'react';

export function Toast({ children, tone = 'positive', style }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
      background: 'var(--color-inverse-surface)', color: 'var(--color-inverse-text)',
      borderRadius: 'var(--radius-md)', padding: '10px 16px', fontSize: 'var(--text-sm)',
      boxShadow: 'var(--shadow-modal)', ...style,
    }}>
      {tone === 'positive' && <span style={{ color: 'var(--color-inverse-accent)' }}>✓</span>}
      {children}
    </div>
  );
}
