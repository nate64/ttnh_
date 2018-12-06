import React,  { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Segment, Image, Hero } from 'semantic-ui-react';
import Toshastore from '../images/Tosha_store.jpg'
// import Homehero from './hero'


class Home extends Component {
  render() {
    return (
      <Container>
        {/* <Homehero>
          <Segment basic>
          </Segment>
        </Homehero> */}
        <Image src={Toshastore} fluid>

        </Image>
      </Container>

      
      
    )
  }
}

const Homehero = styled.div`
  margin-top: 100px;
  // padding: 100px;
  background-image: url(${Toshastore});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const HomeImage = styled.image`

`



export default Home



{/* <Homehero imgSrc={Toshastore}/> */}