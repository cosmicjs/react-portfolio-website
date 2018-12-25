import React from 'react'
import styled from 'styled-components';
import CategoryCard from './../parts/CategoryCard';
import H1 from './../headers/H1';
import CaptionWrap from '../parts/Caption';
import Button from './../buttons/Button';

const ContainerCategory = styled.div`
    max-width:1300px;
    height:100%;
    // background: ${({theme}) => theme.colors.lightOne};
    margin:0 auto;
 
    
`;
const Position = styled.div`
       background:${({theme}) => theme.colors.light};
      //  transform: ${(props) => props.index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)'}; 
        height:450px;
        left:${(props) => props.index % 2 === 0 ? '-100px' : '100px'};
        width:500px;
        box-sizing:border-box;
        padding:50px;
        position:absolute;
        box-shadow: ${(props) => props.index % 2 === 0 ? ' -9px 11px 14px 0 rgba(0, 0, 0, .15)' : ' 11px 11px 14px 0 rgba(0, 0, 0, .15)'}; 
      
`;

export default function Category(props) {
  
  return (
<ContainerCategory>
{props.category && props.category.map((item, index) => {
  return(
    <CategoryCard key={index} index={index}>
      <img src={item.metadata.img.url} alt="img" index={index} />
        <CaptionWrap index={index}>   
         <Position index={index}>
            <H1 isBig>{item.title}</H1>
            <p>{item.content}</p>
            <Button>See more</Button>
         </Position>
        </CaptionWrap>
      </CategoryCard>
    
  )
})}
    </ContainerCategory>
  )
}


