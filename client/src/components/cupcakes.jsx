import React, { Component } from 'react'
import { Header, Grid, Segment, Image } from 'semantic-ui-react'

export default class Cupcakes extends Component {
    render() {
        return (

            <Segment style={{ padding: '0em', borderBottom: "0em", marginBottom: "0em" }} vertical>
                <Grid columns={2} verticalAlign='middle' columns='equal' stackable>
                    <Grid.Row textAlign='center' style={{ paddingBottom: "0rem" }}>
                        <Grid.Column style={{ paddingLeft: "0em", paddingRight: "0em" }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                <p >

                                    Cupcakes
                                    <br></br>
                                    The most essential dessert for a party
                                    </p>
                            </Header>
                        </Grid.Column>

                        <Grid.Column style={{ paddingLeft: "0em", paddingRight: "0em" }}>
                            <Image
                                src='./assets/rsz_cupcakes.jpg' fluid />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        )
    }

}