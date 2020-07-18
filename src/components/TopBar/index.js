import React, { useState, useEffect } from "react";
import $ from "jquery";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import LOCALES from "../../locales/topbar";
import { SET_MENU_ITEM } from "../../redux/actionTypes";

import "./styles.less";

const { componentName } = CONSTANTS;
const { menuItems } = LOCALES;
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

function TopBar() {
  const [topBarStyle, setTopbarStyle] = useState({ opacity: 0 });
  const selectedMenuItem = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();

  const updateScrollPosition = () => {
    const style = {
      opacity: window.scrollY / window.innerHeight,
    };

    setTopbarStyle(style);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  });

  const items = () => {
    const onItemClick = (menuItem) => {
      const element = $(`#${menuItem?.id}`);
      const newSelectedItem = {
        type: SET_MENU_ITEM,
        selectedItem: menuItem?.id,
      };
      dispatch(newSelectedItem);
      if (element[0]) {
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: element.offset().top - 100,
          },
          1000
        );
      }
    };

    let items = menuItems.map((item, index) => {
      const isSelected = selectedMenuItem === item.id;
      return (
        <div
          className={
            componentName + "-menu-item" + (isSelected ? " selected" : "")
          }
          key={index}
          onClick={() => {
            onItemClick(item);
          }}
        >
          <div> {item?.title ?? ""} </div>
          {isSelected && (
            <motion.div
              layoutId="dot"
              initial={false}
              className={componentName + "-dot"}
              transition={spring}
            />
          )}
        </div>
      );
    });

    return items;
  };

  return (
    <div className={componentName}>
      <div className={componentName + "-background"} style={topBarStyle} />
      <img alt="logo" className={componentName + "-logo"} src={IMAGES.logo} />
      <AnimateSharedLayout>
        <div className={componentName + "-menu"}>{items()}</div>
      </AnimateSharedLayout>
    </div>
  );
}

export default TopBar;
