import React, { Component } from 'react'
import styled from 'styled-components';
import posed from 'react-pose';
import { Link } from 'react-router-dom';

const Menu = styled.div`
    position:relative;
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
 transform:${({val}) => val ? 'rotate(-45deg) translate(-5px, 3px)' : 'rotate(-0deg) translate(-0px, 0px)'}; 
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
opacity:${({val}) => val ? '0' : '1'};
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
transform:${({val}) => val ? 'rotate(45deg) translate(-10px, -8px)' : 'rotate(-0deg) translate(-0px, 0px)'}; 
`;
const pOverlay = posed.div({
    true: {
       x: '0%',
       opacity:1,
       transition: { duration: 600 },
    },
    false: {
       x:'150%',
       opacity:0,
    },
});

const pOverlay2 = posed.ul({
    true: {
       x: 0,
       opacity:1,
       transition: { duration: 1200 },
    },
    false: {
       x:'150%',
       opacity:0,
    },
});
const Overlay = styled(pOverlay)`
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100%;
    z-index:100;
    background:${({theme}) => theme.colors.light}
    // display:${({val}) => val ? 'block' : 'none'};
`;
const ListMenu = styled(pOverlay2)`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    list-style-type:none;
    margin: 4%;
    li{
        font-size:4em;
        font-weight:${({theme}) => theme.fontWg.fat};
        transition: all 1s ease;
    :hover{
        color:${({theme}) => theme.colors.lightOne}
        transform: translateX(5px);
    }
}
`;
class Nav extends Component {
    state={
        visable: false
    }
    handleMenu = () => {
        this.setState((prevState) => ({visable: !prevState.visable }));
      }    
      
  render() {
    return (
        <Menu onClick={this.handleMenu}>
        <Overlay pose={this.state.visable ? 'true': 'false'}>
            <ListMenu  pose={this.state.visable ? 'true': 'false'}>
                <Link to={'/'} ><li>Home</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>
            </ListMenu>
        </Overlay>
        <Bar1 val={this.state.visable}></Bar1>
        <Bar2 val={this.state.visable}></Bar2>
        <Bar3 val={this.state.visable}></Bar3>
        </Menu>
      )
  }
}

 export default Nav;



