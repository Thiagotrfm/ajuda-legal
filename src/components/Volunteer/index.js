import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IMAGES from "../../assets";
import CONSTANTS from "./constants";
import LOCALES from "../../locales/volunteer";
import { SET_MENU_ITEM } from "../../redux/actionTypes";

import "./styles.less";

const { componentName } = CONSTANTS;

function Volunteer() {
  const ref = useRef();
  const dispatch = useDispatch();
  const [imageStyle, setImageStyle] = useState({});
  const onAnimation = useSelector((state) => state.onAnimation);

  const onScroll = () => {
    const newMenuItem = {
      type: SET_MENU_ITEM,
      selectedItem: LOCALES.id,
    };
    const style = {
      transform: `translate(0px, ${
        -(ref.current.offsetTop - window.scrollY) * 0.3
      }px)`,
    };

    setImageStyle(style);
    if (ref.current.offsetTop - 70 < window.scrollY && !onAnimation)
      dispatch(newMenuItem);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div ref={ref} className={componentName} id={LOCALES.id}>
      <div className={componentName + "-title"}> {LOCALES.title} </div>
      <div className={componentName + "-left-frame"}>
        <img
          alt="volunteer"
          className={componentName + "-img"}
          src={IMAGES.volunteer}
          style={imageStyle}
        />
        <div className={componentName + "-overlay"} />
      </div>
      <div className={componentName + "-right-frame"}>
        <div className={componentName + "-text"}>{LOCALES.text}</div>
        <div className={componentName + "-button"}>{LOCALES.button}</div>
      </div>
    </div>
  );
}

export default Volunteer;
