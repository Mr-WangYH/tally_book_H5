/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-23 18:00:00
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2026-01-13 14:26:23
 * @FilePath: /tally_book_h5/src/pages/bill/components/DatePopup/index.tsx
 * @Description: 日期选择弹窗组件
 */
import React, { type FC } from 'react';
import { DatePicker } from 'antd-mobile';
import dayjs from 'dayjs';

interface IDatePopupProps {
  visible: boolean;
  value: string; // YYYY-MM 格式
  onClose: () => void;
  onConfirm: (date: string) => void; // 返回 YYYY-MM 格式
}

// 日期选择弹窗
const DatePopup: FC<IDatePopupProps> = ({ visible, value, onClose, onConfirm }) => {
  const handleConfirm = (val: Date | null) => {
    if (val) {
      const formattedDate = dayjs(val).format('YYYY-MM');
      onConfirm(formattedDate);
    }
    onClose();
  };

  // 将 YYYY-MM 格式转换为 Date 对象
  const dateValue = value ? dayjs(value, 'YYYY-MM').toDate() : new Date();

  return (
    <DatePicker visible={visible} value={dateValue} onClose={onClose} onConfirm={handleConfirm} precision='month' />
  );
};

export default DatePopup;
