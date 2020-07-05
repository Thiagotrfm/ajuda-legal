import React from "react";

import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import GetHelp from "../../components/GetHelp";

import CONSTANTS from "./constants";

import "./styles.less";

const { pageName } = CONSTANTS;

function Home() {
  return (
    <div className={pageName}>
      <Header />
      <AboutUs />
      <GetHelp />
    </div>
  );
}

export default Home;
