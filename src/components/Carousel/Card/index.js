import React from "react";

import CONSTANTS from "./constants";

import "./styles.less";
import { motion } from "framer-motion";

const { componentName } = CONSTANTS;

function Card({
  currentIndex,
  index,
  item,
  fx,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
  onClick,
}) {
  const style = {
    left: 50 + index * (window.innerWidth - 80) + fx,
    width: window.innerWidth - 100,
    top: index === currentIndex - 1 || index === currentIndex + 1 ? 20 : 0,
  };

  return (
    <motion.div
      layout
      className={componentName}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onClick={() => {
        onClick(index);
      }}
      style={style}
    >
      <div className={componentName + "-header"}>
        <img
          alt={item.title}
          className={componentName + "-img"}
          src={item.image}
        />
        <div className={componentName + "-overlay"}>
          <div
            className={componentName + "-title"}
            style={{ right: index % 2 === 1 ? 0 : undefined }}
          >
            {item.title}
          </div>
        </div>
      </div>
      <div className={componentName + "-text"}>{item.description}</div>
    </motion.div>
  );
}

export default Card;
