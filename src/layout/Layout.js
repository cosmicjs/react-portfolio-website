import React from 'react'

import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';

import { theme } from './../utils/theme';

const GlobalStyle = createGlobalStyle`
 body {
   padding: 0;
   margin 0;
   background:blue;
   font-family: Montserrat,'Segoe UI', sans-serif ;
   color:green;
  }
`;
export default function Layout({children}) {
  return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyle />
        {children}
        </>
    </ThemeProvider>
  
  )
}
