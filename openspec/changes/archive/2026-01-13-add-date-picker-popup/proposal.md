# Change: 添加账单日期选择弹窗

## Why

当前账单列表页面的日期显示区域（`src/pages/bill/index.tsx:84-87`）仅显示当前选中的月份，但缺少交互功能。用户无法通过点击日期来切换查看不同月份的账单记录。为了提升用户体验，需要添加点击日期后弹出日期选择器的功能，允许用户方便地选择不同的月份进行账单筛选。

## What Changes

- 添加日期选择弹窗组件 `DatePopup`，使用 Ant Design Mobile 的 `DatePicker` 组件
- 在账单列表页面集成日期选择弹窗，点击日期区域时弹出
- 日期选择器设置为月份精度（`precision='month'`），符合业务需求（账单按月份筛选）
- 选择日期后自动更新查询参数并刷新账单列表
- 保持与现有 `TypePopup` 组件一致的交互模式和视觉风格

## Impact

- 受影响的规范：账单筛选功能（新增日期选择交互）
- 受影响的代码：
  - `src/pages/bill/index.tsx` - 添加日期弹窗状态和点击事件处理
  - `src/pages/bill/components/DatePopup/` - 新建日期选择弹窗组件（包含 `index.tsx` 和 `index.module.scss`）
