
import React from 'react'
import styled from 'styled-components';


const FootWrap = styled.div`
    width:100%;
    height:350px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    a{
        color:#29AAE1;
        text-decoration:none;
    }
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
        <i className="fa fa-github fa-lg" aria-hidden="true"></i> 
         <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
         <i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
         <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
         </span>
         <span>Proudly powered by: <a href="https://cosmicjs.com/"> Cosmic JS </a>
         <img  width="auto" height="20px" src="/cosmic.svg" alt="cosmic_logo"/>
         </span>
      </FootWrap>
  
  )
}
