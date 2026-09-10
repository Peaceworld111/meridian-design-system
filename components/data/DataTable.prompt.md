Grid-based table.

```jsx
<DataTable density="compact" selectedKey={sel} onRowClick={setSel}
  columns={[
    { key: 'date', label: '日期', width: '96px' },
    { key: 'payee', label: '收款人' },
    { key: 'amount', label: '金额', width: '130px', align: 'right' },
    { key: 'status', label: '状态', width: '110px' },
  ]}
  rows={rows} />
```

Cells accept nodes, so pass `<Amount />` and `<StatusBadge />` straight in.