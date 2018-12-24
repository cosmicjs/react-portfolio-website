import React from 'react'
import styled from 'styled-components';
// import CategoryCard from './../parts/CategoryCard';
import H1 from './../headers/H1';
// import CaptionWrap from '../parts/Caption';

const ContainerCategory = styled.div`
    max-width:1300px;
    height:100%;
    // background: ${({theme}) => theme.colors.lightOne};
    background:blue;
    margin:0 auto;
    
`;
const CategoryCard = styled.div`
  display:grid;
  grid-template-columns:900px 400px;
  grid-template-rows:600px;
  width:100%;
  img{
    height:600px;
    width:100%;
    background:yellow;
  }
`;

const CaptionWrap = styled.div`
        background: ${({theme}) => theme.colors.light};
        width:100%;
        height:100%;
        position:relative;
`;
const Position = styled.div`
       background:${({theme}) => theme.colors.lightOne};
        position:absolute;
        top:60px;
        left:-150px;
        height:480px;
        width:550px;
        box-sizing:border-box;
        padding:50px;
`;

export default function Category(props) {
    console.log(props.category);
  return (
<ContainerCategory>
{props.category && props.category.map((item, index) => {
  return(
    <CategoryCard key={index}>
      <img src={item.metadata.img.url} alt="img"/>
        <CaptionWrap>   
         <Position>
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


