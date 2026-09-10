Row detail panel.

```jsx
<Drawer open={open} onClose={close} title="PMT-20260906-0031"
  badge={<StatusBadge tone="warning">等待审批</StatusBadge>}
  footer={<><Button variant="danger">拒绝</Button><Button>批准 5,000.00 EUR</Button></>}>
  <Timeline steps={steps} />
</Drawer>
```