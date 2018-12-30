import styled from 'styled-components';
import H2 from '../headers/H2';
import React from 'react'
import Nav from './Nav';


const Wraps = styled.div`
  width:100%;
  height:100vh;
  position:fixed;
  display:${(props) => props.hg ? 'none' :'block' }; 
  top:0;
  left:0;
  z-index:1000;
  box-sizing:border-box;
  background:${({theme}) => theme.colors.light} 
  span{
    display:flex;
    max-width:1200px;
    margin:20px auto;
    justify-content:space-between;
    align-items:center;
    padding:0 30px ;
    box-sizing:inherit;
  }
  i{
    display:flex
    justify-content:center;  
    position:absolute;
    bottom:5%;
    left:0;
    right:0; 
  }
`;
const Name = styled.img`
  margin:0 auto;
  width:100%;
  padding:30px 9%;
  box-sizing:border-box;
  text-transform:uppercase;
  display:flex;
  justify-content:center;
  align-items:center;
  height:70%;
  position:relative;
`;
export default function Wrap(props) {
  return (
   <Wraps hg={props.hg}>
    <span>
      <H2>JohnDoe</H2>
      <Nav  />
      </span>
    <Name hg={props.hg} src="/logo.svg" alt="img"/> 
    <i className="fa fa-angle-down fa-4x" aria-hidden="true"></i>
   </Wraps>
  )
}

