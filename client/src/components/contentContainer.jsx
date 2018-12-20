import React, { Component } from 'react'
import { Header, Grid, Segment, Image } from 'semantic-ui-react'

export default class ContentContainer extends Component {
    render() {
        return (
            <Segment style={{ padding: '0em', borderBottom: "0em", marginBottom: "0em" }} vertical>
                <Grid columns='equal' stackable>
                    <Grid.Row textAlign='center' style={{ padding: "0em" }}>
                        <Grid.Column >
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                <p >

                                    Cakes
                                    <br></br>
                                    The most essential dessert for a party
                                    </p>
                            </Header>
                        </Grid.Column>

                        <Grid.Column >
                            <Image src='https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/1382982_991510557598927_3194453557553504260_n.jpg?_nc_cat=108&_nc_ht=scontent-ort2-2.xx&oh=69fb2b12bf3ecdd094c2a8a71575ceef&oe=5CA7C5AF' fluid />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }

}