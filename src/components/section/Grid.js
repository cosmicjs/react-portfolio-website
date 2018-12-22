import React from 'react'

import styled from 'styled-components';
import Card from '../parts/Card';


const GridContainer = styled.div`
max-width: 1280px;
height: 400px;
background-color: ${({theme}) => theme.colors.light};
color: ${({theme}) => theme.colors.dark};
display: flex;
justify-content: center;
align-items: center;
margin:0 auto;

`;

export default function Grid() {
  return (
   <GridContainer>
       <Card></Card>
   </GridContainer>
  )
}
