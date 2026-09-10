import React from 'react';

export function SectionChecklist({ items = [], done, total, saved, style }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div style={style}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', margin: '0 0 6px' }}>
        <div style={{ flex: 1, height: 4, borderRadius: 2, background: 'var(--color-surface-2)', overflow: 'hidden' }}>
          <div style={{ width: pct + '%', height: '100%', background: 'var(--color-primary)' }} />
        </div>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', fontVariantNumeric: 'var(--numeric-tabular)' }}>{done} / {total} 完成</span>
        {saved && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{saved}</span>}
      </div>
      {items.map((it, i) => {
        const mark = it.state === 'done'
          ? { background: 'var(--color-positive-soft)', color: 'var(--color-positive)', border: 'none' }
          : it.state === 'active'
            ? { background: '#fff', border: '2px solid var(--color-primary)' }
            : { background: '#fff', border: '1px solid var(--color-line-2)' };
        return (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: '10px 0',
            borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--color-surface-2)',
            background: it.state === 'active' ? 'var(--color-primary-tint)' : 'transparent', cursor: 'pointer',
          }}>
            <span style={{
              width: 18, height: 18, borderRadius: 9, boxSizing: 'border-box', flexShrink: 0,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, ...mark,
            }}>{it.state === 'done' ? '✓' : ''}</span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{
                fontSize: 'var(--text-sm)', display: 'block',
                fontWeight: it.state === 'pending' ? 400 : 'var(--weight-medium)',
                color: it.state === 'pending' ? 'var(--text-secondary)' : 'var(--text-primary)',
              }}>{it.label}</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{it.sub}</span>
            </span>
            {it.trailing}
          </div>
        );
      })}
    </div>
  );
}
