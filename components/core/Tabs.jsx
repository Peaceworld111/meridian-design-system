import React from 'react';

export function Tabs({ items = [], value, onChange, style }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid var(--border-default)', ...style }}>
      {items.map(it => {
        const key = typeof it === 'string' ? it : it.value;
        const label = typeof it === 'string' ? it : it.label;
        const count = typeof it === 'string' ? null : it.count;
        const on = key === value;
        return (
          <a key={key} href={'#' + key}
            onClick={e => { e.preventDefault(); onChange && onChange(key); }}
            style={{
              padding: '8px 2px', fontSize: 'var(--text-base)', textDecoration: 'none',
              color: on ? 'var(--color-primary)' : 'var(--text-secondary)',
              fontWeight: on ? 'var(--weight-medium)' : 400,
              borderBottom: '2px solid ' + (on ? 'var(--color-primary)' : 'transparent'),
            }}>
            {label}
            {count != null && (
              <span style={{ marginLeft: 6, fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontVariantNumeric: 'var(--numeric-tabular)' }}>{count}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}
