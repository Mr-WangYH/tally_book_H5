/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-03 16:19:49
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-04 10:13:38
 * @FilePath: /tally_book_h5/src/config/routers.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { lazy } from 'react';
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router';
import ErrorBoundary from '@/components/ErrorBoundary';

const TabLayout = lazy(() => import('@/layouts/TabLayout'));
const BillPage = lazy(() => import('@/pages/bill'));
const BillDetailPage = lazy(() => import('@/pages/bill/detail'));
const StatisticsPage = lazy(() => import('@/pages/statistics'));
const UserPage = lazy(() => import('@/pages/user'));
const NotFoundPage = lazy(() => import('@/pages/404'));
const LoginPage = lazy(() => import('@/pages/login'));

const routers: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/',
    element: <TabLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to='/bill' replace />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'bill',
        element: <BillPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'statistics',
        element: <StatisticsPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'user',
        element: <UserPage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path: '/billDetail/:id',
    element: <BillDetailPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routers);

export default router;
