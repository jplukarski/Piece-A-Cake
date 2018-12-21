import React, { Component } from 'react';
import './App.css';
import TopHeader from "./components/topHeader"
import Navbar from "./components/navbar"
import Cakes from "./components/cakes"
import Footer from "./components/footer"
import Cookies from "./components/cookies"


class App extends Component {
  render() {
    return (
      <div className="App">

        <TopHeader />
        <Navbar />
        <div className="band">

          <Cakes />
          <Cookies />
          <Cakes />
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
