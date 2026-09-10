Destructive-action confirmation.

```jsx
<Modal open={open} onClose={close} danger
  title="删除收款人 Acme GmbH？"
  body="正在处理中的 1 笔付款不受影响。删除后需要重新添加并等待 24 小时冷却才能付款。"
  confirmLabel="删除收款人" onConfirm={remove} />
```