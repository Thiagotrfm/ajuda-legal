import React, { useState, useEffect } from "react";
import $ from "jquery";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import LOCALES from "../../locales/topbar";
import { SET_MENU_ITEM, SET_MENU_ON_ANIMATION } from "../../redux/actionTypes";

import "./styles.less";

const { componentName } = CONSTANTS;
const { mapIdToTitle, menuItems } = LOCALES;
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

function TopBar() {
  const [topBarStyle, setTopbarStyle] = useState({ opacity: 0 });
  const [isTouchable, setIsTouchable] = useState(window.innerWidth < 768);
  const selectedMenuItem = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();

  const onResize = () => {
    setIsTouchable(window.innerWidth < 768);
  };

  const updateScrollPosition = () => {
    const style = {
      opacity: window.scrollY / window.innerHeight,
    };

    setTopbarStyle(style);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("scroll", onResize);
    };
  });

  const onItemClick = (menuItem) => {
    const element = $(`#${menuItem?.id}`);
    const newSelectedItem = {
      type: SET_MENU_ITEM,
      selectedItem: menuItem?.id,
    };
    const onAnimationTrue = {
      type: SET_MENU_ON_ANIMATION,
      onAnimation: true,
    };
    const onAnimationFalse = {
      type: SET_MENU_ON_ANIMATION,
      onAnimation: false,
    };
    dispatch(newSelectedItem);
    dispatch(onAnimationTrue);
    if (element[0]) {
      setTimeout(() => {
        dispatch(onAnimationFalse);
      }, 1100);
      setTimeout(() => {
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: element.offset().top - 70,
          },
          1000
        );
      }, 100);
    }
  };

  const items = () => {
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
      {isTouchable ? (
        <div className={componentName + "-title"}>
          {" "}
          {mapIdToTitle[selectedMenuItem]}{" "}
        </div>
      ) : (
        <AnimateSharedLayout>
          <div className={componentName + "-menu"}>{items()}</div>
        </AnimateSharedLayout>
      )}
    </div>
  );
}

export default TopBar;
