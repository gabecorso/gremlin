import './App.css';
import Splash from './components/Splash';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import React from "react";
import Playground from "./components/Playground";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <AppRouter />
  );
}

export default App;
