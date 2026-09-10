Long-form onboarding progress.

```jsx
<SectionChecklist done={5} total={8} saved="已保存 · 2 分钟前" items={[
  { state: 'done', label: '公司身份', sub: '注册证书、商业登记证、章程', trailing: '已完成' },
  { state: 'active', label: '人员身份验证', sub: '2 / 4 人已完成', trailing: <Button size="sm" variant="secondary">发送提醒</Button> },
  { state: 'pending', label: '声明与签署', sub: '需要授权签署人签署', trailing: '未开始' },
]} />
```