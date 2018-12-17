import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Grid } from 'semantic-ui-react'

import Barn from '../images/barn.jpg'
import Map from '../images/maps_screenshot.png'

const contactgridcentered = () => (
  <Grid centered columns={2}>
    
    <Grid.Column>
      <LeftContainer>
        <h3>contact us info</h3>
      </LeftContainer>
    </Grid.Column>
    
    <Grid.Column>
      <RightContainer>
        <h3>Google Map here</h3>
      </RightContainer>
    </Grid.Column>
    
  </Grid>
)

const LeftContainer = styled.div`
  padding-top: 500px;
  background-image: url(${Barn});
  background-size: contain;
  background-repeat: no-repeat;
  
  // background: #fffdd0;
  // background-position: center;
`

const RightContainer = styled.div`
  padding-top: 500px;
  background-image: url(${Map});
  background-size: contain;
  background-repeat: no-repeat;

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