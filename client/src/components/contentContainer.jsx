import React, { Component } from 'react'
import { Header, Image, Grid, Segment } from 'semantic-ui-react'

export default class ContentContainer extends Component {
    render() {
        return (
            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Cakes
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>The most essential dessert for a party</p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "I shouldn't have gone with their competitor."
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                <b>Nan</b> Chief Fun Officer Acme Toys</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }

}