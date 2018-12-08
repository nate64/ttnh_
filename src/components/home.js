import React,  { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Segment, Image, Hero, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Toshastore from '../images/Tosha_store.jpg'
import Sign from '../images/sign.jpg'

class Home extends Component {
  render() {
    return (
      <Container>
      
        <Link to='./about'>
          <Button>
            Come Check Us Out!
          </Button>
        </Link>
      
        <Image src={Toshastore}>
        </Image>

        <Image src={Sign}>
        </Image>
      


        <Container>
          <Segment>
            <Homehero>
            </Homehero>
          </Segment>
        </Container>
      
      </Container>
    )
  }
}

const Homehero = styled.div`
  background-image: url(${Sign});  
  background-size: cover;
`



export default Home

// const Homehero = styled.div`
//   margin-top: 100px;
//   // padding: 100px;
//   background-image: url(${Toshastore});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `