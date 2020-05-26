import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import TopBar from "./components/TopBar";

import "antd/dist/antd.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Router>
          <TopBar />
          <Switch>
            <Route exac path="/home" component={Home} />
          </Switch>
        </Router>
      </Content>
    </Layout>
  );
}

export default App;
