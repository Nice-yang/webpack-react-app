import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import * as Actions from '../../Action.js';
import './index.less';

function Counter(props) {
  const { data, incrementBtn, decrementBtn } = props;
  return Object.keys(data).map(item => (
    <div key={item} className="btn-item">
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => incrementBtn(item)}
      />
      <Button
        icon={<MinusOutlined />}
        onClick={() => decrementBtn(item)}
        disabled={!Boolean(data[item])}
      />
      <span>{item} count: {data[item]}</span>
    </div>
  ));
}

Counter.propTypes = {
  data: PropTypes.object.isRequired,
  incrementBtn: PropTypes.func.isRequired,
  decrementBtn: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.demoData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementBtn: type => dispatch(Actions.increment(type)),
    decrementBtn: type => dispatch(Actions.decrement(type)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
