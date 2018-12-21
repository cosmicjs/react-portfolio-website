//PACKAGE IMPORT
import React, { Component } from 'react';
import styled from 'styled-components'

//CSS IMPORTS
import './font-awesome-4.7.0/css/font-awesome.min.css';
import Layout from './layout/Layout';
import Button from './components/buttons/Button';
// COMPONENT IMPORTS


const H1 = styled.h1 `
  color:red;
  font-size: ${(props) => props.isBig ? '5em' : '1em'}; 
`;



class App extends Component {
  render() {
    return (
    <div className="App">
    <Layout>
      <H1 isBig={true}>Hello</H1>
      <Button>Hello</Button>
    </Layout>
     
     </div>
    );
  }
}

export default App;
