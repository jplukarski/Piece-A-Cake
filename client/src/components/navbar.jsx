import React, { Component } from 'react'
import { Button, Dropdown, Menu, Image } from 'semantic-ui-react'
import TopHeader from "./topHeader"


export default class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <>
                <TopHeader />
                <Menu stackable size='massive' className="">
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
                            <Button primary>Order</Button>
                        </Menu.Item>
                    </Menu.Menu>

                </Menu>
            </>
        )
    }
}