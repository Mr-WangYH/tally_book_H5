## 1. Implementation

- [x] 1.1 创建日期选择弹窗组件 `DatePopup`
  - [x] 创建 `src/pages/bill/components/DatePopup/index.tsx`
  - [x] 创建 `src/pages/bill/components/DatePopup/index.module.scss`
  - [x] 使用 Ant Design Mobile 的 `DatePicker` 组件，设置 `precision='month'`
  - [x] 实现弹窗的显示/隐藏控制
  - [x] 实现日期选择确认回调

- [x] 1.2 在账单列表页面集成日期选择弹窗
  - [x] 在 `src/pages/bill/index.tsx` 中导入 `DatePopup` 组件
  - [x] 添加 `dateVisible` 状态控制弹窗显示
  - [x] 为日期显示区域（第84-87行）添加 `onClick` 事件处理
  - [x] 实现日期选择后的回调函数，更新 `params.date` 并重置分页

- [x] 1.3 样式和交互优化
  - [x] 确保日期弹窗样式与 `TypePopup` 保持一致的设计风格
  - [x] 验证日期格式转换（DatePicker 返回的日期对象转换为 `YYYY-MM` 格式）
  - [x] 确保选择日期后弹窗自动关闭

- [x] 1.4 测试验证
  - [x] 验证点击日期区域能正确弹出日期选择器
  - [x] 验证选择月份后能正确更新查询参数
  - [x] 验证选择日期后账单列表能正确刷新
  - [x] 验证日期格式正确（`YYYY-MM`）
  - [x] 验证弹窗关闭功能正常
