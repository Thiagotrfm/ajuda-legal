import React from "react";

import Header from "../../components/Header";

import CONSTANTS from "./constants";
import "./styles.less";
import AboutUs from "../../components/AboutUs";

const { pageName } = CONSTANTS;

function Home() {
  return (
    <div className={pageName}>
      <Header />
      <AboutUs />
    </div>
  );
}

export default Home;
