import { SET_MENU_ITEM } from "./actionTypes";

export const setMenuItem = (selectedItem) => ({
  type: SET_MENU_ITEM,
  payload: {
    id: SET_MENU_ITEM,
    selectedItem,
  },
});
