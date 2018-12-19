import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Grid, Segment } from 'semantic-ui-react'

import Barn from '../images/barn.jpg'
import Map from '../images/maps_screenshot.png'

const contactgridcentered = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={2}>

      <Grid.Column>
        <LeftContainer fluid>
          <Container fluid>
            <Segment color='red'>
              <h3>contact us info</h3>
            </Segment>
            <Segment inverted color='black' floated='right'>
              <h3>Tosha's Tinctures and Herbs</h3>
              <h3>119 Illinois Ave. Ste A</h3>
            </Segment>
            <Segment basic>
              <h3>119 Illinois Ave. Ste A</h3>
            </Segment>
            <Segment basic>
              <h3>Council, ID 83612</h3>
            </Segment>
            <Segment basic>
              <h3>208-253-0288</h3>
            </Segment>
            <Segment basic>
              <h3>ttnhcouncil@gmail.com</h3>
            </Segment>
            <Segment basic>
              <h3>Hours: Tuesday - Friday 10-5; Saturday 11-2</h3>
              <h3>Closed Sunday & Monday</h3>
            </Segment>
            <Segment basic>
              <h3>Facebook Link</h3>
            </Segment>
          </Container>
        </LeftContainer>
      </Grid.Column>
    
      <Grid.Column>
        <RightContainer fluid>
          <h3>Google Map here</h3>
        </RightContainer>
      </Grid.Column>
    
    </Grid.Row>
  </Grid>
)

const LeftContainer = styled.div`
  // padding-top: 1000px;
  background-image: url(${Barn});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
`

const RightContainer = styled.div`
  padding-top: 500px;
  background-image: url(${Map});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
`

export default contactgridcentered


// class Products extends Component {
//   render() {
//     return (
//       <Container as={PageContainer} fluid>
//         <Grid>
//           <Grid.Row centered columns={2}>
//             <Grid.Column>
//               <h3>How to contact us:</h3>
//               <h3>Tosha's Tinctures & Herbs</h3>
//             </Grid.Column>
//             <Grid.Column>
//               <h3>Column 2</h3>
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>

//       </Container>
      
//     )
//   }
// }





// export default Products