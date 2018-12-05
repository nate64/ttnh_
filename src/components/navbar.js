import React, { Component }  from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import smallLogo from '../images/ttnh_logo_small.png'

class Navbar extends React.Component {
  render () {
    return (
      <div>
        <Menu.Menu as={Background} fixed='top'>
          <Link to='/'>
            <Logo src={smallLogo} />
          </Link>
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
  background: grey;
`

const Logo = styled.img`
  height: 55px;
  margin-left: 10px;
  margin-right: 25px;
`;

export default withRouter((Navbar));