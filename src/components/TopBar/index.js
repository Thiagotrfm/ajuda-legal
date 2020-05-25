import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";

import "./styles.less";

const { componentName, menuItems } = CONSTANTS;

function TopBar() {
  const [pathname, setPathname] = useState(document.location.pathname);
  let history = useHistory();

  const items = useMemo(() => {
    const onItemClick = (menuItem) => {
      if (pathname !== menuItem.pathname) {
        history.push(menuItem?.pathname || "");
        setPathname(menuItem?.pathname || "");
      }
    };

    return menuItems.map((item, index) => {
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
  }, [history, pathname]);

  return (
    <div className={componentName}>
      <img alt="logo" className={componentName + "-logo"} src={IMAGES.logo} />
      <div className={componentName + "-menu"}>{items}</div>
    </div>
  );
}

export default TopBar;
