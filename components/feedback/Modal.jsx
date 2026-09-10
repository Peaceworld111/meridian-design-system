import React from 'react';

export function Modal({ open, onClose, title, body, cancelLabel = '取消', confirmLabel, onConfirm, danger }) {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'var(--scrim)', zIndex: 30 }} />
      <div style={{
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 31,
        width: 'min(440px, 92vw)', background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-modal)', padding: 'var(--space-6)',
      }}>
        <div style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-2)' }}>{title}</div>
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: '20px' }}>{body}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-6)' }}>
          <button onClick={onClose} style={{
            height: 'var(--control-lg)', padding: '0 16px', borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-line-2)', background: 'var(--color-surface)',
            fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', cursor: 'pointer',
          }}>{cancelLabel}</button>
          <button onClick={onConfirm} style={{
            height: 'var(--control-lg)', padding: '0 16px', borderRadius: 'var(--radius-sm)',
            border: '1px solid ' + (danger ? 'var(--color-negative)' : 'var(--color-primary)'),
            background: danger ? 'var(--color-negative)' : 'var(--color-primary)',
            color: '#fff', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', cursor: 'pointer',
          }}>{confirmLabel}</button>
        </div>
      </div>
    </>
  );
}
