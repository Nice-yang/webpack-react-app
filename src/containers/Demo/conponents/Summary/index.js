import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Summary(props) {
  const { data } = props;
  return (
    <div>
      <hr />
      Total:
      {Object.values(data).reduce((x, y) => x + y, 0)}
    </div>
  )
}

Summary.propTypes = {
  data: PropTypes.object.isRequired,
}

function mapState(state) {
  return {
    data: state.demoData,
  }
}

export default connect(mapState)(Summary);
