/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-09 15:20:47
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-23 17:22:46
 * @FilePath: /tally_book_h5/src/pages/bill/api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from '@/utils/request';

export interface GetBillListApiParams {
  date: string;
  page: number;
  page_size?: number;
  type_id?: string;
}
export const getBillListApi = (params: GetBillListApiParams) => request.get('/bill/list', { params });

export const getTypeListApi = () => request.get('/type/list');
