import React from 'react';

const MAP = {
  '高': { bg: 'var(--color-risk-high-soft)', fg: 'var(--color-risk-high)' },
  '中': { bg: 'var(--color-risk-mid-soft)',  fg: 'var(--color-risk-mid)' },
  '低': { bg: 'var(--color-risk-low-soft)',  fg: 'var(--color-risk-low)' },
};

export function RiskBadge({ level = '低', style }) {
  const t = MAP[level] || MAP['低'];
  return (
    <span style={{
      display: 'inline-flex', padding: '1px 8px', borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', whiteSpace: 'nowrap',
      background: t.bg, color: t.fg, ...style,
    }}>{level}</span>
  );
}
