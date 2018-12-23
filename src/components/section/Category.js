import React from 'react'
import styled from 'styled-components';

const ContainerCategory = styled.div`
    max-width:1300px;
    height:500px;
    background: ${({theme}) => theme.colors.lightOne};
    margin:0 auto;
    
`;


export default function Category() {
  return (
    <ContainerCategory>
        
    </ContainerCategory>
  )
}


