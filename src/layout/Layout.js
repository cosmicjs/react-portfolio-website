import React from 'react'

import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { theme } from './../utils/theme';

const GlobalStyle = createGlobalStyle`
 body {
   padding: 0;
   box-sizing:border-box;
   margin 0;
   background:${({theme}) => theme.colors.light}
   font-family: Montserrat,'Segoe UI', sans-serif ;
   color:${({theme}) => theme.colors.dark}
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
