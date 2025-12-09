/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-03 17:25:55
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-03 17:42:19
 * @FilePath: /tally_book_h5/src/pages/404/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { type FC } from 'react';
import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router';

const Index: FC = () => {
  const navigate = useNavigate();
  return (
    <div className='flex-column-center w-100v h-100v'>
      <div style={{ fontSize: '48px', fontWeight: 'bold' }}>404</div>
      <div style={{ margin: '12px 0' }}>页面不存在</div>
      <Button type='submit' onClick={() => navigate('/')}>
        返回首页
      </Button>
    </div>
  );
};

export default Index;
