import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimateSharedLayout } from "framer-motion";

import Carousel from "../Carousel";

import CONSTANTS from "./constants";
import LOCALES from "../../locales/occupation";
import { SET_MENU_ITEM } from "../../redux/actionTypes";

import "./styles.less";

const { componentName } = CONSTANTS;
const { options } = LOCALES;
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
const initialRandomPosition = {
  top: ((Math.random() * 1000) % 300) + "px",
  left: "50px",
};

function Occupation() {
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [showContent, setShowContent] = useState(true);
  const [isTouchable, setIsTouchable] = useState(window.innerWidth < 768);
  const [oposite, setOposite] = useState(true);
  const [randomPosition, setRandomPosition] = useState(initialRandomPosition);
  const [imageStyle, setImageStyle] = useState({});
  const onAnimation = useSelector((state) => state.onAnimation);
  const ref = useRef();
  const dispatch = useDispatch();
  const randomNumber = useMemo(
    () => Math.round(Math.random() * 100) % selectedItem.image.length,
    [selectedItem.image.length]
  );

  const onResize = () => {
    setIsTouchable(window.innerWidth < 768);
  };

  const onScroll = () => {
    const newMenuItem = {
      type: SET_MENU_ITEM,
      selectedItem: LOCALES.id,
    };
    const style = {
      transform: `translate(0px, ${
        -(ref.current.offsetTop - window.scrollY) * 0.3
      }px)`,
    };

    setImageStyle(style);
    if (
      ref.current.offsetTop - 70 < window.scrollY &&
      ref.current.offsetTop + ref.current.clientHeight - 70 > window.scrollY &&
      !onAnimation
    )
      dispatch(newMenuItem);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onResize);
    };
  });

  const renderMenu = () => {
    return (
      <AnimateSharedLayout>
        <div className={componentName + "-menu"}>
          {options.map((option, index) => {
            const isSelected = option.id === selectedItem.id;
            const handleOnClick = () => {
              if (option.id !== selectedItem.id) {
                setSelectedItem(option);
                setOposite(!oposite);
                setRandomPosition({
                  top: ((Math.random() * 1000) % 300) + "px",
                  left: "50px",
                });
                setShowContent(false);
                setTimeout(() => {
                  setShowContent(true);
                }, 10);
              }
            };

            return (
              <div
                className={componentName + "-item"}
                key={index}
                style={isSelected ? { fontWeight: "bold" } : {}}
                onClick={handleOnClick}
              >
                {option.title}
                {isSelected && (
                  <motion.div
                    layoutId="selectedItem"
                    className={componentName + "-selected-item"}
                    transition={spring}
                  />
                )}
              </div>
            );
          })}
        </div>
      </AnimateSharedLayout>
    );
  };

  const renderContent = useCallback(() => {
    return (
      <div
        className={componentName + "-content"}
        style={{ flexDirection: oposite ? "row" : "row-reverse" }}
      >
        <div className={componentName + "-header"}>
          <div className={componentName + "-img-loading"}>
            <img
              alt={selectedItem.title}
              className={componentName + "-img"}
              src={selectedItem.image[randomNumber]}
              style={imageStyle}
            />
          </div>
          <motion.div
            className={componentName + "-title"}
            style={randomPosition}
            transition={{
              layoutX: { duration: 0.3 },
              layoutY: { delay: 0.2, duration: 0.3 },
            }}
          >
            {selectedItem.title}
          </motion.div>
        </div>
        <div className={componentName + "-text"}> {selectedItem.text} </div>
      </div>
    );
  }, [imageStyle, oposite, randomNumber, randomPosition, selectedItem]);

  return (
    <div ref={ref} className={componentName} id={LOCALES.id}>
      <div className={componentName + "-title"}> {LOCALES.title} </div>
      {isTouchable ? (
        <Carousel />
      ) : (
        <div className={componentName + "-tabs"}>
          {renderMenu()}
          {showContent && renderContent()}
        </div>
      )}
    </div>
  );
}

export default Occupation;
