import { INIT, ADD, TOGGLE_STATUS, DELETE } from './actionTypes';
import { getTodoList } from '../../server/todoApi';

export const getListData = () => dispatch => {
  getTodoList().then((res) => {
    dispatch({
      type: INIT,
      data: res,
    })
  })
}

export const addItem = (data) => ({
  type: ADD,
  data,
})

export const toggleStatus = id => ({
  type: TOGGLE_STATUS,
  data: id,
})

export const deleteItem = id => ({
  type: DELETE,
  data: id,
})

export const changeFilter = data => ({
  type: 'filter',
  data,
})
