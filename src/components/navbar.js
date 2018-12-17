import React, { Component }  from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import smallLogo from '../images/ttnh_logo_small.png'
import Sign from '../images/sign.jpg'


class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu.Menu as={Background} fixed='top' >

          <NavLink to='/'>
            <Menu.Item>
              <Logo src={smallLogo} />
            </Menu.Item>
          </NavLink>
        
          <NavLink to='./products'>
            <Menu.Item name='products'>
              Products
            </Menu.Item>
          </NavLink>

          <NavLink to='./about'>
            <Menu.Item name='about'>
              About
            </Menu.Item>
          </NavLink>

          <NavLink to='./contact'>
            <Menu.Item name='contact'>
              Contact Us
            </Menu.Item>
          </NavLink>
        
        </Menu.Menu>
      </div>
    )
  }
}

const Background = styled.div `
  // background: #98CC8A;
  background-image: url(${Sign});  
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 50px;
  space-between: 30px;
`

const Logo = styled.img`
  height: 200px;
  margin-left: 10px;
  margin-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default withRouter((Navbar));