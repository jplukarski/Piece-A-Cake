import React, { Component } from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'

export default class SocialMediaButtons extends Component {
    render() {
        return (
            <Menu.Item>
                <a href="https://www.facebook.com/pieceacake.annette/" target="_blank" rel="noopener noreferrer">
                    <Button icon color='facebook'>
                        <Icon name='facebook' />
                    </Button>
                </a>
                <a>
                    <Button icon color='instagram'>
                        <Icon name='instagram' />
                    </Button>
                </a>
                <a>
                    <Button icon color='google plus' className="myEmail">
                        <Icon name='mail' />
                        <div className="ui custom popup top left transition hidden">Copied anet417@sbcglobal.net</div>
                    </Button>
                </a>
            </Menu.Item>
        )
    }
}