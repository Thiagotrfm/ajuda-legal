import React, { useEffect, useState, useRef } from "react";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import LOCALES from "../../locales/header";

import "./styles.less";

const { componentName } = CONSTANTS;

function Header() {
  const [imageStyle, setImageStyle] = useState({});
  const randomNumber = useRef((Math.round(Math.random() * 10) % 6) + 1);
  const image = IMAGES[`header${randomNumber.current}`];

  const updateScrollPosition = () => {
    const style = {
      transform: `translate(0px, ${window.scrollY * 0.8}px)`,
    };

    setImageStyle(style);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  });

  return (
    <div className={componentName} id={LOCALES.id}>
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
