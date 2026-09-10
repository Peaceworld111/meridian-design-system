import React from 'react';

export function AuditTrail({ entries = [], note, style }) {
  return (
    <div style={style}>
      <div style={{ display: 'grid', gridTemplateColumns: '110px 90px 1fr', gap: '4px 12px', fontSize: 'var(--text-xs)', alignItems: 'baseline' }}>
        {entries.map((e, i) => (
          <React.Fragment key={i}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{e.time}</span>
            <span>{e.actor}</span>
            <span>{e.what}</span>
          </React.Fragment>
        ))}
      </div>
      {note && (
        <div style={{
          fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-3)',
          paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-surface-2)',
        }}>{note}</div>
      )}
    </div>
  );
}
