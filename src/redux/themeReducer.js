const initialState = {
  paletteType: 'light',
  direction: 'ltr',
};

export const actionTypes = {
  CHANGE_DIRECTION: "CHANGE_DIRECTION"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DIRECTION:
      return Object.assign({}, state, {
        direction: state.direction === "ltr" ? "rtl" : "ltr"
      });
    default:
      return state;
  }
};