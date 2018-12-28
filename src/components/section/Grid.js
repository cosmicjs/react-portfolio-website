import React from 'react'

import styled from 'styled-components';
import Card from '../parts/Card';
import Img from '../parts/Figure';
import Anchor from './../parts/Anchor';

const GridContainer = styled.div`
max-width:1300px;
height: 100%;
// background-color: ${({theme}) => theme.colors.lightOne};  
color: ${({theme}) => theme.colors.dark};
display: grid;
margin:200px auto;
grid-gap:5px;
grid-template-columns: ${(props) => props.column ? 'repeat(auto-fit, minmax(320px, 1fr))' :' repeat(auto-fit, minmax(420px,1fr))' }; 
grid-template-rows:auto;
justify-items: center;
`;
export default function Grid(props) {
  
  return (
   <GridContainer column = {true}>
       {props.images && props.images.map((item, index) => {
        return(
          <div key={index}>
          <Card>
            <Img src={item.metadata.img.url} alt="img"/>
            <Anchor>
              <i className="fa fa-link" aria-hidden="true"></i>
            </Anchor>
            </Card>
          </div>
        )
       })}
      
   </GridContainer>
  )
}
