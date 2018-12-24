import React from 'react'
import styled from 'styled-components';
import CategoryCard from './../parts/CategoryCard';
import H1 from './../headers/H1';
import CaptionWrap from '../parts/Caption';

const ContainerCategory = styled.div`
    max-width:1300px;
    height:100%;
    // background: ${({theme}) => theme.colors.lightOne};
 
    margin:0 auto;
    
`;
const Position = styled.div`
       background:${({theme}) => theme.colors.lightOne};
       transform: ${(props) => props.index % 2 === 0 ? 'translateX(-150px)' : 'translateX(150px)'}; 
        height:480px;
        width:550px;
        box-sizing:border-box;
        padding:50px;
        box-shadow: 11px 11px 14px 0 rgba(0, 0, 0, .15);
      
`;

export default function Category(props) {
    console.log(props.category);
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
         </Position>
        </CaptionWrap>
      </CategoryCard>
    
  )
})}
    </ContainerCategory>
  )
}


