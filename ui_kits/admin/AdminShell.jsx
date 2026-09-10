import React from 'react';

const GROUPS = [
  { name: '合规', items: [{ key: 'kyb', label: 'KYB 队列', badge: 12 }, { key: 'customers', label: '客户' }] },
  { name: '风控', items: [{ key: 'payout', label: '出金复核', badge: 4 }, { key: 'alerts', label: '告警' }] },
  { name: 'Treasury', items: [{ key: 'treasury', label: '资金' }, { key: 'config', label: '费率与通道' }] },
];

export function AdminShell({ view, onNavigate, children }) {
  return (
    <div style={{ display: 'flex', minHeight: 620, background: 'var(--surface-page)' }}>
      <nav style={{
        width: 'var(--sidebar-admin)', flexShrink: 0, background: 'var(--surface-card)',
        borderRight: '1px solid var(--border-default)', padding: '14px 12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px 16px' }}>
          <span style={{
            width: 24, height: 24, borderRadius: 'var(--radius-sm)', background: 'var(--color-ink)',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600,
          }}>M</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Meridian</span>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>内部</span>
        </div>
        {GROUPS.map(g => (
          <div key={g.name} style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', padding: '4px 8px' }}>{g.name}</div>
            {g.items.map(n => (
              <a key={n.key} href={'#' + n.key} onClick={e => { e.preventDefault(); onNavigate(n.key); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8, height: 30, padding: '0 8px',
                  borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)', textDecoration: 'none',
                  background: view === n.key ? 'var(--color-primary-soft)' : 'transparent',
                  color: view === n.key ? 'var(--color-primary)' : 'var(--text-secondary)',
                  fontWeight: view === n.key ? 'var(--weight-medium)' : 400, marginBottom: 2,
                }}>
                <span style={{ flex: 1 }}>{n.label}</span>
                {n.badge && (
                  <span style={{
                    minWidth: 16, height: 16, padding: '0 4px', borderRadius: 8,
                    background: 'var(--color-surface-2)', color: 'var(--text-secondary)', fontSize: 11,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontVariantNumeric: 'tabular-nums',
                  }}>{n.badge}</span>
                )}
              </a>
            ))}
          </div>
        ))}
      </nav>
      <main style={{ flex: 1, minWidth: 0 }}>
        <header style={{
          display: 'flex', alignItems: 'center', gap: 12, height: 'var(--topbar-height)',
          padding: '0 24px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-default)',
        }}>
          <input placeholder="搜索客户、单号、地址…" style={{
            height: 30, width: 280, padding: '0 10px', borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-default)', outline: 'none', fontSize: 'var(--text-sm)',
          }} />
          <span style={{ flex: 1 }} />
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Amy Ho · 合规</span>
        </header>
        <div style={{ padding: 'var(--content-pad)' }}>{children}</div>
      </main>
    </div>
  );
}
