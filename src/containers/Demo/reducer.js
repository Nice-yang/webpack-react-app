import { INITDEMO, DECREMENT, INCREMENT } from "./ActionTypes";

export default (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case INITDEMO:
      return { ...state, ...data };
    case INCREMENT:
      return { ...state, [data]: state[data] + 1 };
    case DECREMENT:
      return { ...state, [data]: state[data] - 1 };
    default:
      return state;
  }
}