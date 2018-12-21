import React, { Component } from 'react'
import { Header, Grid, Segment, Image } from 'semantic-ui-react'

export default class Cookies extends Component {
    render() {
        return (
            <Segment style={{ padding: '0em', borderBottom: "0em", marginBottom: "0em" }} vertical>
                <Grid verticalAlign='middle' columns='equal' stackable>
                    <Grid.Row textAlign='center' style={{ padding: "0em", margin: "0em" }}>
                        <Grid.Column >

                            {/* ///////////////////////////////// */}

                            <Image src='./assets/rsz_cake.jpg' fluid />

                            {/* ///////////////////////////////// */}
                        </Grid.Column>

                        <Grid.Column >
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                <p >

                                    Cookies
                                    <br></br>
                                    The most essential dessert for a party
                                    </p>
                            </Header>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }

}