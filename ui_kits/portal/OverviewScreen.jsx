import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Amount } from '../../components/finance/Amount.jsx';
import { DataTable } from '../../components/data/DataTable.jsx';
import { StatusBadge } from '../../components/status/StatusBadge.jsx';

const ICON = '../../assets/icons';

export function OverviewScreen({ onNavigate }) {
  const ccyRow = (kind, code, name, avail, reserved, intransit) => ({
    key: code,
    ccy: (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <img src={`${ICON}/${kind}/${code.toLowerCase()}.svg`} width="18" height="18" alt="" />
        <span style={{ fontWeight: 500 }}>{code}</span>
        <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>{name}</span>
      </span>
    ),
    avail: <Amount value={avail} />,
    reserved: <span style={{ color: 'var(--text-secondary)' }}>{reserved}</span>,
    intransit: <span style={{ color: 'var(--text-secondary)' }}>{intransit}</span>,
    act: (
      <span style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
        <Button size="sm" variant="secondary" style={{ height: 24, padding: '0 10px', fontSize: 12 }} onClick={() => onNavigate('exchange')}>兑换</Button>
        <Button size="sm" variant="secondary" style={{ height: 24, padding: '0 10px', fontSize: 12 }} onClick={() => onNavigate('payments')}>付款</Button>
      </span>
    ),
  });

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <h1 style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-lg)', fontWeight: 600, margin: 0 }}>总览</h1>

      <Card>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>总资产 · 折合</div>
            <Amount size="hero" value="19,969.87" currency="USD" />
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            {[['可用', '13,281.00 EUR'], ['预留', '5,003.00 EUR'], ['在途', '5,000.00 USDT']].map(([l, v]) => (
              <div key={l}>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{l}</div>
                <div style={{ fontSize: 'var(--text-md)', fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>{v}</div>
              </div>
            ))}
          </div>
          <span style={{ flex: 1 }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <Button onClick={() => onNavigate('deposit')}>充值</Button>
            <Button variant="secondary" onClick={() => onNavigate('exchange')}>兑换</Button>
            <Button variant="secondary" onClick={() => onNavigate('payments')}>付款</Button>
          </div>
        </div>
      </Card>

      <Card title="币种" pad={false}>
        <DataTable
          columns={[
            { key: 'ccy', label: '币种', width: 'minmax(160px,1fr)' },
            { key: 'avail', label: '可用', width: '130px', align: 'right' },
            { key: 'reserved', label: '预留', width: '120px', align: 'right' },
            { key: 'intransit', label: '在途', width: '120px', align: 'right' },
            { key: 'act', label: '', width: '150px', align: 'right' },
          ]}
          rows={[
            ccyRow('flag', 'EUR', '欧元', '13,281.00', '5,003.00', '—'),
            ccyRow('token', 'USDT', 'Tether', '0.00', '—', '5,000.00'),
            ccyRow('flag', 'USD', '美元', '0.00', '—', '—'),
          ]}
        />
      </Card>

      <Card title="近期交易" action={<a href="#" onClick={e => { e.preventDefault(); onNavigate('payments'); }}>全部</a>} pad={false}>
        <DataTable
          density="compact"
          columns={[
            { key: 'date', label: '日期', width: '92px' },
            { key: 'what', label: '摘要' },
            { key: 'amt', label: '金额', width: '160px', align: 'right' },
            { key: 'st', label: '状态', width: '140px' },
          ]}
          rows={[
            { key: '1', date: '9月6日', what: 'Acme GmbH · SEPA', amt: <Amount value="5,003.00" currency="EUR" direction="out" />, st: <StatusBadge tone="warning">等待审批</StatusBadge> },
            { key: '2', date: '9月6日', what: '链上充值 · Ethereum', amt: <Amount value="5,000.00" currency="USDT" direction="in" />, st: <StatusBadge tone="neutral" progress="7 / 12">确认中</StatusBadge> },
            { key: '3', date: '9月6日', what: '兑换 USDT → EUR', amt: <Amount value="18,284.00" currency="EUR" direction="in" />, st: <StatusBadge tone="positive">已完成</StatusBadge> },
            { key: '4', date: '9月3日', what: '链上充值 · TRON', amt: <Amount value="20,000.00" currency="USDT" direction="in" />, st: <StatusBadge tone="positive">已入账</StatusBadge> },
          ]}
        />
      </Card>
    </div>
  );
}
