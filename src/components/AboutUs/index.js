import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import IMAGES from "../../assets";
import CONSTANTS from "./constants";
import LOCALES from "../../locales/about-us";
import { SET_MENU_ITEM } from "../../redux/actionTypes";

import "./styles.less";

const { componentName } = CONSTANTS;

function AboutUs() {
  const ref = useRef();
  const dispatch = useDispatch();
  const onAnimation = useSelector((state) => state.onAnimation);

  const setMenuItem = () => {
    const newMenuItem = {
      type: SET_MENU_ITEM,
      selectedItem: LOCALES.id,
    };
    if (
      ref.current.offsetTop - 70 < window.scrollY &&
      ref.current.offsetTop + ref.current.clientHeight - 70 > window.scrollY &&
      !onAnimation
    ) {
      console.log("OI");
      dispatch(newMenuItem);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setMenuItem);

    return () => {
      window.removeEventListener("scroll", setMenuItem);
    };
  });

  return (
    <div ref={ref} className={componentName} id={LOCALES.id}>
      <img
        alt="About us"
        src={IMAGES.watermark}
        className={componentName + "-watermark"}
      />
      <div className={componentName + "-title"}> {LOCALES.title} </div>
      <div className={componentName + "-text"}> {LOCALES.text} </div>
    </div>
  );
}

export default AboutUs;
