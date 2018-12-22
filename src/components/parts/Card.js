import styled  from 'styled-components';



const Card = styled.div`
    width:280px;
    height:400px;
    background:${({theme}) => theme.colors.lightOne};
    overflow:hidden;


`;
export default Card;