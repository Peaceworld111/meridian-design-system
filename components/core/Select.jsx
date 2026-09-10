import React from 'react';

export function Select({ options = [], style, ...rest }) {
  return (
    <select
      style={{
        height: 40, padding: '0 10px', width: '100%', boxSizing: 'border-box',
        border: '1px solid var(--color-line-2)', borderRadius: 'var(--radius-sm)',
        background: 'var(--color-surface)', color: 'var(--text-primary)',
        fontSize: 'var(--text-base)', outline: 'none', ...style,
      }}
      {...rest}
    >
      {options.map(o => (
        <option key={typeof o === 'string' ? o : o.value} value={typeof o === 'string' ? o : o.value}>
          {typeof o === 'string' ? o : o.label}
        </option>
      ))}
    </select>
  );
}
