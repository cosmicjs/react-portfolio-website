import React from 'react'
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
background-color:black;
margin:6px 0;
transition: 0.4s;
border-radius: 0px;
font-size: .5px;
display: block;

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
function Nav() {
  return (
    <Menu>
    <Bar1></Bar1>
    <Bar2></Bar2>
    <Bar3></Bar3>
    </Menu>
  )
}
export default Nav;






