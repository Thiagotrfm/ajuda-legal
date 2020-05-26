import React from "react";

import CONSTANTS from "./constants";

import "./styles.less";

const { componentName } = CONSTANTS;

function Banner({ imageSrc, theme }) {
  return (
    <div className={componentName}>
      {imageSrc && (
        <img alt="cover" className={componentName + "-img"} src={imageSrc} />
      )}
      <div className={componentName + "-overlay " + theme} />
    </div>
  );
}

export default Banner;
