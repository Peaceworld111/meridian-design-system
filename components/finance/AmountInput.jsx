import React from 'react';

export function AmountInput({ value, onChange, invalid, error, help, avail, onMax, picker, style }) {
  return (
    <div style={style}>
      <div style={{
        display: 'flex', border: '1px solid ' + (invalid ? 'var(--color-negative)' : 'var(--color-line-2)'),
        borderRadius: 'var(--radius-sm)', background: 'var(--color-surface)',
      }}>
        <input value={value} onChange={e => onChange && onChange(e.target.value)}
          style={{
            flex: 1, minWidth: 0, height: 40, padding: '0 12px', border: 'none', outline: 'none',
            background: 'transparent', textAlign: 'right', fontSize: 'var(--text-md)',
            fontWeight: 'var(--weight-amount)', fontVariantNumeric: 'var(--numeric-tabular)',
            color: 'var(--text-primary)',
          }} />
        {picker}
      </div>
      {(avail || help) && !error && (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 6, fontVariantNumeric: 'var(--numeric-tabular)' }}>
          {avail && <>可用 {avail}{onMax && <> · <a href="#max" onClick={e => { e.preventDefault(); onMax(); }}>全部</a></>}</>}
          {avail && help ? ' · ' : ''}{help}
        </div>
      )}
      {error && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-negative)', marginTop: 6 }}>{error}</div>}
    </div>
  );
}
