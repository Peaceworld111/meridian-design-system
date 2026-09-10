import React from 'react';

export function Identifier({ label, value, full, network, explorer, style }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    try { navigator.clipboard.writeText(full || value); } catch (e) {}
    setCopied(true); setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', ...style }}>
      {label && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', width: 64 }}>{label}</span>}
      {network && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, padding: '1px 6px',
          borderRadius: 'var(--radius-sm)', background: 'var(--color-surface-2)', color: 'var(--text-secondary)',
        }}>{network}</span>
      )}
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>{value}</span>
      <button onClick={copy} style={{
        height: 22, padding: '0 8px', borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--color-line-2)', background: 'var(--color-surface)',
        color: 'var(--text-secondary)', fontSize: 11, cursor: 'pointer',
      }}>{copied ? '已复制' : '复制'}</button>
      {explorer && <a href={explorer} style={{ fontSize: 11 }}>浏览器 ↗</a>}
    </div>
  );
}
