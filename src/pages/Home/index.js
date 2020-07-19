import React from "react";

import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import GetHelp from "../../components/GetHelp";
import Volunteer from "../../components/Volunteer";
import Footer from "../../components/Footer";
import Occupation from "../../components/Occupation";

import CONSTANTS from "./constants";

import "./styles.less";

const { pageName } = CONSTANTS;

function Home() {
  return (
    <div className={pageName}>
      <Header />
      <AboutUs />
      <Occupation />
      <GetHelp />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default Home;
