import React from "react";

import CONSTANTS from "./constants";
import LOCALES from "../../locales/get-help";

import "./styles.less";

const { componentName } = CONSTANTS;

function GetHelp() {
  return (
    <div className={componentName} id={LOCALES.id}>
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
      <div className={componentName + "-button"}>{LOCALES.button}</div>
    </div>
  );
}

export default GetHelp;
