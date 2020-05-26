import React from "react";

import CONSTANTS from "./constants";
import IMAGES from "../../assets";
import Banner from "../../components/Banner";

const { pageName } = CONSTANTS;

function Home() {
  return (
    <div className={pageName}>
      <Banner imageSrc={IMAGES.cover} theme="dark" />
    </div>
  );
}

export default Home;
