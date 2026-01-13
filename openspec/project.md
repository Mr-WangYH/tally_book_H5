# 项目上下文

## 目的

tally_book_h5 是一个基于 React 的个人记账本 H5 移动端应用，旨在帮助用户方便地记录和管理个人财务收支情况。主要功能包括：

- 账单记录：支持收入和支出两种类型的账单记录
- 账单分类：按类型筛选和查看账单
- 时间筛选：按月份查看历史账单
- 统计分析：查看总收入和总支出统计
- 用户管理：用户登录和个人信息管理

## 技术栈

### 核心框架

- **React** 18.3.1 - UI 框架
- **TypeScript** 5.9.3 - 类型系统
- **Vite** 7.2.4 - 构建工具和开发服务器

### 路由和状态管理

- **React Router** 7.9.6 - 路由管理，使用懒加载优化性能

### UI 组件库

- **Ant Design Mobile** 5.41.1 - 移动端 UI 组件库
- **antd-mobile-icons** 0.3.0 - 图标库

### 工具库

- **Axios** 1.13.2 - HTTP 请求库
- **Day.js** 1.11.19 - 日期处理库
- **classnames** 2.5.1 - CSS 类名工具

### 样式方案

- **SCSS/Sass** 1.94.2 - CSS 预处理器
- **PostCSS** 8.5.6 - CSS 后处理器
- **postcss-pxtorem** 6.1.0 - px 转 rem 适配移动端（rootValue: 16）

### 开发工具

- **ESLint** 9.39.1 - 代码检查
- **Prettier** 3.7.3 - 代码格式化
- **TypeScript ESLint** 8.48.0 - TypeScript 代码检查

### 包管理

- **pnpm** - 包管理器（根据 pnpm-lock.yaml 判断）

## 项目约定

### 代码风格

#### 格式化规则（Prettier）

- 单行最大字符数：120
- 缩进：2 个空格（不使用 tab）
- 字符串：使用单引号
- 行尾分号：使用
- 尾逗号：ES5 模式
- JSX 属性：使用单引号
- 箭头函数参数：避免括号（单参数时）

#### 命名约定

- **组件文件**：PascalCase（如 `BillPage.tsx`）
- **工具文件**：camelCase（如 `axios.ts`）
- **样式文件**：`index.module.scss` 或 `[name].module.scss`
- **事件处理函数**：以 `handle` 开头（如 `handleChange`、`handleClick`）
- **函数定义**：优先使用 `const` 常量（如 `const handleClick = () => {}`）
- **类型定义**：使用 TypeScript 类型，组件使用 `FC` 类型

#### 文件组织

- 使用路径别名 `@` 指向 `src` 目录
- 页面组件放在 `src/pages/[page-name]/` 目录
- 公共组件放在 `src/components/` 目录
- 工具函数放在 `src/utils/` 目录
- API 接口定义放在对应页面的 `api.ts` 文件中
- 路由配置统一在 `src/config/routers.tsx`

#### 代码注释

- 文件头部使用 koroFileHeader 注释模板
- 包含作者、日期、文件路径、描述等信息

### 架构模式

#### 组件化开发

- 使用函数组件和 Hooks
- 组件按功能模块划分，保持单一职责
- 使用 SCSS Modules 实现样式隔离

#### 路由管理

- 使用 React Router 7 的 `createBrowserRouter` 创建路由
- 页面组件使用 `lazy()` 实现代码分割和懒加载
- 统一使用 `ErrorBoundary` 处理路由错误

#### 请求封装

- 统一的 Axios 实例封装（`src/utils/request/axios.ts`）
- 支持可选的全局 Loading 状态
- 统一的响应拦截器处理错误和 token 认证
- 401 状态码自动跳转登录页
- 请求头自动添加 Authorization token

#### 状态管理

- 使用 React Hooks（useState、useEffect）进行本地状态管理
- 全局状态通过 Context 或组件提升实现

#### 样式实现

- 使用 SCSS Modules 避免样式冲突
- 移动端适配使用 postcss-pxtorem 自动转换 px 为 rem
- 根字体大小：16px（rootValue: 16）
- 排除 `.norem` 开头的类名不进行 rem 转换

