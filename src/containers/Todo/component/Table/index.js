import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { connect } from 'react-redux';
import * as action from '../../action';
import { ALL } from '../../config';
import { columns } from './config';
import './index.less';

function RenderTable(props) {
  const { data, getListData, toggleStatus, deleteItem } = props;
  const { filter = ALL, list = [] } = data;

  useEffect(getListData, [])

  return (
    <div className="todo-table">
      <Table
        rowKey="id"
        columns={columns(toggleStatus, deleteItem)}
        dataSource={filter === ALL ? list : list.filter(i => i.status === filter)}
      />
    </div>
  )
}

RenderTable.propTypes = {
  data: PropTypes.object.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

const mapState = state => ({
  data: state.todoData || {},
})

const mapDispatch = {
  getListData: action.getListData,
  toggleStatus: action.toggleStatus,
  deleteItem: action.deleteItem,
}

export default connect(mapState, mapDispatch)(RenderTable);
