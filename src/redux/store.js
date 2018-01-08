import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

const exampleInitialState = {
  count: 42
}

export const actionTypes = {
  ADD: "ADD"
};

//REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};

//ACTIONS
export const addCount = () => dispatch => {
  return dispatch({type: actionTypes.ADD});
};

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(logger, thunkMiddleware)));
};