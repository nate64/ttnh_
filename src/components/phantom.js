import React, { Component } from 'react'
import { Menu, Header, Container } from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'
import styled from 'styled-components'

class Phantom extends Component {
  render() {
    return(
      <div as={Phantomstyle}>
      </div>
    )
  }
}

const Phantomstyle = styled.div`
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
`

export default withRouter((Phantom));







