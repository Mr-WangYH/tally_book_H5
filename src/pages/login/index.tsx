/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-04 10:11:43
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-08 16:40:29
 * @FilePath: /tally_book_h5/src/pages/login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { type FC, useState } from 'react';
import { Form, Input, Button, Tabs, Checkbox, Toast, Dialog } from 'antd-mobile';
import Captcha from 'react-captcha-code';

import styles from './index.module.scss';
import { loginApi, registerApi } from './api';

// 登陆页面
const LoginPage: FC = () => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [captcha, setCaptcha] = useState('');

  const handleCaptchaChange = (value: string) => {
    setCaptcha(value);
  };
  const onSubmit = async () => {
    const values = await form.validateFields();
    const { userName, password, confirmPassword, code } = values;
    if (!userName.trim()) {
      Toast.show('账号不能为空');
      return;
    }
    if (activeTab === 'register' && confirmPassword.trim() !== password.trim()) {
      Toast.show('密码不一致');
      return;
    }
    if (code !== captcha) {
      Toast.show('验证码错误');
      return;
    }
    const params = {
      userName: userName.trim(),
      password: password.trim(),
    };
    const request = activeTab === 'login' ? loginApi : registerApi;
    try {
      const res = await request(params);
      if (activeTab === 'login') {
        Toast.show('登录成功');
        localStorage.setItem('token', res.data?.token || '');
        window.location.href = '/';
      } else {
        const result = await Dialog.confirm({
          content: '注册成功，是否立即登陆',
        });
        result && setActiveTab('login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles['page-login']}>
      <div className={styles.head} />
      <div className={styles.tabs}>
        <span className={activeTab === 'login' ? styles.active : ''} onClick={() => setActiveTab('login')}>
          登陆
        </span>
        <span className={activeTab === 'register' ? styles.active : ''} onClick={() => setActiveTab('register')}>
          注册
        </span>
      </div>
      <Form
        layout='horizontal'
        form={form}
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            {activeTab === 'login' ? '登陆' : '注册'}
          </Button>
        }>
        <Form.Item
          name='userName'
          label='账号'
          rules={[
            { required: true, message: '账号不能为空' },
            { min: 3, max: 12, message: '账号必须为3-12位' },
          ]}>
          <Input placeholder='请输入账号' />
        </Form.Item>
        <Form.Item
          name='password'
          label='密码'
          rules={[
            { required: true, message: '密码不能为空' },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{6,12}$/,
              message: '密码必须包含大小写字母、数字和特殊字符(@$!%*?&_)且长度为6-12位',
            },
          ]}>
          <Input placeholder='请输入密码' type='password' />
        </Form.Item>
        {activeTab === 'register' && (
          <Form.Item
            name='confirmPassword'
            label='确认密码'
            rules={[
              { required: true, message: '确认密码不能为空' },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{6,12}$/,
                message: '密码必须包含大小写字母、数字和特殊字符(@$!%*?&_)且长度为6-12位',
              },
            ]}>
            <Input placeholder='请再次输入密码' type='password' />
          </Form.Item>
        )}
        <div className='flex-center pr-12'>
          <Form.Item name='code' label='验证码' rules={[{ required: true, message: '验证码不能为空' }]}>
            <Input placeholder='验证码' />
          </Form.Item>
          <Captcha charNum={4} onChange={handleCaptchaChange} />
        </div>

        <Form.Item name='agreement' valuePropName='checked' rules={[{ required: true, message: '请同意用户协议' }]}>
          <Checkbox>同意《用户协议》</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
