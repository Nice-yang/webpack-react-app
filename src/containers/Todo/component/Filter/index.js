import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { connect } from 'react-redux';
import * as action from '../../action';
import { ALL, status } from '../../config';
import './index.less';

const { Option } = Select;

function Filter(props) {
  const { filter, changeFilter } = props;

  return (
    <div>
      <Select value={filter || ALL} onChange={changeFilter}>
        {status.map(item => <Option key={item.key}>{item.text}</Option>)}
      </Select>
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

const mapState = state => {
  const { todoData = {} } = state;
  const { filter = ALL } = todoData;
  return { filter };
}

const mapDispatch = {
  changeFilter: action.changeFilter,
}

export default connect(mapState, mapDispatch)(Filter);