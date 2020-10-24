import React, { useContext } from 'react';
import { TestContext } from '../../context';

export default () => {
  const data = useContext(TestContext);

  return (
    <div>
      <div>{data}</div>
    </div>
  )
}
