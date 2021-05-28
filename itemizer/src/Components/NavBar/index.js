import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu borderless>
        <Menu.Item>
          <img src='../../../logo192.png' />
        </Menu.Item>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
