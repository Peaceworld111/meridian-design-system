Plain text input. Use `mono` for identifiers, `align="right"` for money.

```jsx
<Input placeholder="DE89 3704 0044 0532 0130 00" mono />
<Input defaultValue="5,000.00" align="right" suffix="EUR" />
<Input invalid defaultValue="25,000.00" align="right" />
```