import initialState from "../theming/themeConfig";

export const actionTypes = {
  CHANGE_DIRECTION: "CHANGE_DIRECTION",
  CHANGE_PRIMARY: "CHANGE_PRIMARY"
};

export const changeDirection = () => dispatch => {
  return dispatch({type: actionTypes.CHANGE_DIRECTION});
};

export const changePrimary = () => dispatch => {
  return dispatch({type: actionTypes.CHANGE_PRIMARY});
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DIRECTION:
      return Object.assign({}, state, {
        direction: state.direction === "ltr" ? "rtl" : "ltr"
      });
    case actionTypes.CHANGE_PRIMARY:
      return Object.assign({}, state, {
        paletteType: "dark"
      });
    default:
      return state;
  }
};