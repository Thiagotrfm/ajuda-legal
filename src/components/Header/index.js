import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import LOCALES from "../../locales/header";
import { SET_MENU_ITEM } from "../../redux/actionTypes";

import "./styles.less";

const { componentName } = CONSTANTS;

function Header() {
  const ref = useRef();
  const dispatch = useDispatch();
  const onAnimation = useSelector((state) => state.onAnimation);
  const [imageStyle, setImageStyle] = useState({});
  const randomNumber = useRef((Math.round(Math.random() * 10) % 6) + 1);
  const image = IMAGES[`header${randomNumber.current}`];

  const onScroll = () => {
    const newMenuItem = {
      type: SET_MENU_ITEM,
      selectedItem: LOCALES.id,
    };
    const style = {
      transform: `translate(0px, ${window.scrollY * 0.8}px)`,
    };

    setImageStyle(style);
    if (ref.current.clientHeight - 70 > window.scrollY && !onAnimation) {
      dispatch(newMenuItem);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div ref={ref} className={componentName} id={LOCALES.id}>
      <img
        alt="header"
        src={image}
        className={componentName + "-img"}
        style={imageStyle}
      />
      <div className={componentName + "-overlay"}>
        <div className={componentName + "-title"}>{LOCALES.title}</div>
      </div>
    </div>
  );
}

export default Header;
