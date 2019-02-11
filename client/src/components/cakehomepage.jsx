import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Card, Image, Header } from 'semantic-ui-react'

class HomeCakes extends Component {
    state = {
        cakes: []
    };

    componentDidMount() {
        this.loadCakes();
    }

    loadCakes = () => {
        API.getDesserts()
            .then(res =>
                this.setState({ cakes: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <Header as='h3' dividing>
                    A Cake for all occasions
                </Header>

                {this.state.cakes.length ? (
                    <Card.Group itemsPerRow={2}>
                        {this.state.cakes.map(cake => (
                            <Card key={cake._id}>
                                <Image src={cake.image} />
                                <Card.Content>
                                    <Card.Header>{cake.dessert}</Card.Header>
                                    <Card.Meta>{cake.occassion}</Card.Meta>
                                    <Card.Description>{cake.description}</Card.Description>
                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                ) : (<h3>No Results to Display</h3>)}
            </>
        )
    }
}

export default HomeCakes