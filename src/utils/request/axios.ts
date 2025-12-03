/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-01 15:52:39
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-03 14:17:43
 * @FilePath: /tally_book_h5/src/utils/request/axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';
import GlobalLoading from '@/components/GlobalLoading';
import { Toast } from 'antd-mobile';

// 处理请求 loading
let loadingCount = 0;
let loadingTimer: number | null = null;

function loadingInterceptors(instance: AxiosInstance): void {
  // 打开 loading
  const openLoading = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    GlobalLoading.open();
    loadingCount++;
    if (loadingTimer) {
      clearTimeout(loadingTimer);
      loadingTimer = null;
    }
    return config;
  };
  // 关闭 loading
  const closeLoading = () => {
    loadingCount--;
    if (loadingCount < 0) {
      loadingCount = 0;
    }

    if (loadingCount === 0) {
      loadingTimer = window.setTimeout(() => {
        GlobalLoading.close();
      }, 100);
    }
  };
  instance.interceptors.request.use(openLoading);
  instance.interceptors.response.use(
    response => {
      closeLoading();
      return response;
    },
    e => {
      closeLoading();
      throw e;
    }
  );
}

function responseInterceptors(instance: AxiosInstance): void {
  instance.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
      Toast.show('服务端异常！');
      return Promise.reject(res);
    }
    if (res.data.code != 200) {
      if (res.data.message) Toast.show(res.data.message);
      if (res.data.code == 401) {
        window.location.href = '/login';
      }
      return Promise.reject(res.data);
    }

    return res.data;
  });
}

export default function createAxiosInstance(baseURL = '', isLoading = false): AxiosInstance {
  const instance = axios.create({
    baseURL,
    timeout: 60000,
  });

  // 添加请求头信息
  instance.interceptors.request.use(config => {
    config.headers = Object.assign({ Authorization: `${localStorage.getItem('token') || null}` }, config.headers);
    return config;
  });

  // loading 拦截器
  isLoading && loadingInterceptors(instance);

  // 响应拦截器
  responseInterceptors(instance);
  return instance;
}
