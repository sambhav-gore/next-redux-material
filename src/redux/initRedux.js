/* eslint-disable no-underscore-dangle */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import themeReducer from './themeReducer';
import countReducer from './countReducer';
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import composeWithDevTools from "redux-devtools-extension";

let devtools = x => x;

if (
  process.env.NODE_ENV !== 'production' &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

function create(initialState) {
  let middlewares = [logger, thunkMiddleware];

  if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    !window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    // eslint-disable-next-line global-require
    const createLogger = require('redux-logger').createLogger;

    middlewares = [...middlewares, createLogger()];
  }

  return createStore(
    combineReducers({
      count: countReducer,
      theme: themeReducer
    }),
    initialState, // Hydrate the store with server-side data
    compose(applyMiddleware(...middlewares))
  );
}

export default function initRedux(initialState) {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse store on the client-side
  if (!global.__INIT_REDUX_STORE__) {
    global.__INIT_REDUX_STORE__ = create(initialState);
  }

  return global.__INIT_REDUX_STORE__;
}