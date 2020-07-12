import React from "react";

import IMAGES from "../../assets";
import CONSTANTS from "./constants";
import LOCALES from "../../locales/volunteer";

import "./styles.less";

const { componentName } = CONSTANTS;

function Volunteer() {
  return (
    <div className={componentName} id={LOCALES.id}>
      <div className={componentName + "-title"}> {LOCALES.title} </div>
      <div className={componentName + "-left-frame"}>
        <img
          alt="volunteer"
          className={componentName + "-img"}
          src={IMAGES.volunteer}
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
