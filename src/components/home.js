import React,  { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Grid, Container, Segment, Image, Hero, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import Toshastore from '../images/Tosha_store.jpg'
import Sign from '../images/sign.jpg'
import smallLogo from '../images/ttnh_logo_nobackground.png'


const homegrid = () => (
  <div>

    <Grid divided='vertically'>
      <Grid.Row columns={12}>

      <Grid.Column>
        <Container>
        <Link to='/'>
          <Logo src={smallLogo} />
        </Link> 
        </Container>
      </Grid.Column>


      <Grid.Column>

      </Grid.Column>

      </Grid.Row>
    </Grid>


    <Container>

    </Container>
  </div>
)





const Homehero = styled.div`
  background-image: url(${Sign});  
  background-size: cover;
`

const Logo = styled.img`
  height: 501px;
  width: 397px;
  margin-left: 10px;
  margin-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
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

export default homegrid

// const Homehero = styled.div`
//   margin-top: 100px;
//   // padding: 100px;
//   background-image: url(${Toshastore});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `

//class Home extends Component {
  //   render() {
  //     return (
  //       <Container fluid>
  
  //         <Link to='./about'>
  //           <SButton>
  //             Come Check Us Out!
  //           </SButton>
  //         </Link>
        
  //         <Image src={Toshastore}>
  //         </Image>
  
  //         <Image src={Sign}>
  //         </Image>
        
  //         <Container>
  //           <Segment>
  //             <Homehero>
  //             </Homehero>
  //           </Segment>
  //         </Container>
  //         <Container>
  //           <Link to='/'>
  //             <Logo src={smallLogo} />
  //           </Link> 
  //         </Container>
        
  //       </Container>
  //     )
  //   }
  // }