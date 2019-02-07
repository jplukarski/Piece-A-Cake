import React, { Component } from 'react'
import { Button, Dropdown, Menu, Container } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu size='huge' stackable borderless>
                <Container>
                    <Link to={"/"}>
                        <Menu.Item className="pac-home-button-navbar"><span role="img" aria-label="cake">🍰 </span> Piece-a-Cake</Menu.Item>
                    </Link>
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />

                    <Menu.Menu position='right'>
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}