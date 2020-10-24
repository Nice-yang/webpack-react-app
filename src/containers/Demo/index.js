import React, { Component } from 'react';
import Counter from './conponents/Counter';
import Summary from './conponents/Summary';

export default class CounterPanel extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Summary />
      </div>
    );
  }
}
