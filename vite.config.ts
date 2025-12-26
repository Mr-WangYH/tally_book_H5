/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-11-27 16:10:34
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-23 14:39:05
 * @FilePath: /tally_book_h5/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
      },
    },
  },
});
