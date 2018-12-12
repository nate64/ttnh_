import React, { Component } from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Sign from '../images/sign.jpg'

class Footer extends Component {
  render() {
    return(
      <div>
        <Menu.Menu as={Background}>
          
          <NavLink to='./about'>
            <Menu.Item name='about'>
              About
            </Menu.Item>
          </NavLink>
          <Menu.Item name='devlink'>
            <a href="https://www.codeshoppe.io">Powered By CodeShoppe Studios</a>
          </Menu.Item>
          
        </Menu.Menu>
      </div>
    )
  }
}

const Background = styled.div `
  //background: #98CC8A;
  background-image: url(${Sign}); 
  display: flex;
  flex-direction: row;
  align-items: right; 
  font-size: 20px;
  space-between: 30px;
`

export default withRouter((Footer));
