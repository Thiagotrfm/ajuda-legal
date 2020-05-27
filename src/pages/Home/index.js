import React from "react";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import Banner from "../../components/Banner";
import LOCALES from "../../locales/home";

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
      <Banner
        imageSrc={IMAGES.cover}
        subtitle={LOCALES.subtitle}
        theme="dark"
      />
    </div>
  );
}

export default Home;
