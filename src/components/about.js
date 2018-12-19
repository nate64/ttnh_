import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Grid, Segment } from 'semantic-ui-react'

import Tosha from '../images/Tosha_store.jpg'

const aboutgrid = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={2}>

      <Grid.Column>
        <LeftContainer fluid>
          <Container fluid>
            <Segment textAlign='center' basic>
            <h2>We sell bulk herbs, medicinal tinctures, oils, 
            herbal capsules, herbal tea, and herbal supplements. 
            We do mail orders too.</h2>
            </Segment>
          </Container>
        </LeftContainer>
      </Grid.Column>

      <Grid.Column>
        <RightContainer fluid>
          <h3>Tosha's pic here</h3>
        </RightContainer>
      </Grid.Column>

    </Grid.Row>
  </Grid>
)

const LeftContainer = styled.div`

`

const RightContainer = styled.div`
  padding-top: 500px;
  background-image: url(${Tosha});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
`

export default aboutgrid




// class About extends Component {
//   render() {
//     return (
//       <p>This is the about page</p>
//     )
//   }
// }