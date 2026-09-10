Primary action control — one `primary` per screen, label says the action and its consequence.

```jsx
<Button variant="primary">确认付款 5,000.00 EUR</Button>
<Button variant="secondary" size="sm">取消</Button>
<Button variant="danger">拒绝</Button>
<Button disabled>提交审核（全部完成后可用）</Button>
```

Variants: primary / secondary / ghost / danger (outline, red text) / dangerSolid (only inside a confirm modal). Sizes sm 32 · md 36 · lg 40; in-table buttons use `size="sm"` with a 24px override.