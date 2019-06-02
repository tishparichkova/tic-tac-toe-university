import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { gameReducer } from './reducers/gameReducer';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const store = createStore(
  gameReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);

export default store;