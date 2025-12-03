/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-11-27 16:10:34
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-03 14:25:02
 * @FilePath: /tally_book_h5/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createBrowserRouter, RouterProvider } from 'react-router';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import { ConfigProvider } from 'antd-mobile';
import Home from './pages/home';
import User from './pages/user';
function App() {
  console.log(import.meta.env.MODE);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/user',
      element: <User />,
    },
  ]);

  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
