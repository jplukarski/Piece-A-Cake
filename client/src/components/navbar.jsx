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
                        <Menu.Item className="pac-home-button-navbar">
                            <h3>
                                <span role="img" aria-label="cake">🍰 </span> Piece-a-Cake
                            </h3>
                        </Menu.Item>
                    </Link>
                    <Dropdown item text='Dessert'>
                        <Dropdown.Menu>
                            <Link to={"/all-desserts"}>
                                <Dropdown.Item>All Desserts</Dropdown.Item>
                            </Link>
                            <Link to={"/cakes"}>
                                <Dropdown.Item>Cakes</Dropdown.Item>
                            </Link>
                            <Link to={"/cookies"}>
                                <Dropdown.Item>Cookies</Dropdown.Item>
                            </Link>
                            <Link to={"/cupcakes"}>
                                <Dropdown.Item>Cupcakes</Dropdown.Item>
                            </Link>
                            <Link to={"/other-desserts"}>
                                <Dropdown.Item>Other</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown item text='Occassion'>
                        <Dropdown.Menu>
                            <Link to={"/all-occassions"}>
                                <Dropdown.Item>All Occasions</Dropdown.Item>
                            </Link>
                            <Link to={"/birthday"}>
                                <Dropdown.Item>Birthday</Dropdown.Item>
                            </Link>
                            <Link to={"/graduation"}>
                                <Dropdown.Item>Graduation</Dropdown.Item>
                            </Link>
                            <Link to={"/wedding"}>
                                <Dropdown.Item>Wedding</Dropdown.Item>
                            </Link>
                            <Link to={"/other-occassions"}>
                                <Dropdown.Item>Other</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Menu position='right'>
                        <Link to={"/about"}>
                            <Menu.Item
                                name='about'
                                active={activeItem === 'about'}
                                onClick={this.handleItemClick}
                            >About</Menu.Item>
                        </Link>

                        <Menu.Item>
                            <Link to={"get-a-quote"}>
                                <Button color='google plus'>Get a Quote!</Button>
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}