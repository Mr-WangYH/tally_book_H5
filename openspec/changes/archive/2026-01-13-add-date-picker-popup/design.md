## Context

账单列表页面需要支持用户通过点击日期区域来选择不同的月份查看账单。当前实现仅显示日期，缺少交互功能。项目已使用 Ant Design Mobile 5.41.1 作为 UI 组件库，该组件库提供了 `DatePicker` 组件，支持月份精度选择。

## Goals / Non-Goals

### Goals
- 提供直观的日期选择交互方式
- 使用项目已有的 UI 组件库，保持一致性
- 遵循现有的弹窗组件模式（参考 `TypePopup`）
- 支持月份级别的日期选择（符合业务需求）

### Non-Goals
- 不实现自定义日期选择器（使用组件库提供的组件）
- 不改变现有的日期格式（保持 `YYYY-MM` 格式）
- 不改变现有的账单查询 API 接口

## Decisions

### Decision: 使用 Ant Design Mobile DatePicker 组件
**原因**：
- 项目已使用 Ant Design Mobile 5.41.1，组件库已包含 `DatePicker`
- `DatePicker` 支持 `precision='month'` 属性，完美匹配业务需求
- 使用组件库组件可以保持 UI 风格一致性，减少维护成本
- 组件库组件经过充分测试，稳定可靠

**替代方案考虑**：
- 自定义日期选择器：开发成本高，需要处理各种边界情况，不符合简单优先原则
- 其他第三方日期选择器库：增加依赖，可能引入样式冲突

### Decision: 创建独立的 DatePopup 组件
**原因**：
- 遵循单一职责原则，日期选择逻辑独立封装
- 便于复用和维护
- 与现有的 `TypePopup` 组件模式保持一致

**替代方案考虑**：
- 直接在页面中内联实现：代码耦合度高，不利于复用

### Decision: 使用 Popup + DatePicker 组合
**原因**：
- `DatePicker` 组件本身支持 `visible` 属性控制显示，但使用 `Popup` 包装可以提供更好的移动端体验
- 与 `TypePopup` 的实现模式保持一致，降低学习成本

## Risks / Trade-offs

### 风险：DatePicker 返回的日期格式与业务需求不匹配
**缓解措施**：使用 `dayjs` 库将 DatePicker 返回的日期对象转换为 `YYYY-MM` 格式，项目已使用 `dayjs`，无需额外依赖

### 风险：DatePicker 的样式可能与项目整体风格不一致
**缓解措施**：Ant Design Mobile 组件库提供主题定制能力，如需要可通过 CSS 变量或样式覆盖进行调整

## Migration Plan

此变更不涉及数据迁移，仅添加新的 UI 交互功能。实施步骤：
1. 创建新组件（不影响现有功能）
2. 在页面中集成新组件（向后兼容）
3. 测试验证功能正常

## Open Questions

无
