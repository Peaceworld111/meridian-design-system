import React from 'react';

export function QuoteCard({ sell, buy, rate, fee, seconds = 30, total = 30, onConfirm, onRefresh, style }) {
  const expired = seconds <= 0;
  const CIRC = 62.83;
  const row = (l, v, size) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '6px 0' }}>
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{l}</span>
      <span style={{
        fontSize: size || 'var(--text-md)', lineHeight: size ? 'var(--leading-xl)' : undefined,
        fontWeight: 'var(--weight-amount)', fontVariantNumeric: 'var(--numeric-tabular)',
      }}>{v}</span>
    </div>
  );
  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)', padding: 'var(--space-6)', ...style,
    }}>
      {row('你卖出', sell)}
      {row('你买入', buy, 'var(--text-xl)')}
      {row('汇率', rate)}
      {fee && row('手续费', fee)}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginTop: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-surface-2)',
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', fontVariantNumeric: 'var(--numeric-tabular)' }}>
          <svg width="26" height="26" viewBox="0 0 26 26">
            <circle cx="13" cy="13" r="10" style={{ fill: 'none', stroke: 'var(--color-line)', strokeWidth: 3 }} />
            <circle cx="13" cy="13" r="10" style={{
              fill: 'none', stroke: expired ? 'var(--color-line-2)' : 'var(--color-state-neutral)', strokeWidth: 3,
              strokeLinecap: 'round', strokeDasharray: CIRC, strokeDashoffset: expired ? CIRC : CIRC * (1 - seconds / total),
              transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dashoffset 1s linear',
            }} />
          </svg>
          {expired ? '报价已过期' : seconds + ' 秒后过期'}
        </span>
        <button onClick={expired ? onRefresh : onConfirm} style={{
          height: 'var(--control-lg)', padding: '0 16px', borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', cursor: 'pointer',
          background: expired ? 'var(--color-surface)' : 'var(--color-primary)',
          color: expired ? 'var(--color-ink)' : '#fff',
          border: '1px solid ' + (expired ? 'var(--color-line-2)' : 'var(--color-primary)'),
        }}>{expired ? '刷新报价' : '确认兑换'}</button>
      </div>
    </div>
  );
}
