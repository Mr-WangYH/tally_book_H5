/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-03 17:00:00
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-04 11:04:32
 * @FilePath: /tally_book_h5/src/layouts/TabLayout.tsx
 * @Description: 底部 TabBar 主布局
 */
import React, { type FC, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { TabBar } from 'antd-mobile';
import { BillOutline, PieOutline, UserOutline } from 'antd-mobile-icons';
import styles from './TabLayout.module.scss';

type TabKey = 'bill' | 'statistics' | 'user';

interface TabItem {
  key: TabKey;
  title: string;
  path: string;
  icon: React.ReactNode;
}

const tabItems: TabItem[] = [
  {
    key: 'bill',
    title: '账单',
    path: '/bill',
    icon: <BillOutline />,
  },
  {
    key: 'statistics',
    title: '统计',
    path: '/statistics',
    icon: <PieOutline />,
  },
  {
    key: 'user',
    title: '我的',
    path: '/user',
    icon: <UserOutline />,
  },
];

const TabLayout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activeKey: TabKey = useMemo(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case '/statistics':
        return 'statistics';
      case '/user':
        return 'user';
      case '/bill':
        return 'bill';
    }
  }, [location.pathname]) as TabKey;

  const handleChange = (key: string) => {
    const target = tabItems.find(item => item.key === key);
    if (!target) {
      return;
    }
    if (location.pathname === target.path) {
      return;
    }
    navigate(target.path);
  };

  return (
    <div className={styles['tab-layout']}>
      <div className={styles['tab-layout-body']}>
        <Outlet />
      </div>
      <div className={styles['tab-layout-tabbar']}>
        <TabBar activeKey={activeKey} onChange={handleChange}>
          {tabItems.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default TabLayout;
