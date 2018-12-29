import styled from 'styled-components';
import H2 from '../headers/H2';
import React from 'react'
import Nav from './Nav';
const Wraps = styled.div`
  width:100vw;
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
    margin:10px auto;
    justify-content:space-between;
    align-items:center;
    padding:0 30px ;
    box-sizing:inherit;
  }
  i{
    display:flex
    justify-content:center;
    // position:absolute;
    // bottom:5%;
    // left:0;
    // right:0;
    
  }
`;
const Name = styled.div`
  font-size:5em;
  font-weight:700;
  margin:0 auto;
  max-width:1200px;
  text-transform:uppercase;
  display:flex;
  justify-content:center;
  align-items:center;
  height:70%;
  position:relative;
  ::before{
    content:' \f030 ';
    font-family:FontAwesome;
    height:70px;
    color:gray;
    
  }

`;
export default function Wrap(props) {
  console.log("props",props);
  return (
   <Wraps hg={props.hg}>
    <span>
      <H2>JohnDoe</H2>
      <Nav  />
      </span>
    <Name hg={props.hg}> Photograph</Name>
    <i className="fa fa-angle-down fa-4x" aria-hidden="true"></i>
   </Wraps>
  )
}

