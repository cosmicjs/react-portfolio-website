import React, { Component } from 'react'
import styled from 'styled-components';


const Menu = styled.div`
    height: 31px;
    width: 31px;
    display: inline-block;
    cursor: pointer;
    z-index: 9900;
`;
const Bar1 = styled.div`
width: 30px;
height: 3px;
margin:6px 0;
transition: 0.4s;
border-radius: 0px;
font-size: .5px;
display: block;
background:black;
 transform:${(props) => props.val ? 'rotate(-45deg) translate(-5px, 3px)' : 'rotate(-0deg) translate(-0px, 0px)'}; 

`;
const Bar2 = styled.div`
width: 30px;
height: 3px;
background-color:black;
margin:6px 0;
transition: 0.4s;
border-radius: 0px;
font-size: .5px;
display: block;
opacity:${(props) => props.val ? '0' : '1'};
 
`;
const Bar3 = styled.div`
width: 30px;
height: 3px;
background-color:black
margin:6px 0;
transition: 0.4s;
border-radius: 0px;
font-size: .5px;
display: block;
transform:${(props) => props.val ? 'rotate(45deg) translate(-10px, -8px)' : 'rotate(-0deg) translate(-0px, 0px)'}; 
`;

const Change = styled.div`
    :Bar1{
        transform: rotate(-45deg) translate(-5px, 3px);
    }
    :Bar2{
        opacity: 1;
    }
    :Bar3{
        transform: rotate(45deg) translate(-10px, -8px);
    }


`;
// function Nav(props) {
//     console.log(props.val);
//   return (
//     <Menu onClick={props.handleMenu}>
//     <Bar1></Bar1>
//     <Bar2></Bar2>
//     <Bar3></Bar3>
//     </Menu>
//   )
// }
// export default Nav;


export default class Nav extends Component {
    state ={
        visable: false
    }
    handleMenu = () => {
        this.setState((prevState) => ({visable: !prevState.visable }));
        console.log(this.state.visable);
      }    
      
  render() {
    return (
            <Menu onClick={this.handleMenu}>
            <Bar1 val={this.state.visable}></Bar1>
            <Bar2 val={this.state.visable}></Bar2>
            <Bar3 val={this.state.visable}></Bar3>
            </Menu>
          )
  }
}







