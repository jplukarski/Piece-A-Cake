import React, { Component } from 'react'
import { Header, Grid, Segment, Image } from 'semantic-ui-react'

export default class Cakes extends Component {
    render() {
        return (

            <Segment style={{ padding: '0em', borderBottom: "0em", marginBottom: "0em" }} vertical>
                <Grid columns={2} verticalAlign='middle' columns='equal' stackable>
                    <Grid.Row textAlign='center' >
                        <Grid.Column style={{ paddingLeft: "0em", paddingRight: "0em" }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                <p >

                                    Cakes
                                    <br></br>
                                    The most essential dessert for a party
                                    </p>
                            </Header>
                        </Grid.Column>

                        <Grid.Column style={{ paddingLeft: "0em", paddingRight: "0em" }}>
                            <Image
                                src='./assets/rsz_cake.jpg' fluid />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        )
    }

}