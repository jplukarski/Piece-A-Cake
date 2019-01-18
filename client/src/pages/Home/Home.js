import React, { Component } from "react";
import Cakes from "../../components/cakes"
import Footer from "../../components/footer"
import Cookies from "../../components/cookies"
import Cupcakes from "../../components/cupcakes"

class Home extends Component {
    render() {
        return (
            <div className="App">

                <div className="band">
                    <Cakes />
                    <Cookies />
                    <Cupcakes />
                    <Footer />
                </div>

            </div>
        );
    }
}

export default Home;