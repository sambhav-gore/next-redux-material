const initialState = {
  count: 11
};

export const actionTypes = {
  ADD: "ADD"
};

export const addCount = () => dispatch => {
  return dispatch({type: actionTypes.ADD});
};

//REDUCERS
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      console.log("STATE IN REDUCER", state);
      return Object.assign({}, {
        count: state.count + 1
      });
    default:
      return state;
  }
};