import React, { Component } from 'react';
import './App.css';
import TopHeader from "./components/topHeader"
import Navbar from "./components/navbar"
import ContentContainer from "./components/contentContainer"
import Footer from "./components/footer"


class App extends Component {
  render() {
    return (
      <div className="App">




        <TopHeader />
        <Navbar />
        <ContentContainer />
        <ContentContainer />
        <ContentContainer />
        <Footer />

      </div>
    );
  }
}

export default App;
