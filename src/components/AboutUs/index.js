import React from "react";

import IMAGES from "../../assets";
import CONSTANTS from "./constants";
import LOCALES from "../../locales/about-us";

import "./styles.less";

const { componentName } = CONSTANTS;

function AboutUs() {
  return (
    <div className={componentName}>
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
