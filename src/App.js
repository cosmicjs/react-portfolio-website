//PACKAGE IMPORT
import React, { Component } from 'react';
import styled from 'styled-components'

//CSS IMPORTS
import './font-awesome-4.7.0/css/font-awesome.min.css';
import Layout from './layout/Layout';
import Button from './components/buttons/Button';
import Grid from './components/section/Grid';
// COMPONENT IMPORTS


const H1 = styled.h1 `
  color:red;
  font-size: ${(props) => props.isBig ? '5em' : '1em'}; 
  margin: 0 auto;
`;
const Wrap = styled.div`
  max-width:1280px;
  height:300px;
  background:green;
  margin:0 auto;
`;


class App extends Component {


  render() {
    return (
    <div className="App">
    <Layout>
      <Wrap>
      <H1 isBig={true}>Hello</H1>
      <Button>Hello</Button>
      </Wrap>
      <Grid/>
    </Layout>
     
     </div>
    );
  }
}

export default App;
