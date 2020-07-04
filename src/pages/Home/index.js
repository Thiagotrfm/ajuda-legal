import React from "react";

import Banner from "../../components/Banner";
import Header from "../../components/Header";
import LOCALES from "../../locales/home";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import "./styles.less";

const { pageName } = CONSTANTS;

function Home() {
  return (
    <div className={pageName}>
      <Header />
      <Banner
        imageSrc={IMAGES.cover}
        subtitle={LOCALES.subtitle}
        theme="dark"
      />
      <Banner
        id="move"
        imageSrc={IMAGES.cover}
        subtitle={LOCALES.subtitle}
        theme="dark"
      />
    </div>
  );
}

export default Home;
