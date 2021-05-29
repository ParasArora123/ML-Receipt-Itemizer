import React, { Component } from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: this.props.active }

  handleItemClick = () => this.props.history.push('/');
  handleItemClick2 = () => this.props.history.push('/about-page');

  render() {
    const { activeItem } = this.state

    return (
        <Menu borderless>
          <Menu.Item>
            <img src='../../logo192.png' />
          </Menu.Item>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick2}
          />
        </Menu>
    )
  }
}

export default withRouter(NavBar);