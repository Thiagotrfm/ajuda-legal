import React from "react";

import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import LOCALES from "../../locales/home";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";

import "./styles.less";

const { pageName } = CONSTANTS;

function Home() {
  return (
    <div className={pageName}>
      <Banner
        imageSrc={IMAGES.cover}
        subtitle={LOCALES.subtitle}
        theme="dark"
      />
      <Carousel />
      <Banner
        imageSrc={IMAGES.cover}
        subtitle={LOCALES.subtitle}
        theme="dark"
      />
    </div>
  );
}

export default Home;
