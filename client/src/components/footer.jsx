import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

export default class Footer extends Component {
    render() {
        return (
            <Segment.Group>
                {/* <Segment>Top</Segment>

                <Segment.Group>
                    <Segment>Nested Top</Segment>
                    <Segment>Nested Middle</Segment>
                    <Segment>Nested Bottom</Segment>
                </Segment.Group> */}

                <Segment.Group horizontal>
                    <Segment>Top</Segment>
                    <Segment>Middle</Segment>
                    <Segment>Bottom</Segment>
                </Segment.Group>
                <Segment>Bottom</Segment>
            </Segment.Group>
        )
    }
}