import React from 'react';

export function Input({ invalid, mono, align, suffix, style, ...rest }) {
  const box = {
    display: 'flex', alignItems: 'center',
    border: '1px solid ' + (invalid ? 'var(--color-negative)' : 'var(--color-line-2)'),
    borderRadius: 'var(--radius-sm)', background: 'var(--color-surface)',
  };
  return (
    <div style={{ ...box, ...style }}>
      <input
        style={{
          flex: 1, minWidth: 0, height: 38, padding: '0 12px', border: 'none', outline: 'none',
          background: 'transparent', color: 'var(--text-primary)',
          fontFamily: mono ? 'var(--font-mono)' : 'inherit',
          fontSize: 'var(--text-base)', textAlign: align || 'left',
          fontVariantNumeric: align === 'right' ? 'var(--numeric-tabular)' : undefined,
        }}
        {...rest}
      />
      {suffix && (
        <span style={{ padding: '0 12px', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{suffix}</span>
      )}
    </div>
  );
}
