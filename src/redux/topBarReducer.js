import { SET_MENU_ITEM, SET_MENU_ON_ANIMATION } from "./actionTypes";

const initialState = {
  selectedItem: "home",
  onAnimation: false,
};

function topBarReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_ITEM:
      return {
        ...state,
        selectedItem: action.selectedItem,
      };
    case SET_MENU_ON_ANIMATION:
      return {
        ...state,
        onAnimation: action.onAnimation,
      };
    default:
      return state;
  }
}

export default topBarReducer;
