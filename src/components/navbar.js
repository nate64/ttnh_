import React, { Component }  from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import smallLogo from '../images/ttnh_logo_small.png'


class Navbar extends Component {
  render () {
    return (
      <div>
        <Menu.Menu as={Background} fixed='top'>
          <Link to='/'>
            <Logo src={smallLogo} />
          </Link>
          <NavLink to='./about'>
            <Menu.Item>
              <p>About Us</p>
            </Menu.Item>
          </NavLink>
          <Menu.Item
            name='logo'
            >Logo Here
          </Menu.Item>
          <Menu.Item
            name='link1'
            >Link 1
          </Menu.Item>
          <Menu.Item
            name='link2'
            >Link 2
            </Menu.Item>
        </Menu.Menu>
      </div>
    )
  }
}

const Background = styled.div `
  background: #98CC8A;
  display: flex;
  flex-direction: row;
`

const Logo = styled.img`
  height: 200px;
  margin-left: 10px;
  margin-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default withRouter((Navbar));