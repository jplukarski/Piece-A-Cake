import React, { Component } from "react";
import Navbar from "../../components/navbar";
import TopHeader from "../../components/topHeader";
import HomeCakes from "../../components/cakehomepage";
import { Container } from "semantic-ui-react";

class Home extends Component {
    render() {
        return (
            <div>
                <TopHeader />
                <Navbar />
                <Container>
                    <HomeCakes />
                </Container>
            </div>
        );
    }
}

export default Home;