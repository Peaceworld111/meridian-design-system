import React from 'react';

const SIZES = {
  table:  { fontSize: 'var(--text-sm)',  lineHeight: 'var(--leading-sm)' },
  detail: { fontSize: 'var(--text-md)',  lineHeight: 'var(--leading-md)' },
  confirm:{ fontSize: 'var(--text-xl)',  lineHeight: 'var(--leading-xl)' },
  hero:   { fontSize: 'var(--text-2xl)', lineHeight: 'var(--leading-2xl)', letterSpacing: 'var(--tracking-display)' },
};

export function Amount({ value, currency, direction, size = 'table', approx, style }) {
  const sign = direction === 'in' ? '+ ' : direction === 'out' ? '\u2212 ' : '';
  return (
    <span style={{ display: approx ? 'inline-block' : 'inline' }}>
      <span style={{
        fontWeight: 'var(--weight-amount)', fontVariantNumeric: 'var(--numeric-tabular)',
        display: approx ? 'block' : 'inline', ...SIZES[size], ...style,
      }}>
        {sign}{value}{currency ? ' ' : ''}
        {currency && (
          <span style={size === 'hero'
            ? { fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', fontWeight: 400 }
            : undefined}>{currency}</span>
        )}
      </span>
      {approx && (
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontVariantNumeric: 'var(--numeric-tabular)' }}>≈ {approx}</span>
      )}
    </span>
  );
}
