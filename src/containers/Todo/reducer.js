import moment from 'moment';
import { COMPLETED, UNCOMPLETED } from './config';
import { INIT, ADD, TOGGLE_STATUS, DELETE } from './actionTypes';

export default (state = {}, action) => {
  const { list = [] } = state;
  const { type, data } = action;
  switch (type) {
    case INIT:
      return { ...state, list: data };
    case ADD:
      return { ...state, list: [{ ...data, id: moment().valueOf(), status: UNCOMPLETED }, ...list] };
    case 'filter':
      return { filter: data, list };
    case TOGGLE_STATUS: {
      const newList = [...list];
      const item = newList.find(i => i.id === data);
      item.status = item.status === COMPLETED ? UNCOMPLETED : COMPLETED;
      return { ...state, list: newList };
    }
    case DELETE:
      return { ...state, list: list.filter(i => i.id !== data) };
    default:
      return state;
  }
}