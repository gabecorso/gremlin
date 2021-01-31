import logo from './logo.svg';
import './App.css';
import Splash from './components/Splash';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import React from "react";
import Playground from "./components/Playground";

function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route exact path="/">
                     <Splash />
                  </Route>
                  <Route path="/playground">
                      <Playground />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
