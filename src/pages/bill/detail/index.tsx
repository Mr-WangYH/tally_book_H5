/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-03 17:03:00
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-03 17:08:54
 * @FilePath: /tally_book_h5/src/pages/billDetail/index.tsx
 * @Description: 账单详情页面（内容占位）
 */
import React, { type FC } from 'react';
import { useParams } from 'react-router';

const BillDetailPage: FC = () => {
  const { id } = useParams();

  return (
    <div>
      <div>账单详情页面</div>
      {id && <div>当前账单 ID：{id}</div>}
    </div>
  );
};

export default BillDetailPage;
