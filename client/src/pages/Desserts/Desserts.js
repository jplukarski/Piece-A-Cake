import React, { Component } from "react";
import Navbar from "../../components/navbar";
import TopHeader from "../../components/topHeader";


class Home extends Component {
    render() {
        return (
            <div>
                <TopHeader />
                <Navbar />
                Aye yo this my all desserts page.
            </div>
        );
    }
}

export default Home;