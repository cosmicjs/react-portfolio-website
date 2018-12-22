//PACKAGE IMPORT
import React, { Component } from 'react';
import styled from 'styled-components'

// COMPONENT IMPORTS


//CSS COMPONENT IMPORTS
import './font-awesome-4.7.0/css/font-awesome.min.css';
import Layout from './layout/Layout';
import Button from './components/buttons/Button';
import Grid from './components/section/Grid';
import Wrap from './components/section/Wrap';
import H1 from './components/headers/H1';





class App extends Component {


  render() {
    return (
    <div className="App">
    <Layout>
      <Wrap>
      <H1 isBig={true}>Hello</H1>
      <Button>Find out more</Button>
      </Wrap>
      <Grid/>
    </Layout>
     
     </div>
    );
  }
}

export default App;
