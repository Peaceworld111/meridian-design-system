Currency selector — used on both sides of exchange, on deposit, payout and payment.

```jsx
<CurrencyPicker value={ccy} onChange={setCcy} options={[
  { code: 'USDT', name: 'Tether', kind: 'token', avail: '0.00' },
  { code: 'EUR', name: '欧元', kind: 'fiat', avail: '13,281.00' },
]} />
```