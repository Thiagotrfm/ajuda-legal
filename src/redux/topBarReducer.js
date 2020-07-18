import { SET_MENU_ITEM } from "./actionTypes";

const initialState = {
  selectedItem: "home",
};

function topBarReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU_ITEM:
      return {
        ...state,
        selectedItem: action.selectedItem,
      };
    default:
      return state;
  }
}

export default topBarReducer;
