import initialState from "../theming/themeConfig";

export const actionTypes = {
  TOGGLE_DIRECTION: "TOGGLE_DIRECTION",
  TOGGLE_TYPE: "TOGGLE_TYPE"
};

export const toggleDirection = () => dispatch => {
  return dispatch({type: actionTypes.TOGGLE_DIRECTION});
};

export const toggleType = () => dispatch => {
  return dispatch({type: actionTypes.TOGGLE_TYPE});
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DIRECTION:
      return Object.assign({}, state, {
        direction: state.direction === "ltr" ? "rtl" : "ltr"
      });
    case actionTypes.TOGGLE_TYPE:
      let newState = Object.assign({}, state);
      newState.palette.type = newState.palette.type === "light" ? "dark" : "light";
      return newState;
    default:
      return state;
  }
};