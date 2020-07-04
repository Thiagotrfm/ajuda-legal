import React, { useState, useEffect } from "react";
import $ from "jquery";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import LOCALES from "../../locales/topbar";

import "./styles.less";

const { componentName } = CONSTANTS;
const { menuItems } = LOCALES;

function TopBar() {
  const [topBarStyle, setTopbarStyle] = useState({ opacity: 0 });
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].id);

  const updateScrollPosition = () => {
    const style = {
      opacity: window.scrollY / window.innerHeight,
    };

    setTopbarStyle(style);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  });

  const items = () => {
    const onItemClick = (menuItem) => {
      const element = $(`#${menuItem?.id}`);
      setSelectedMenuItem(menuItem?.id);
      if (element[0]) {
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: element.offset().top - 100,
          },
          1000
        );
      }
    };

    let items = menuItems.map((item, index) => {
      const isSelected = selectedMenuItem === item.id;
      return (
        <div
          className={
            componentName + "-menu-item" + (isSelected ? " selected" : "")
          }
          key={index}
          onClick={() => {
            onItemClick(item);
          }}
        >
          <div> {item?.title ?? ""} </div>
          {isSelected && <div className={componentName + "-dot"} />}
        </div>
      );
    });

    return items;
  };

  return (
    <div className={componentName}>
      <div className={componentName + "-background"} style={topBarStyle} />
      <img alt="logo" className={componentName + "-logo"} src={IMAGES.logo} />
      <div className={componentName + "-menu"}>{items()}</div>
    </div>
  );
}

export default TopBar;
