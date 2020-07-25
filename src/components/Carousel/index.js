import React, { useState, useRef } from "react";

import CONSTANTS from "./constants";
import LOCALES from "../../locales/occupation";

import "./styles.less";
import Card from "./Card";

const { componentName } = CONSTANTS;
const { options } = LOCALES;

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fxOnTouch = useRef(0);
  const [fx, setFx] = useState(0);
  const lastXPosition = useRef(0);

  const handleTouchStart = (e) => {
    fxOnTouch.current = 0;
  };

  const handleTouchEnd = () => {
    if (fxOnTouch.current > 30) {
      const nextCurrentIndex = Math.max(0, currentIndex - 1);
      setFx(-nextCurrentIndex * (window.innerWidth - 80));
      console.log(nextCurrentIndex);
      setCurrentIndex(nextCurrentIndex);
    } else if (fxOnTouch.current < -30) {
      const nextCurrentIndex = Math.min(options.length - 1, currentIndex + 1);
      setFx(-nextCurrentIndex * (window.innerWidth - 80));
      setCurrentIndex(nextCurrentIndex);
    } else {
      setFx(-currentIndex * (window.innerWidth - 80));
    }
    fxOnTouch.current = 0;
    lastXPosition.current = undefined;
  };

  const handleTouchMove = (e) => {
    const touchList = e.changedTouches;
    const x = touchList[0]?.clientX;
    const newFx = lastXPosition.current ? x - lastXPosition.current : 0;
    setFx(fx + newFx);
    fxOnTouch.current += newFx;
    lastXPosition.current = x;
  };

  const onClick = (index) => {
    setFx(-index * (window.innerWidth - 80));
    setCurrentIndex(index);
  };

  return (
    <div className={componentName}>
      {options.map((item, index) => {
        return (
          <Card
            currentIndex={currentIndex}
            key={index}
            fx={fx}
            index={index}
            item={item}
            handleTouchStart={handleTouchStart}
            handleTouchEnd={handleTouchEnd}
            handleTouchMove={handleTouchMove}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

export default Carousel;
