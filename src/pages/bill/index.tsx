/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-03 17:02:00
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-23 17:42:26
 * @FilePath: /tally_book_h5/src/pages/bill/index.tsx
 * @Description: 账单列表页面（内容占位）
 */
import React, { type FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { DownOutline } from 'antd-mobile-icons';
import { InfiniteScroll, PullToRefresh } from 'antd-mobile';
import dayjs from 'dayjs';
import { getBillListApi, type GetBillListApiParams } from './api';
import TypePopup from './components/TypePopup';

const BillPage: FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [totalExpense, setTotalExpense] = useState(0); // 总支出
  const [totalIncome, setTotalIncome] = useState(0); // 总收入
  const [params, setParams] = useState<GetBillListApiParams & { type_name: string }>({
    date: dayjs().format('YYYY-MM'),
    page: 1,
    type_id: 'all',
    type_name: '全部类型',
  });
  const [totalPage, setTotalPage] = useState(0); // 分页总数
  const [typeVisible, setTypeVisible] = useState(false);

  useEffect(() => {
    console.log(2423);
    getBillList();
  }, [params]);

  const getBillList = async () => {
    const res = await getBillListApi({ date: params.date, page: params.page, type_id: params.type_id });
    const newList = res.data?.list?.map((bill: any) => {
      const _income = bill.bills
        .filter((i: any) => i.pay_type == 2)
        .reduce((curr: number, item: any) => {
          curr += Number(item.amount);
          return curr;
        }, 0);
      const _expense = bill.bills
        .filter((i: any) => i.pay_type == 1)
        .reduce((curr: number, item: any) => {
          curr += Number(item.amount);
          return curr;
        }, 0);
      return {
        ...bill,
        _income,
        _expense,
      };
    });
    setList(newList);
    setTotalExpense(res.data.totalExpense);
    setTotalIncome(res.data.totalIncome);
    setTotalPage(res.data.totalPage);
  };

  const hanldeChooseType = item => {
    setParams({ ...params, type_id: item.id, type_name: item.name });
  };

  return (
    <div className={styles['page-bill']}>
      <div className={styles.head}>
        <div className={styles['data-wrap']}>
          <span className={styles.expense}>
            总支出：<b>¥ {totalExpense}</b>
          </span>
          <span className={styles.income}>
            总收入：<b>¥ {totalIncome}</b>
          </span>
        </div>
        <div className={styles['type-wrap']}>
          <div className={styles.left}>
            <span className={styles.title} onClick={() => setTypeVisible(true)}>
              {params.type_name || '全部类型'} <DownOutline className={styles.arrow} />
            </span>
          </div>
          <div className={styles.right}>
            <span className={styles.time}>
              {params.date}
              <DownOutline className={styles.arrow} />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <PullToRefresh
          onRefresh={async () => {
            setParams({ ...params, page: 1 });
          }}>
          {list.map(item => (
            <div className={styles.item} key={item.date}>
              <div className={styles['item-top']}>
                <div className={styles['item-top-time']}>{item.date}</div>
                <div className={styles['item-top-money']}>
                  <div className='mr-12'>
                    <img src='//s.yezgea02.com/1615953405599/zhi%402x.png' alt='支' />
                    <span>¥ {item._expense.toFixed(2)}</span>
                  </div>
                  <div>
                    <img src='//s.yezgea02.com/1615953405599/shou%402x.png' alt='收' />
                    <span>¥ {item._income.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              {item &&
                item.bills
                  .sort((a: any, b: any) => b.date - a.date)
                  .map((bill: any) => (
                    <div className={styles['item-detail']} key={bill.id}>
                      <div className={styles['item-detail-info']}>
                        <div>{bill.type_name}</div>
                        <div
                          style={{
                            color: item.pay_type == 2 ? 'red' : '#39be77',
                          }}>{`${bill.pay_type == 1 ? '-' : '+'}${bill.amount}`}</div>
                      </div>
                      <div className={styles['item-detail-time']}>{dayjs(bill.date).format('HH:mm')}</div>
                    </div>
                  ))}
            </div>
          ))}
        </PullToRefresh>
        <InfiniteScroll
          loadMore={async () => setParams({ ...params, page: params.page + 1 })}
          hasMore={!!totalPage && totalPage > params.page}
        />
        {typeVisible && (
          <TypePopup
            visible={typeVisible}
            active={params.type_id as string | number}
            onClose={() => setTypeVisible(false)}
            onChoose={hanldeChooseType}
          />
        )}
      </div>
    </div>
  );
};
export default BillPage;
