import React from 'react';

export function Drawer({ open, onClose, title, badge, footer, width = 'var(--drawer)', children }) {
  React.useEffect(() => {
    if (!open) return;
    const h = e => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'var(--scrim)', zIndex: 20 }} />
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 21,
        width: `min(${width}, 94vw)`, background: 'var(--surface-card)',
        borderLeft: '1px solid var(--border-default)', boxShadow: 'var(--shadow-modal)',
        display: 'flex', flexDirection: 'column',
      }}>
        <header style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: '14px 20px',
          borderBottom: '1px solid var(--color-surface-2)',
        }}>
          <span style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)' }}>{title}</span>
          {badge}
          <span style={{ flex: 1 }} />
          <button onClick={onClose} style={{
            width: 26, height: 26, borderRadius: 'var(--radius-sm)', border: 'none',
            background: 'transparent', color: 'var(--text-muted)', fontSize: 16, cursor: 'pointer',
          }}>×</button>
        </header>
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>{children}</div>
        {footer && (
          <footer style={{
            display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)',
            padding: '12px 20px', borderTop: '1px solid var(--color-surface-2)',
          }}>{footer}</footer>
        )}
      </aside>
    </>
  );
}
