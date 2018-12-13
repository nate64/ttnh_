import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Sign from '../images/sign.jpg'

class Footer extends Component {
  render() {
    return(
      <div>
        <Menu.Menu position='right'>
          
          <NavLink to='/'>
            <Menu.Item name='home' position='right'>
              Home
            </Menu.Item>
          </NavLink>

          <NavLink to='./about'>
            <Menu.Item name='about'>
              About
            </Menu.Item>
          </NavLink>

          
            <Menu.Item href="https://www.codeshoppe.io">
              Powered By CodeShoppe Studios
            </Menu.Item>

          </Menu.Menu>   
        

      </div>
    )
  }
}

const Footerbody = styled.div `
  background: #98CC8A; //#FDF162
  font-size: 20px;
  space-between: 50px;

  display: flex;
  flex-direction: row;
  align-items: right;
`

const Subfooter = styled(Menu.Item)`
  background: #FDF162;
`


export default withRouter((Footer));
