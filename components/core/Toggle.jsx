import React from 'react';

export function Toggle({ checked, onChange, label, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', cursor: 'pointer', ...style }}>
      <span
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 34, height: 20, borderRadius: 'var(--radius-full)', flexShrink: 0,
          background: checked ? 'var(--color-primary)' : 'var(--color-line-2)',
          position: 'relative', transition: 'background var(--duration-base) var(--easing)',
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: checked ? 16 : 2, width: 16, height: 16,
          borderRadius: 'var(--radius-full)', background: '#fff',
          transition: 'left var(--duration-base) var(--easing)',
        }} />
      </span>
      {label && <span style={{ fontSize: 'var(--text-sm)' }}>{label}</span>}
    </label>
  );
}