#### 错误处理

- 使用 `ErrorBoundary` 组件捕获 React 组件错误
- 路由级别统一配置错误边界
- API 请求错误通过响应拦截器统一处理

### 测试策略

目前项目尚未配置测试框架。建议后续添加：

- **单元测试**：使用 Vitest 或 Jest 测试工具函数和组件逻辑
- **E2E 测试**：使用 Playwright 或 Cypress 测试关键用户流程
- **测试覆盖率**：目标覆盖率 > 80%

### Git 工作流程

#### 分支策略

- `main/master` - 主分支，用于生产环境
- `develop` - 开发分支
- `feature/*` - 功能分支
- `fix/*` - Bug 修复分支

#### 提交约定

- 使用清晰的提交信息
- 提交前运行 `pnpm lint` 和 `pnpm format:check` 确保代码质量

#### 忽略文件

- `node_modules/`、`dist/`、`*.log` 等构建产物和依赖
- 编辑器配置文件（`.vscode/*`、`.idea/` 等）

## 领域上下文

### 业务领域

这是一个**个人财务管理应用**，主要涉及以下业务概念：

#### 账单（Bill）

- **收入（Income）**：`pay_type = 2`，金额显示为正数（+）
- **支出（Expense）**：`pay_type = 1`，金额显示为负数（-）
- 每个账单包含：金额（amount）、类型（type_id、type_name）、日期（date）等信息

#### 账单类型（Type）

- 支持按类型筛选账单
- 类型包括收入和支出两大类，每类下有多个子类型

#### 时间维度

- 按月份（YYYY-MM 格式）查看账单
- 支持下拉选择不同月份
- 账单列表按日期分组显示

#### 统计信息

- **总支出**：当前筛选条件下所有支出账单的金额总和
- **总收入**：当前筛选条件下所有收入账单的金额总和
- 按日期分组显示每日的收支情况

### 页面结构

- **登录页**（`/login`）：用户登录
- **账单页**（`/bill`）：账单列表，支持类型和时间筛选
- **账单详情页**（`/billDetail/:id`）：查看单个账单详情
- **统计页**（`/statistics`）：数据统计分析
- **用户页**（`/user`）：个人中心
- **404 页**（`*`）：页面未找到

### 布局结构

- 使用 `TabLayout` 作为主布局，包含底部 TabBar
- TabBar 包含三个标签：账单、统计、我的

## 重要约束

### 技术约束

- **移动端优先**：主要面向移动端浏览器，需要适配不同屏幕尺寸
- **H5 应用**：使用 SPA（单页应用）架构
- **浏览器兼容性**：需要支持现代移动浏览器（iOS Safari、Chrome Mobile 等）

### 性能约束

- 使用路由懒加载减少首屏加载时间
- 图片资源使用 CDN（如 `//s.yezgea02.com`）
- 列表使用无限滚动（InfiniteScroll）和下拉刷新（PullToRefresh）优化性能

### 安全约束

- API 请求需要在请求头中携带 token（从 localStorage 获取）
- 401 未授权状态自动跳转登录页
- Token 存储在 localStorage 中

### 业务约束

- 日期格式统一使用 `YYYY-MM`（月份选择）和 `YYYY-MM-DD`（账单日期）
- 金额显示保留两位小数
- 分页查询默认每页数量需要与后端约定

## 外部依赖

### 后端 API

- **开发环境**：通过 Vite 代理 `/api` → `http://127.0.0.1:7001/`
- **生产环境**：`http://api.chennick.wang`
- **API 响应格式**：

```typescript
{
  code: number; // 200 表示成功，401 表示未授权
  message?: string; // 错误信息
  data?: any; // 响应数据
}
```

### 主要 API 端点

- `GET /bill/list` - 获取账单列表（支持 date、page、type_id 参数）
- `GET /type/list` - 获取账单类型列表
- 其他 API 端点根据业务需求扩展

### CDN 资源

- 图片资源：`//s.yezgea02.com`（账单类型图标等）

### 第三方服务

- 目前主要依赖后端 API，无其他第三方服务集成
