import React from 'react';
import { Button } from 'antd';
import { status } from '../../config';

export const columns = (toggleStatus, deleteItem) => [
  {
    title: 'ID',
    width: '10%',
    dataIndex: 'id',
  },
  {
    title: '事项',
    width: '60%',
    dataIndex: 'name',
    render: text => text || '新事项',
  },
  {
    title: '状态',
    width: '10%',
    dataIndex: 'status',
    render: text => status.find(i => i.key === text).text,
  },
  {
    title: '操作',
    width: '20%',
    dataIndex: 'key',
    render: (text, record) => {
      const { id } = record;
      return (
        <div>
          <Button type="link" onClick={() => toggleStatus(id)}>切换状态</Button>
          <Button type="link" onClick={() => deleteItem(id)}>删除</Button>
        </div>
      )
    }
  }
];