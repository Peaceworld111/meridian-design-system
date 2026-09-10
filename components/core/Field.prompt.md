Wraps a control with its label, help line, and error line.

```jsx
<Field label="收款人名称" help="必须与银行账户开户名完全一致">
  <Input defaultValue="Acme GmbH" />
</Field>
```

Error replaces help (never stacks). Validation fires on blur.