import { SET_MENU_ITEM, SET_MENU_ON_ANIMATION } from "./actionTypes";

export const setMenuItem = (selectedItem) => ({
  type: SET_MENU_ITEM,
  payload: {
    id: SET_MENU_ITEM,
    selectedItem,
  },
});

export const setMenuOnAnimation = (onAnimation) => ({
  type: SET_MENU_ON_ANIMATION,
  payload: {
    id: SET_MENU_ON_ANIMATION,
    onAnimation,
  },
});
