import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import View from './component/View';
import { TestContext } from './context';
import * as actions from './action';

function TestPage(props) {
  const { data, clickCallback } = props;

  return (
    <TestContext.Provider value={data}>
      <View />
      <Button onClick={clickCallback}>加一</Button>
    </TestContext.Provider>
  )
}

TestPage.propTypes = {
  data: PropTypes.number.isRequired,
  clickCallback: PropTypes.func.isRequired,
}

function mapState(state) {
  const { data = 1 } = state.testData;
  return { data };
}

function mapDispatch(dispatch) {
  return {
    clickCallback: () => dispatch(actions.btnCb()),
  }
}

export default connect(mapState, mapDispatch)(TestPage)
