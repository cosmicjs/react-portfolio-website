import styled  from 'styled-components';



const Card = styled.div`
    width:320px;
    height:400px;
    background:${({theme}) => theme.colors.lightOne};
    overflow:hidden;
    justify-self:center;


`;
export default Card;