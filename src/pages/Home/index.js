import React from "react";

import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import GetHelp from "../../components/GetHelp";
import Volunteer from "../../components/Volunteer";
import Footer from "../../components/Footer";

import CONSTANTS from "./constants";

import "./styles.less";

const { pageName } = CONSTANTS;

function Home() {
  return (
    <div className={pageName}>
      <Header />
      <AboutUs />
      <GetHelp />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default Home;
