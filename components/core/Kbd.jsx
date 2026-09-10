import React from 'react';

export function Kbd({ children }) {
  return (
    <kbd style={{
      fontFamily: 'var(--font-mono)', fontSize: 11, background: 'var(--color-surface-2)',
      border: '1px solid var(--color-line-2)', borderRadius: 3, padding: '0 4px',
      color: 'var(--text-secondary)',
    }}>{children}</kbd>
  );
}
