
import React from 'react'
import styled from 'styled-components';


const FootWrap = styled.div`
    width:100%;
    height:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    i{
        margin:6px;
        cursor:pointer;
    }
    span{
        display:flex;
        justify-content:center;
        align-items:center;
    }

`;



export default function Footer() {
  return (
      <FootWrap>
         <span>
        <i class="fa fa-github fa-lg" aria-hidden="true"></i> 
         <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
         <i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
         <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
         </span>
         <span>Proudly powered by <a href="https://cosmicjs.com/"> Cosmic JS</a></span>
      </FootWrap>
  
  )
}
