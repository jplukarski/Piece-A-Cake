import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SocialMediaButtons from "./socialMediaButtons"

export default class Footer extends Component {
    render() {
        return (
            <Segment.Group>
                <Segment inverted color='orange'>Top</Segment>



                <Segment.Group horizontal>
                    <Segment>Top</Segment>
                    <Segment>Middle</Segment>
                    <Segment>Bottom</Segment>
                </Segment.Group>
                <Segment>
                    <SocialMediaButtons />
                </Segment>
            </Segment.Group>
        )
    }
}