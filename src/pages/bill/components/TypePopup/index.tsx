/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-23 16:06:09
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-23 17:51:38
 * @FilePath: /tally_book_h5/src/pages/bill/components/TypePopup/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState, type FC } from 'react';
import { Popup } from 'antd-mobile';
import s from './index.module.scss';
import classnames from 'classnames';
import { getTypeListApi } from '../../api';

interface IType {
  id: number | string;
  name: string;
  type?: number;
  user_id?: number;
}

interface ITypePopupProps {
  visible: boolean;
  active: number | string;
  onClose: () => void;
  onChoose: (item: IType) => void;
}

// 类型弹出层
const TypePopup: FC<ITypePopupProps> = ({ visible, active, onClose, onChoose }) => {
  const [expense, setExpense] = useState<IType[]>([]);
  const [income, setIncome] = useState<IType[]>([]);

  useEffect(() => {
    if (visible) {
      (async () => {
        // 请求标签接口放在弹窗内，这个弹窗可能会被复用，所以请求如果放在外面，会造成代码冗余。
        const {
          data: { list },
        } = await getTypeListApi();
        setExpense(list.filter((i: IType) => i.type == 1));
        setIncome(list.filter((i: IType) => i.type == 2));
      })();
    }
  }, [visible]);

  const choseType = (item: IType) => {
    onChoose(item);
    onClose();
  };

  return (
    <Popup visible={visible} onMaskClick={onClose} onClose={onClose}>
      <div className={s['popup-type']}>
        <div className={s.header}>请选择类型</div>
        <div className={s.content}>
          <div
            onClick={() => choseType({ id: 'all', name: '全部类型' })}
            className={classnames(s.all, { [s.active]: active == 'all' })}>
            全部类型
          </div>
          <div className={s.title}>支出</div>
          <div className={s['expense-wrap']}>
            {expense.map((item, index) => (
              <p key={index} onClick={() => choseType(item)} className={classnames({ [s.active]: active == item.id })}>
                {item.name}
              </p>
            ))}
          </div>
          <div className={s.title}>收入</div>
          <div className={s['income-wrap']}>
            {income.map((item, index) => (
              <p key={index} onClick={() => choseType(item)} className={classnames({ [s.active]: active == item.id })}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default TypePopup;
