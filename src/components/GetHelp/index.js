import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CONSTANTS from "./constants";
import LOCALES from "../../locales/get-help";

import { SET_MENU_ITEM } from "../../redux/actionTypes";

import "./styles.less";

const { componentName } = CONSTANTS;

const handleButtonPress = () => {
  window.open("https://forms.gle/a5e23vPTVB9QL7RE7", "_blank");
};

function GetHelp() {
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
    )
      dispatch(newMenuItem);
  };

  useEffect(() => {
    window.addEventListener("scroll", setMenuItem);

    return () => {
      window.removeEventListener("scroll", setMenuItem);
    };
  });

  return (
    <div ref={ref} className={componentName} id={LOCALES.id}>
      <div className={componentName + "-title"}> {LOCALES.title} </div>
      <div className={componentName + "-step-left"}>
        <div className={componentName + "-step-title"}>
          {LOCALES.steps.first.title}
        </div>
        <div className={componentName + "-step-text"}>
          {LOCALES.steps.first.text}{" "}
        </div>
      </div>
      <div className={componentName + "-step-right"}>
        <div className={componentName + "-step-title"}>
          {LOCALES.steps.second.title}
        </div>
        <div className={componentName + "-step-text"}>
          {LOCALES.steps.second.text}{" "}
        </div>
      </div>
      <div className={componentName + "-step-left"}>
        <div className={componentName + "-step-title"}>
          {LOCALES.steps.third.title}
        </div>
        <div className={componentName + "-step-text"}>
          {LOCALES.steps.third.text}{" "}
        </div>
      </div>
      <div className={componentName + "-button"} onClick={handleButtonPress}>
        {LOCALES.button}
      </div>
    </div>
  );
}

export default GetHelp;
