import React from 'react';

export function DataTable({ columns = [], rows = [], density = 'comfortable', selectedKey, onRowClick, minWidth = 600, style }) {
  const pad = density === 'compact' ? '7px 12px' : '11px 12px';
  const grid = columns.map(c => c.width || 'minmax(110px,1fr)').join(' ');
  return (
    <div style={{ overflowX: 'auto', ...style }}>
      <div style={{ minWidth }}>
        <div style={{
          display: 'grid', gridTemplateColumns: grid, background: 'var(--color-surface-2)',
          fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', color: 'var(--text-secondary)',
        }}>
          {columns.map(c => (
            <span key={c.key} style={{ padding: density === 'compact' ? '7px 12px' : '8px 12px', textAlign: c.align || 'left' }}>{c.label}</span>
          ))}
        </div>
        {rows.map(r => (
          <div key={r.key}
            onClick={() => onRowClick && onRowClick(r.key)}
            style={{
              display: 'grid', gridTemplateColumns: grid, alignItems: 'center',
              borderTop: '1px solid var(--color-surface-2)',
              background: r.key === selectedKey ? 'var(--color-primary-soft)' : 'transparent',
              cursor: onRowClick ? 'pointer' : 'default',
            }}>
            {columns.map(c => (
              <span key={c.key} style={{
                padding: pad, fontSize: 'var(--text-sm)', textAlign: c.align || 'left',
                fontVariantNumeric: c.align === 'right' ? 'var(--numeric-tabular)' : undefined,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: c.wrap ? 'normal' : 'nowrap',
              }}>{r[c.key]}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
