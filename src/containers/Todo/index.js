import React from 'react';
import Submit from './component/Submit';
import Filter from './component/Filter';
import Table from './component/Table';
import './index.less';

export default () => (
  <div className="todo-list">
    <div className="btn">
      <Submit />
      <Filter />
    </div>
    <Table />
  </div>
)