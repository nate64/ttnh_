import React,  { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Container, Segment, Image, Hero, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Toshastore from '../images/Tosha_store.jpg'
import Sign from '../images/sign.jpg'

class Home extends Component {
  render() {
    return (
      <Container fluid>

        <Link to='./about'>
          <SButton>
            Come Check Us Out!
          </SButton>
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
        <Container>
          
        </Container>
      
      </Container>
    )
  }
}

const Homehero = styled.div`
  background-image: url(${Sign});  
  background-size: cover;
`

const SButton = styled.button`
  background: ${ props => props.cancel ? "grey" : "#f79233" };
  padding: ${props => props.logout ? "12px 67px" : "18px 25px"};
  color: white;
  font-size: 20px;
  font-family: 'Balthazar', serif !important;
  cursor: pointer;
  border: none;
  transition: background 0.2s ease;

  &:hover {
    background: #c7762a;
  }
  &:focus {
    outline: 0;
  }
`;

export default Home

// const Homehero = styled.div`
//   margin-top: 100px;
//   // padding: 100px;
//   background-image: url(${Toshastore});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `