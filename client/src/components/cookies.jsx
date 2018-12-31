import React, { Component } from 'react'
import { Header, Grid, Segment, Image } from 'semantic-ui-react'

export default class Cookies extends Component {
    render() {
        return (
            <Segment style={{ padding: '0em', borderBottom: "0em", marginBottom: "0em" }} vertical>
                <Grid verticalAlign='middle' columns='equal' stackable>
                    <Grid.Row textAlign='center' style={{ paddingTop: "0em", paddingBottom: "0em" }}>
                        <Grid.Column style={{ paddingLeft: "0em", paddingRight: "0em" }}>


                            <Image src='./assets/rsz_cookie.jpg' fluid />

                        </Grid.Column>

                        <Grid.Column style={{ paddingLeft: "0em", paddingRight: "0em" }}>
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