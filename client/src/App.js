import React, { Component } from 'react';
import './App.css';
import AnotherGridLayout from "./components/grid"
import MenuExampleStackable from "./components/menu"

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnotherGridLayout />
        <MenuExampleStackable />
      </div>
    );
  }
}

export default App;
