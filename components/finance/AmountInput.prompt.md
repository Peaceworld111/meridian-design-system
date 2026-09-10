Money entry.

```jsx
<AmountInput value={amt} onChange={setAmt} avail="13,281.00 EUR" onMax={fillMax}
  picker={<CurrencyPicker value="EUR" options={ccys} onChange={setCcy} />}
  invalid={over} error={over && '超出可用余额，请减小金额或先充值'} />
```