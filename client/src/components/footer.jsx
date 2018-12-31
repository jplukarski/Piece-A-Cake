import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import SocialMediaButtons from "./socialMediaButtons"
import QuoteButton from "./quoteButton"


export default class Footer extends Component {
    render() {
        return (
            <Segment.Group >
                <Segment size="massive" className="bottom-segment-top">
                    <span className="footerQuoteButton">
                        Don't wait! Order a cake for that special occasion now!
                    </span>
                    <QuoteButton />
                </Segment>


                <Segment.Group horizontal className="bottom-segment-bottom">
                    <Segment>
                        <p>
                            Annette Plukarski
                            <br></br>
                            anet417@sbcglobal.net
                            <br></br>
                            Oak Forest, Il
                        </p>
                    </Segment>
                    <Segment><p>Cakes</p></Segment>
                </Segment.Group>
                <Segment className="bottom-segment-bottom">
                    <SocialMediaButtons />
                </Segment>

            </Segment.Group>
        )
    }
}