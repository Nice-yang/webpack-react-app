import { combineReducers } from 'redux';
import demoData from "./containers/Demo/reducer";
import testData from "./containers/Test/reducer";
import todoData from "./containers/Todo/reducer";

export default combineReducers({
  demoData,
  testData,
  todoData,
})