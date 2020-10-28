import { INITDEMO, INCREMENT, DECREMENT } from './ActionTypes.js';
import { getInitData } from '../../server/homepageapi';

export const initData = () => dispatch => {
  getInitData().then((res) => {
    dispatch({
      type: INITDEMO,
      data: res,
    })
  })
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