/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-02 16:17:49
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-03 14:25:13
 * @FilePath: /tally_book_h5/src/components/GlobalLoading/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { DotLoading, type DotLoadingProps } from 'antd-mobile';

import './index.scss';

function isHidden(el: HTMLElement): boolean {
  const style = window.getComputedStyle(el);
  return style.display === 'none';
}

export const Loading: React.FC<DotLoadingProps> = props => (
  <div className='global-loading'>
    <DotLoading {...props} />
  </div>
);

let dom: HTMLElement | null;
const GlobalLoading = {
  open(props: DotLoadingProps = {}): void {
    if (!dom) {
      dom = document.createElement('div');
      createRoot(dom).render(<Loading {...props} />);
      document.body.appendChild(dom);
    }
    if (isHidden(dom)) {
      dom.style.display = '';
    }
  },
  close(): void {
    dom!.style.display = 'none';
  },
  remove(): void {
    createRoot(dom!).unmount();
    document.body.removeChild(dom!);
    dom = null;
  },
};

export default GlobalLoading;
