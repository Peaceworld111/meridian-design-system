import React from 'react';
import { Card } from '../../components/core/Card.jsx';
import { Button } from '../../components/core/Button.jsx';
import { QueueToolbar } from '../../components/admin/QueueToolbar.jsx';
import { FourEyesBanner } from '../../components/admin/FourEyesBanner.jsx';
import { AuditTrail } from '../../components/admin/AuditTrail.jsx';
import { DataTable } from '../../components/data/DataTable.jsx';
import { RiskBadge } from '../../components/status/RiskBadge.jsx';
import { Amount } from '../../components/finance/Amount.jsx';
import { ReviewSummary } from '../../components/finance/ReviewSummary.jsx';
import { Drawer } from '../../components/feedback/Drawer.jsx';
import { Toast } from '../../components/feedback/Toast.jsx';

const SEED = [
  { key: 'a', risk: '高', id: 'PMT-0031', cust: 'Nova Trading Ltd', payee: 'Sunrise FZE · AE', amt: '48,000.00', ccy: 'EUR', rule: '高风险国家 + 首次收款人', wait: '2 小时' },
  { key: 'b', risk: '中', id: 'PMT-0029', cust: 'Kelvin Tech HK', payee: 'Acme GmbH · DE', amt: '5,003.00', ccy: 'EUR', rule: '金额高于历史均值 5 倍', wait: '40 分钟' },
  { key: 'c', risk: '低', id: 'PMT-0028', cust: 'Orbit Software Pte', payee: 'Kite Labs KK · JP', amt: '640.00', ccy: 'USD', rule: '随机抽检', wait: '18 分钟' },
  { key: 'd', risk: '低', id: 'PMT-0027', cust: 'Harbor Freight Co', payee: 'Delta Ltd · GB', amt: '1,120.00', ccy: 'GBP', rule: '随机抽检', wait: '9 分钟' },
];

export function PayoutReviewScreen() {
  const [rows, setRows] = React.useState(SEED);
  const [tab, setTab] = React.useState('我的案件');
  const [sel, setSel] = React.useState(null);
  const [toast, setToast] = React.useState('');

  const release = key => {
    const r = rows.find(x => x.key === key);
    const rest = rows.filter(x => x.key !== key);
    setRows(rest); setSel(null);
    setToast(`已放行 ${r.id} · ${r.amt} ${r.ccy}，进入付款通道。队列剩 ${rest.length} 笔`);
    setTimeout(() => setToast(''), 4000);
  };

  const row = rows.find(r => r.key === sel);

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <FourEyesBanner title="等待第二审批人。"
        detail="汇率覆盖已提交，等待 MLRO 复核 · 发起人 Ops Chen · 理由：流动性对冲"
        action={<Button size="sm" variant="ghost">撤回</Button>} />

      <Card pad={false}>
        <QueueToolbar title="出金复核" count={rows.length} tabs={['我的案件', '未认领', '全部']} value={tab} onChange={setTab}
          shortcuts={[{ key: 'J', label: '下一条' }, { key: 'A', label: '放行' }, { key: 'Esc', label: '关闭' }]} />
        <DataTable
          density="compact"
          selectedKey={sel}
          onRowClick={setSel}
          minWidth={640}
          columns={[
            { key: 'risk', label: '风险', width: '64px' },
            { key: 'id', label: '单号', width: '108px' },
            { key: 'cust', label: '客户', width: 'minmax(110px,1fr)' },
            { key: 'payee', label: '收款人', width: 'minmax(110px,1fr)' },
            { key: 'rule', label: '拦截规则', width: '170px' },
            { key: 'amount', label: '金额', width: '124px', align: 'right' },
            { key: 'wait', label: '等待', width: '104px' },
          ]}
          rows={rows.map(r => ({
            key: r.key,
            risk: <RiskBadge level={r.risk} />,
            id: <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{r.id}</span>,
            cust: r.cust,
            payee: r.payee,
            rule: <span style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{r.rule}</span>,
            amount: <Amount value={r.amt} currency={r.ccy} />,
            wait: (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
                {r.wait}
                {r.risk === '低' && (
                  <a href="#fast" onClick={e => { e.preventDefault(); e.stopPropagation(); release(r.key); }} style={{ fontSize: 12 }}>放行</a>
                )}
              </span>
            ),
          }))}
        />
      </Card>

      {toast && <div style={{ position: 'fixed', left: '50%', bottom: 24, transform: 'translateX(-50%)', zIndex: 40 }}><Toast>{toast}</Toast></div>}

      <Drawer open={!!row} onClose={() => setSel(null)} width="var(--drawer-admin)"
        title={row && row.id} badge={row && <RiskBadge level={row.risk} />}
        footer={<>
          <Button variant="danger" size="sm">拒绝</Button>
          <Button variant="secondary" size="sm">改道 SWIFT</Button>
          <Button size="sm" onClick={() => release(row.key)}>放行</Button>
        </>}>
        {row && (
          <div style={{ display: 'grid', gap: 20 }}>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
              拦下原因：{row.rule}
            </div>
            <ReviewSummary rows={[
              { label: '客户', value: row.cust },
              { label: '收款人', value: row.payee },
              { label: '金额', value: `${row.amt} ${row.ccy}`, strong: true },
              { label: '账户名核验', value: '✓ 匹配' },
              { label: '制裁 / PEP', value: row.risk === '高' ? '1 可能命中' : '无命中', divider: true },
              { label: '客户 90 天出金', value: '12 笔 · 均值 4,100 EUR' },
            ]} />
            <div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 10 }}>操作记录</div>
              <AuditTrail entries={[
                { time: '09-06 15:02', actor: '系统', what: `触发规则「${row.rule}」，付款暂停` },
                { time: '09-06 15:02', actor: '系统', what: '风险评分 41 → 68' },
                { time: '09-06 15:05', actor: 'Amy Ho', what: '认领案件' },
              ]} />
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
