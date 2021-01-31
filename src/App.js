import './App.css';
import Splash from './components/Splash';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
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
