import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import TopBar from './components/TopBar';

import 'antd/dist/antd.css';

const { Content, Header } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <TopBar />
        <Router>
          <Switch>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
        </Router>
      </Content>
    </Layout>
  );
}

export default App;
