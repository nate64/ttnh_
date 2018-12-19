import React, { Component }  from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { withRouter, NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import smallLogo from '../images/ttnh_logo_small.png'

import Sign from '../images/sign.jpg'
import Mj from '../images/mj.jpg'

class NavBar extends Component {
  
  // navs = () => {
  //   return (
  //     //this doesnt show
  //     <Menu.Menu as={Background}>
  //       <Menu size='massive'>
  //         <NavLink to='/products'>
  //           <Menu.Item name='products'>
  //             Products
  //           </Menu.Item>
  //         </NavLink>
  //         <NavLink to='/about'>
  //           <Menu.Item name='about'>
  //             About
  //           </Menu.Item>
  //         </NavLink>
  //         <NavLink to='/contact'>
  //           <Menu.Item name='contact'>
  //             Contact
  //           </Menu.Item>
  //         </NavLink>
  //       </Menu>
  //     </Menu.Menu>
      
  //   )
  // }

  
  render() {
    return (
      
        // <Link to='/'>
        //   <Logo src={smallLogo} />
        // </Link> 
        <div>
          <Menu.Menu as={Background}>
            <Navbarlink to='./products'>
              <Menu.Item name='products'>
                <p>Products</p>
              </Menu.Item>
            </Navbarlink>
            <Navbarlink to='./about'>
              <Menu.Item name='about'>
                <p>About</p>
              </Menu.Item>
            </Navbarlink>
            <Navbarlink to='./contact'>
              <Menu.Item name='contact'>
                <p>Contact</p>
              </Menu.Item>
            </Navbarlink>
          </Menu.Menu>
        </div>
      
    )  
  }
}


const Background = styled.div `
  background-image: url(${Mj});  
  font-size: 50px;
  justify-content: space-evenly;
  display: flex;
  padding: 10px;
  
`

const Navbarlink = styled(NavLink)`
color: white;
// align-items: center;
// justify-content: center;
// color: orange;
// display: flex;
// flex-direction: row;
`

const MenuItem = styled.div`
  // display: flex;
  // justify-content: space-evenly;
  // flex-direction: row;
  // color: white;
  // justify-content: space-evenly;
  // // justify-content: center;
  // // margin-left: 20px;
  // // margin-right: 20px;
  // font-size: 50px;
  // display: flex;
  // align-items: center;
`

const Logo = styled.img`
  height: 200px;
  width: 300px;
  margin-left: 10px;
  margin-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default withRouter((NavBar));



// class Navbar extends Component {
//   render() {
//     return (
      

//         <Menu.Menu as={Background} fixed='top' position='right'>
//           <NavLink to='/'>
//             <Menu.Item>
//               <Logo src={smallLogo} />
//             </Menu.Item>
//           </NavLink>
        
//           <NavLink to='./products'>
//             <Menu.Item name='products'>
//               Products
//             </Menu.Item>
//           </NavLink>

//           <NavLink to='./about'>
//             <Menu.Item name='about'>
//               About
//             </Menu.Item>
//           </NavLink>

//           <NavLink to='./contact'>
//             <Menu.Item name='contact'>
//               Contact
//             </Menu.Item>
//           </NavLink>

//           <Menu.Menu position='right'>
//             <Menu.Item>
//               Test
//             </Menu.Item>
//           </Menu.Menu>
        
//         </Menu.Menu>
      
//     )
//   }
// }

// const Background = styled.div `
//   // background: #98CC8A;
//   background-image: url(${Sign});  
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   font-size: 50px;
//   space-between: 30px;
// `

// const Logo = styled.img`
//   height: 200px;
//   margin-left: 10px;
//   margin-right: 25px;
//   margin-top: 10px;
//   margin-bottom: 10px;
// `

