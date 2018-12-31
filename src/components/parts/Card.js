import styled  from 'styled-components';

const Card = styled.div`
    width:320px;
    height:400px;
    background:${({theme}) => theme.colors.lightOne};
    overflow:hidden;
    justify-self:center;
    transition:all .8s ease;
    cursor:pointer;
    position:relative;
    opacity:0.7;
    display:flex;
    justify-content:center;
    align-items:center;
    
    a{
        transform: translate(15px, -150%);
    }

    :hover{
        transform: translateY(-5px);
        opacity:1;
        
        
    }
    :hover a{
      transform:translate(15px, 20%);
    }

`;
export default Card;