/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-01 15:52:39
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-03 14:39:32
 * @FilePath: /tally_book_h5/src/utils/request/axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import createAxiosInstance from './axios';

const MODE = import.meta.env.MODE;

const BASE_API_URL = MODE === 'development' ? '/api' : 'http://api.chennick.wang';

export const request = createAxiosInstance(BASE_API_URL, true);
export const requestNotLoading = createAxiosInstance(BASE_API_URL);
