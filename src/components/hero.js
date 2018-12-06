import React from 'react'
import styled from 'styled-components'

class Homehero extends React.Component {
  render() {
    return (
      <Homeheroimage
        src={this.props.imgSrc}
        >
      </Homeheroimage>
    )
  }
}

const Homeheroimage = styled.div `
  background-image: url('../images/Tosha_store.jpg)
  background: ${ props => `url(${props.src})`}
`

export default Homehero