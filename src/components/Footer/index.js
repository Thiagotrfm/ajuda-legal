import React from "react";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import LOCALES from "../../locales/footer";

import "./styles.less";

const { componentName, socialMedia } = CONSTANTS;

function Footer() {
  return (
    <div className={componentName} id={LOCALES.id}>
      <img
        alt="ajuda-legal"
        className={componentName + "-img"}
        src={IMAGES.horizontalLogo}
      />
      <div className={componentName + "-social-media"}>
        {socialMedia.map((item, index) => {
          return (
            <a href={item.link} target="blank">
              <img
                alt="social media"
                className={componentName + "-item"}
                key={index}
                href={item.link}
                src={item.image}
              />
            </a>
          );
        })}
      </div>
      <div className={componentName + "-copyrights"}>{LOCALES.copyrights}</div>
    </div>
  );
}

export default Footer;
