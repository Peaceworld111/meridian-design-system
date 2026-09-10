import React from 'react';

export function CurrencyPicker({ options = [], value, onChange, iconBase = '../../assets/icons', style }) {
  const [open, setOpen] = React.useState(false);
  const sel = options.find(o => o.code === value) || options[0] || {};
  const src = o => `${iconBase}/${o.kind === 'fiat' ? 'flag' : 'token'}/${o.code.toLowerCase()}.svg`;
  const groups = [
    { name: '稳定币', items: options.filter(o => o.kind !== 'fiat') },
    { name: '法币', items: options.filter(o => o.kind === 'fiat') },
  ].filter(g => g.items.length);
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }}>
      <button onClick={() => setOpen(!open)} style={{
        display: 'flex', alignItems: 'center', gap: 5, height: 40, padding: '0 10px',
        border: 'none', borderLeft: '1px solid var(--color-line)', borderRadius: '0 3px 3px 0',
        background: 'var(--color-paper)', fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)', cursor: 'pointer', whiteSpace: 'nowrap',
      }}>
        {sel.code && <img src={src(sel)} width="16" height="16" alt="" style={{ display: 'block' }} />}
        {sel.code}
        <span style={{ color: 'var(--text-muted)', fontSize: 10 }}>▾</span>
      </button>
      {open && (
        <>
          <span onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 8 }} />
          <div style={{
            position: 'absolute', top: 44, right: 0, width: 250, zIndex: 9,
            background: 'var(--surface-card)', border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-popover)',
            padding: '6px 0', maxHeight: 300, overflowY: 'auto',
          }}>
            {groups.map(g => (
              <div key={g.name}>
                <div style={{ padding: '6px 12px 2px', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{g.name}</div>
                {g.items.map(o => (
                  <div key={o.code} onClick={() => { onChange && onChange(o.code); setOpen(false); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: '7px 12px',
                      cursor: 'pointer', background: o.code === value ? 'var(--color-primary-tint)' : 'transparent',
                    }}>
                    <img src={src(o)} width="18" height="18" alt="" style={{ display: 'block' }} />
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' }}>{o.code}</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.name}</span>
                    {o.avail != null && (
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', fontVariantNumeric: 'var(--numeric-tabular)' }}>{o.avail}</span>
                    )}
                    {o.code === value && <span style={{ color: 'var(--color-primary)', fontSize: 12 }}>✓</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </span>
  );
}
