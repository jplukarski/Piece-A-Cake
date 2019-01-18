import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import TopHeader from "./components/topHeader"
import Navbar from "./components/navbar"
import Home from "./pages/Home"


const App = () => (
  <Router>
    <div className="App">
      <TopHeader />
      <Navbar />
      <div className="band">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App;
