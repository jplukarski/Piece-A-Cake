import React, { Component } from 'react'
import { Button, Icon, Dropdown, Menu, Image } from 'semantic-ui-react'




export default class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable size='massive' className="main">
                <Menu.Item>
                    <Image src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/18767663_1355671834516129_1760722798473303577_n.jpg?_nc_cat=105&_nc_ht=scontent-ort2-2.xx&oh=4cc6edf45a1a22d43460e35ce015e841&oe=5C8FEFFE" avatar></Image>
                </Menu.Item>

                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    Home
        </Menu.Item>

                <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                >
                    About
        </Menu.Item>

                <Menu.Item
                    name='order'
                    active={activeItem === 'order'}
                    onClick={this.handleItemClick}>
                    Order
        </Menu.Item>

                <Menu.Menu position='right'>
                    <Dropdown item text='Occassion'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Birthday</Dropdown.Item>
                            <Dropdown.Item>Graduation</Dropdown.Item>
                            <Dropdown.Item>Wedding</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text='Dessert'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Cakes</Dropdown.Item>
                            <Dropdown.Item>Cookies</Dropdown.Item>
                            <Dropdown.Item>Cupcakes</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

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

                            <Button icon className="myEmail">
                                <Icon name='mail' />
                                <div className="ui custom popup top left transition hidden">Copied anet417@sbcglobal.net</div>
                            </Button>
                        </a>

                    </Menu.Item>

                </Menu.Menu>

            </Menu>
        )
    }
}