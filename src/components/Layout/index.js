import React from 'react';
import { Layout } from 'antd';
import App from '../../containers/App';
import Menu from './component/Menu';
import './index.less';

const { Header, Footer, Sider, Content } = Layout;

export default () => (
  <Layout>
    <Header>
      <div className="logo">
        <img src="https://github.com/china-ye/OSS/blob/master/logo_small.png?raw=true" alt="" />
        React App
      </div>
      <div className="navigation">导航（NAVIGATION）</div>
    </Header>
    <Layout>
      <Sider>
        <Menu />
      </Sider>
      <Content>
        <div className="ant-layout-content-wrap">
          <App />
        </div>
        <Footer>copy right2020</Footer>
      </Content>
    </Layout>
  </Layout>
)