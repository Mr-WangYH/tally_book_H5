/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-08 16:11:04
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-19 17:11:50
 * @FilePath: /tally_book_h5/src/pages/login/api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from '@/utils/request';

// 登陆
export const loginApi = (params: { userName: string; password: string }) => request.post('/user/login', params);

// 注册
export const registerApi = (params: { userName: string; password: string }) => request.post('/user/register', params);
