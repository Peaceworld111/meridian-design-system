import React from 'react';

export function Skeleton({ w = '100%', h = 13, style }) {
  return <span style={{ display: 'inline-block', width: w, height: h, borderRadius: 3, background: 'var(--color-surface-2)', ...style }} />;
}
