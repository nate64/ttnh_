import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Grid } from 'semantic-ui-react'
import Barn from '../images/barn.jpg'

const contactgridcentered = () => (
  <Grid centered columns={4}>
    <Grid.Column>
      <h3>contact us info</h3>
    </Grid.Column>
    <Grid.Column>
      <h3>Google Map here</h3>
    </Grid.Column>
    
  </Grid>
)

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


// const PageContainer = styled.div`
//   background: #fffdd0;
  
//   // background-image: url(${Barn});
//   // background-position: center;
//   // background-size: contain;
//   // background-repeat: no-repeat;


// `


// export default Products