import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { AmountInput } from '../../components/finance/AmountInput.jsx';
import { CurrencyPicker } from '../../components/finance/CurrencyPicker.jsx';
import { QuoteCard } from '../../components/finance/QuoteCard.jsx';

const CCY = [
  { code: 'USDT', name: 'Tether', kind: 'token', avail: '0.00' },
  { code: 'USDC', name: 'USD Coin', kind: 'token', avail: '0.00' },
  { code: 'EUR', name: '欧元', kind: 'fiat', avail: '13,281.00' },
  { code: 'USD', name: '美元', kind: 'fiat', avail: '0.00' },
  { code: 'HKD', name: '港元', kind: 'fiat', avail: '0.00' },
];
const RATE = { 'EUR>USDT': 1.0938, 'USDT>EUR': 0.9142, 'EUR>USD': 1.0842, 'USD>EUR': 0.9223, 'EUR>USDC': 1.0940, 'USDC>EUR': 0.9140 };

export function ExchangeScreen() {
  const [sell, setSell] = React.useState('10,000.00');
  const [sellCcy, setSellCcy] = React.useState('EUR');
  const [buyCcy, setBuyCcy] = React.useState('USDT');
  const [quoted, setQuoted] = React.useState(false);
  const [sec, setSec] = React.useState(30);

  React.useEffect(() => {
    if (!quoted) return;
    const i = setInterval(() => setSec(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(i);
  }, [quoted]);

  const avail = (CCY.find(c => c.code === sellCcy) || {}).avail || '0.00';
  const n = parseFloat(String(sell).replace(/,/g, '')) || 0;
  const over = n > (parseFloat(avail.replace(/,/g, '')) || 0);
  const rate = RATE[sellCcy + '>' + buyCcy] || 1;
  const fmt = x => x.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  if (quoted) {
    return (
      <div style={{ maxWidth: 'var(--form-max)', display: 'grid', gap: 16 }}>
        <h1 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, margin: 0 }}>兑换</h1>
        <QuoteCard
          sell={`${sell} ${sellCcy}`}
          buy={`${fmt(n * rate)} ${buyCcy}`}
          rate={`${rate} ${buyCcy} / ${sellCcy}`}
          fee={`0.00 ${buyCcy}`}
          seconds={sec} total={30}
          onRefresh={() => setSec(30)}
          onConfirm={() => setQuoted(false)}
        />
        <a href="#back" onClick={e => { e.preventDefault(); setQuoted(false); }} style={{ fontSize: 'var(--text-sm)' }}>← 修改金额</a>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 'var(--form-max)', display: 'grid', gap: 16 }}>
      <h1 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, margin: 0 }}>兑换</h1>
      <Card>
        <div style={{ display: 'grid', gap: 18 }}>
          <div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 6 }}>你卖出</div>
            <AmountInput
              value={sell} onChange={v => setSell(v)}
              avail={`${avail} ${sellCcy}`} onMax={() => setSell(avail)}
              invalid={over} error={over ? '超出可用余额，请减小金额或先充值' : null}
              picker={<CurrencyPicker options={CCY} value={sellCcy} onChange={setSellCcy} iconBase="../../assets/icons" />}
            />
          </div>
          <div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 6 }}>你买入</div>
            <AmountInput
              value={'≈ ' + fmt(n * rate)} onChange={() => {}}
              help="任一侧输入，另一侧实时估算"
              picker={<CurrencyPicker options={CCY} value={buyCcy} onChange={setBuyCcy} iconBase="../../assets/icons" />}
            />
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: 14, borderTop: '1px solid var(--color-surface-2)',
          }}>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
              1 {sellCcy} ≈ {rate} {buyCcy} · 汇率每 20 秒更新
            </span>
            <Button disabled={over || n <= 0} onClick={() => { setSec(30); setQuoted(true); }}>获取报价</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
