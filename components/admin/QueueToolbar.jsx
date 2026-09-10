import React from 'react';
import { Kbd } from '../core/Kbd.jsx';

export function QueueToolbar({ title, count, tabs = [], value, onChange, shortcuts = [], style }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap',
      padding: '10px 16px', borderBottom: '1px solid var(--border-default)', ...style,
    }}>
      {title && (
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)', whiteSpace: 'nowrap' }}>
          {title}
          {count != null && <span style={{ color: 'var(--text-secondary)', fontWeight: 400, fontVariantNumeric: 'var(--numeric-tabular)' }}> {count}</span>}
        </span>
      )}
      {tabs.map(t => (
        <span key={t} onClick={() => onChange && onChange(t)} style={{
          fontSize: 'var(--text-sm)', padding: '6px 0', cursor: 'pointer',
          color: t === value ? 'var(--color-primary)' : 'var(--text-secondary)',
          fontWeight: t === value ? 'var(--weight-medium)' : 400,
          borderBottom: '2px solid ' + (t === value ? 'var(--color-primary)' : 'transparent'),
        }}>{t}</span>
      ))}
      <span style={{ flex: 1 }} />
      {shortcuts.length > 0 && (
        <span style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
          快捷键 {shortcuts.map((s, i) => (
            <React.Fragment key={i}>{i > 0 && ' · '}<Kbd>{s.key}</Kbd> {s.label}</React.Fragment>
          ))}
        </span>
      )}
    </div>
  );
}
