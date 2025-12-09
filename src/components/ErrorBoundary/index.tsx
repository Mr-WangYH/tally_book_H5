/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2022-09-05 15:40:23
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-03 17:42:14
 * @FilePath: /tally_book_h5/src/components/ErrorBoundary/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { ErrorBlock } from 'antd-mobile';

// 用于捕获渲染时错误的组件

const ErrorBoundary: React.FC = () => {
  return (
    <div className='flex-center w-100v h-100v'>
      <ErrorBlock status='default' />
    </div>
  );
};

export default ErrorBoundary;
