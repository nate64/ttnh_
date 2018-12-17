import React, { Component } from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Sign from '../images/sign.jpg'

class Footer extends Component {
  render() {
    return(
      <div>
        <Menu.Menu as={Footerbody} >
          <NavLink to='/'>
            <Menu.Item name='home'>
              Home
            </Menu.Item>
          </NavLink>

          <NavLink to='./about'>
            <Menu.Item name='about'>
              About
            </Menu.Item>
          </NavLink>
        </Menu.Menu>   
        <Menu.Item as={Subfooter} href="https://www.codeshoppe.io">
          Powered By CodeShoppe Studios
        </Menu.Item>
      </div>
    )
  }
}

const Footerbody = styled.div `
  background: #98CC8A; //#FDF162
  font-size: 20px;
  justify-content: space-evenly;
  display: flex;
`

const Subfooter = styled(Menu.Item)`
  background: #FDF162;
  font-size: 20px;
  justify-content: center;
  display: flex;
`


export default withRouter((Footer));
