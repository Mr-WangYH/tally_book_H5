/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-03 17:02:00
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-08 17:24:43
 * @FilePath: /tally_book_h5/src/pages/bill/index.tsx
 * @Description: 账单列表页面（内容占位）
 */
import React, { type FC } from 'react';
import styles from './index.module.scss';
import { DownOutline } from 'antd-mobile-icons';

const BillPage: FC = () => {
  return (
    <div className={styles['page-bill']}>
      <div className={styles.head}>
        <div className={styles['data-wrap']}>
          <span className={styles.expense}>
            总支出：<b>¥ 100</b>
          </span>
          <span className={styles.income}>
            总收入：<b>¥ 200</b>
          </span>
        </div>
        <div className={styles['type-wrap']}>
          <div className={styles.left}>
            <span className={styles.title}>
              {'全部类型'} <DownOutline className={styles.arrow} />
            </span>
          </div>
          <div className={styles.right}>
            <span className={styles.time}>
              {'2025-12'}
              <DownOutline className={styles.arrow} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BillPage;
