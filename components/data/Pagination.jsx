import React from 'react';

export function Pagination({ page = 1, pages = 1, pageSize, total, unit = '条', onPrev, onNext, style }) {
  const btn = (label, fn, off) => (
    <button onClick={fn} disabled={off} style={{
      height: 'var(--control-sm)', padding: '0 10px', borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (off ? 'var(--color-surface-2)' : 'var(--color-line-2)'),
      background: off ? 'var(--color-paper)' : 'var(--color-surface)',
      color: off ? 'var(--color-line-2)' : 'var(--color-ink)',
      fontSize: 'var(--text-xs)', cursor: off ? 'not-allowed' : 'pointer',
    }}>{label}</button>
  );
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap',
      gap: 'var(--space-2)', padding: '9px 16px', borderTop: '1px solid var(--color-surface-2)',
      fontSize: 'var(--text-xs)', color: 'var(--text-muted)', ...style,
    }}>
      <span style={{ fontVariantNumeric: 'var(--numeric-tabular)' }}>
        第 {page} / {pages} 页{pageSize ? ` · 每页 ${pageSize} ${unit}` : ''}{total != null ? ` · 共 ${total} ${unit}` : ''}
      </span>
      <span style={{ display: 'flex', gap: 6 }}>
        {btn('上一页', onPrev, page <= 1)}
        {btn('下一页', onNext, page >= pages)}
      </span>
    </div>
  );
}
