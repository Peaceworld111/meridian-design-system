import React from 'react';

const NAV = [
  { key: 'overview', label: '总览' },
  { key: 'balances', label: '余额' },
  { key: 'deposit', label: '充值' },
  { key: 'exchange', label: '兑换' },
  { key: 'payments', label: '付款' },
  { key: 'payees', label: '收款人' },
  { key: 'approvals', label: '审批', badge: 3 },
  { key: 'statements', label: '结单' },
];

export function AppShell({ view, onNavigate, children }) {
  return (
    <div style={{ display: 'flex', minHeight: 620, background: 'var(--surface-page)' }}>
      <nav style={{
        width: 'var(--sidebar-portal)', flexShrink: 0, background: 'var(--surface-card)',
        borderRight: '1px solid var(--border-default)', padding: '14px 12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px 16px' }}>
          <span style={{
            width: 24, height: 24, borderRadius: 'var(--radius-sm)', background: 'var(--color-ink)',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 600,
          }}>M</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Meridian</span>
        </div>
        {NAV.map(n => (
          <a key={n.key} href={'#' + n.key}
            onClick={e => { e.preventDefault(); onNavigate(n.key); }}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, height: 32, padding: '0 8px',
              borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)', textDecoration: 'none',
              background: view === n.key ? 'var(--color-primary-soft)' : 'transparent',
              color: view === n.key ? 'var(--color-primary)' : 'var(--text-secondary)',
              fontWeight: view === n.key ? 'var(--weight-medium)' : 400, marginBottom: 2,
            }}>
            <span style={{ flex: 1 }}>{n.label}</span>
            {n.badge && (
              <span style={{
                minWidth: 16, height: 16, padding: '0 4px', borderRadius: 8, background: 'var(--color-warning-soft)',
                color: 'var(--color-warning)', fontSize: 11, fontWeight: 500,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>{n.badge}</span>
            )}
          </a>
        ))}
      </nav>
      <main style={{ flex: 1, minWidth: 0 }}>
        <header style={{
          display: 'flex', alignItems: 'center', gap: 12, height: 'var(--topbar-height)',
          padding: '0 24px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-default)',
        }}>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 8, height: 30, padding: '0 10px',
            borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)',
            background: 'var(--surface-card)', fontSize: 'var(--text-sm)', fontWeight: 500, cursor: 'pointer',
          }}>Kelvin Tech HK <span style={{ color: 'var(--text-muted)', fontSize: 10 }}>▾</span></button>
          <span style={{ flex: 1 }} />
          <a href="#noti" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
            <svg width="14" height="14" viewBox="0 0 16 16">
              <path d="M8 1.8c-2.3 0-3.9 1.7-3.9 4v2.4c0 .5-.2 1-.5 1.4l-.9 1.2c-.4.5 0 1.2.6 1.2h9.4c.6 0 1-.7.6-1.2l-.9-1.2c-.3-.4-.5-.9-.5-1.4V5.8c0-2.3-1.6-4-3.9-4Z" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinejoin: 'round' }} />
              <path d="M6.6 14a1.6 1.6 0 0 0 2.8 0" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round' }} />
            </svg>通知
          </a>
        </header>
        <div style={{ padding: 'var(--content-pad)', maxWidth: 'var(--content-max)' }}>{children}</div>
      </main>
    </div>
  );
}
