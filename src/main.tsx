/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-11-27 16:10:34
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-09 15:59:03
 * @FilePath: /tally_book_h5/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@/assets/styles/index.scss';

createRoot(document.getElementById('root')!).render(<App />);
