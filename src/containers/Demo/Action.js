import { INCREMENT, DECREMENT } from './ActionTypes.js';
import { getInitData } from '../../server/homepageapi';

export const initData = (data) => {
  return {
    type: 'init',
    data,
  };
};

export const increment = (data) => {
  return {
    type: INCREMENT,
    data,
  };
};

export const decrement = (data) => {
  return {
    type: DECREMENT,
    data,
  };
};