import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import store from './store';
import 'antd/dist/antd.css';

ReactDom.render(
  <Provider {...{ store }}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)