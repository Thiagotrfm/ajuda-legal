import React from "react";

import CONSTANTS from "./constants";

import "./styles.less";

const { componentName } = CONSTANTS;

function Banner({ imageSrc, subtitle, theme }) {
  return (
    <div className={componentName}>
      {imageSrc && (
        <img alt="cover" className={componentName + "-img"} src={imageSrc} />
      )}
      <div className={componentName + "-overlay " + theme}>
        {subtitle || ""}
      </div>
    </div>
  );
}

export default Banner;
