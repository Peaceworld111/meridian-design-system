import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Tabs } from '../../components/core/Tabs.jsx';
import { DataTable } from '../../components/data/DataTable.jsx';
import { Pagination } from '../../components/data/Pagination.jsx';
import { Amount } from '../../components/finance/Amount.jsx';
import { StatusBadge } from '../../components/status/StatusBadge.jsx';
import { Timeline } from '../../components/status/Timeline.jsx';
import { ApprovalChain } from '../../components/status/ApprovalChain.jsx';
import { ReviewSummary } from '../../components/finance/ReviewSummary.jsx';
import { Drawer } from '../../components/feedback/Drawer.jsx';

const ROWS = [
  { key: 'a', id: 'PMT-20260906-0031', payee: 'Acme GmbH', rail: 'SEPA', amt: '5,003.00', ccy: 'EUR', tone: 'warning', st: '等待审批' },
  { key: 'b', id: 'PMT-20260906-0030', payee: 'Orbit Software Pte', rail: 'SWIFT', amt: '2,400.00', ccy: 'USD', tone: 'neutral', st: '付款中' },
  { key: 'c', id: 'PMT-20260903-0028', payee: 'Nova Trading Ltd', rail: 'SEPA', amt: '18,284.00', ccy: 'EUR', tone: 'positive', st: '已付款' },
  { key: 'd', id: 'PMT-20260901-0022', payee: 'Kite Labs KK', rail: 'SWIFT', amt: '640.00', ccy: 'JPY', tone: 'negative', st: '付款失败' },
];

export function PaymentsScreen() {
  const [tab, setTab] = React.useState('all');
  const [sel, setSel] = React.useState(null);
  const row = ROWS.find(r => r.key === sel);

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <h1 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, margin: 0 }}>付款</h1>
        <span style={{ flex: 1 }} />
        <Button>新建付款</Button>
      </div>
      <Tabs value={tab} onChange={setTab} items={[
        { value: 'all', label: '全部', count: 34 },
        { value: 'pending', label: '待审批', count: 3 },
        { value: 'failed', label: '异常', count: 1 },
      ]} />
      <Card pad={false}>
        <DataTable
          density="compact"
          selectedKey={sel}
          onRowClick={setSel}
          columns={[
            { key: 'id', label: '编号', width: '170px' },
            { key: 'payee', label: '收款人' },
            { key: 'rail', label: '通道', width: '80px' },
            { key: 'amount', label: '金额', width: '150px', align: 'right' },
            { key: 'status', label: '状态', width: '130px' },
          ]}
          rows={ROWS.map(r => ({
            key: r.key,
            id: <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{r.id}</span>,
            payee: r.payee,
            rail: r.rail,
            amount: <Amount value={r.amt} currency={r.ccy} direction="out" />,
            status: <StatusBadge tone={r.tone}>{r.st}</StatusBadge>,
          }))}
        />
        <Pagination page={1} pages={9} pageSize={4} total={34} unit="笔" />
      </Card>

      <Drawer open={!!row} onClose={() => setSel(null)} title={row && row.id}
        badge={row && <StatusBadge tone={row.tone}>{row.st}</StatusBadge>}
        footer={<><Button variant="secondary" size="sm">下载回单</Button><Button size="sm">再付一次</Button></>}>
        {row && (
          <div style={{ display: 'grid', gap: 20 }}>
            <ReviewSummary rows={[
              { label: '收款人', value: row.payee },
              { label: '通道', value: row.rail },
              { label: '对方收', value: `${row.amt} ${row.ccy}`, strong: true },
              { label: '手续费', value: `3.00 ${row.ccy}` },
              { label: '预计到账', value: '9月8日前', divider: true },
            ]} />
            <div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 12 }}>审批链</div>
              <ApprovalChain steps={[
                { state: 'done', name: 'Linda Wong', sub: '发起 · 14:32' },
                { state: 'current', name: 'Chan Wai', sub: '等待审批' },
                { state: 'future', name: '平台审核', sub: '通常 1 小时内' },
              ]} />
            </div>
            <div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 12 }}>进度</div>
              <Timeline steps={[
                { state: 'done', label: '已提交', sub: '今天 14:32 · Linda Wong' },
                { state: 'current', label: '等待审批', sub: 'Chan Wai 已收到通知' },
                { state: 'future', label: '提交银行', sub: row.rail },
                { state: 'future', label: '预计到账', sub: '9月8日前' },
              ]} />
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
