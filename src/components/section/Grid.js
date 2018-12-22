import React from 'react'

import styled from 'styled-components';
import Card from '../parts/Card';
import Img from './Figure';


const GridContainer = styled.div`
max-width:1300px;
height: 100%;
background-color: ${({theme}) => theme.colors.lightOne};  -
color: ${({theme}) => theme.colors.dark};
display: grid;
margin:0 auto;
grid-gap:5px;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
grid-template-rows:auto;
justify-items: center;

`;

export default function Grid(props) {

  return (
   <GridContainer>
       {props.images && props.images.objects.map((item, index) => {
         console.log("work");
        return(
          <Card key={index}><Img src={item.metadata.img.url} alt="img"/></Card>
         
        )
       })}
      
   </GridContainer>
  )
}
