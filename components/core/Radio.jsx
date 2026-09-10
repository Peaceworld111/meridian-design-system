import React from 'react';

export function Radio({ label, sub, checked, onChange, name, value, style }) {
  return (
    <label style={{ display: 'flex', gap: 'var(--space-2)', alignItems: sub ? 'flex-start' : 'center', cursor: 'pointer', ...style }}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange}
        style={{ accentColor: 'var(--color-primary)', width: 14, height: 14, margin: sub ? '2px 0 0' : 0 }} />
      <span style={{ minWidth: 0 }}>
        <span style={{ fontSize: 'var(--text-sm)', display: 'block' }}>{label}</span>
        {sub && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{sub}</span>}
      </span>
    </label>
  );
}
