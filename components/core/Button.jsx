import React from 'react';

const H = { sm: 'var(--control-md)', md: 'var(--control-lg)', lg: 'var(--control-xl)' };
const PAD = { sm: '0 14px', md: '0 16px', lg: '0 20px' };

export function Button({ variant = 'primary', size = 'md', disabled, full, children, style, ...rest }) {
  const base = {
    height: H[size], padding: PAD[size], borderRadius: 'var(--radius-sm)',
    fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-sm)',
    fontWeight: 'var(--weight-medium)', cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
    whiteSpace: 'nowrap', width: full ? '100%' : undefined,
    transition: 'background var(--duration-fast) var(--easing)',
  };
  const skins = {
    primary: { background: 'var(--color-primary)', color: '#fff', border: '1px solid var(--color-primary)' },
    secondary: { background: 'var(--color-surface)', color: 'var(--color-ink)', border: '1px solid var(--color-line-2)' },
    ghost: { background: 'transparent', color: 'var(--color-ink-2)', border: '1px solid transparent' },
    danger: { background: 'var(--color-surface)', color: 'var(--color-negative)', border: '1px solid var(--color-line-2)' },
    dangerSolid: { background: 'var(--color-negative)', color: '#fff', border: '1px solid var(--color-negative)' },
  };
  const off = { background: 'var(--color-surface-2)', color: 'var(--color-ink-3)', border: '1px solid var(--color-surface-2)' };
  return (
    <button disabled={disabled} style={{ ...base, ...(disabled ? off : skins[variant]), ...style }} {...rest}>
      {children}
    </button>
  );
}
