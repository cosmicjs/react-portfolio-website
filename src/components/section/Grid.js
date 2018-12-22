import React from 'react'

import styled from 'styled-components';
import Card from '../parts/Card';


const GridContainer = styled.div`
max-width: 1280px;
height: 400px;
background-color: ${({theme}) => theme.colors.light};
color: ${({theme}) => theme.colors.dark};
display: grid;
justify-content: center;
align-items: center;
margin:0 auto;
grid-gap:5px;

`;

export default function Grid(props) {

  return (
   <GridContainer>
       {props.images && props.images.objects.map((item, index) => {
         console.log("work");
        return(
          <Card key={index}><img src={item.metadata.img.url} alt="img"/></Card>
         
        )
       })}
      
   </GridContainer>
  )
}
