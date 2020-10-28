import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const middlewares = [thunk];

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  composeWithDevTools(),
);

const initValues = {};

const store = createStore(reducer, initValues, storeEnhancers);

export default store;