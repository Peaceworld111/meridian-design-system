Payment / deposit progress inside a detail drawer.

```jsx
<Timeline steps={[
  { state: 'done', label: '已提交', sub: '今天 14:32 · Linda Wong' },
  { state: 'current', label: '等待审批', sub: 'Chan Wai 已收到通知' },
  { state: 'future', label: '预计到账', sub: '9月8日前' },
]} />
```