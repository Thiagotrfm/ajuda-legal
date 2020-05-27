import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import LOCALES from "../../locales/topbar";

import "./styles.less";

const { componentName } = CONSTANTS;
const { menuItems } = LOCALES;

function TopBar() {
  const [pathname, setPathname] = useState(document.location.pathname);
  const [topBarStyle, setTopbarStyle] = useState({
    height:
      window.innerWidth > 992
        ? CONSTANTS.styleHeight
        : CONSTANTS.minStyleHeight,
  });
  let history = useHistory();

  const updateScrollPosition = () => {
    const style = {
      height: Math.max(
        CONSTANTS.minStyleHeight,
        CONSTANTS.styleHeight - window.scrollY / 10
      ),
    };
    const minStyle = { height: CONSTANTS.minStyleHeight };

    setTopbarStyle(window.innerWidth > 992 ? style : minStyle);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  });

  const items = () => {
    const onItemClick = (menuItem) => {
      if (pathname !== menuItem.pathname) {
        history.push(menuItem?.pathname || "");
        setPathname(menuItem?.pathname || "");
      }
    };

    let items = menuItems.map((item, index) => {
      return (
        <div
          className={
            componentName +
            "-menu-item" +
            (pathname === item.pathname ? " selected" : "")
          }
          key={index}
          onClick={() => {
            onItemClick(item);
          }}
        >
          {item?.title ?? ""}
        </div>
      );
    });

    return items;
  };

  return (
    <div className={componentName} style={topBarStyle}>
      <img
        alt="logo"
        className={componentName + "-logo"}
        src={IMAGES.logo}
        style={topBarStyle}
      />
      <div className={componentName + "-menu"}>{items()}</div>
    </div>
  );
}

export default TopBar;
