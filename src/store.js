import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const middlewares = [thunk];

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  composeWithDevTools(),
);

const initValues = {
  demoData: {
    First: 0,
    Second: 10,
    Third: 20,
  },
};

const store = createStore(reducer, initValues, storeEnhancers);

export default store;