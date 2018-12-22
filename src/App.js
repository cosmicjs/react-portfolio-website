//PACKAGE IMPORT
import React, { Component } from 'react';


// COMPONENT IMPORTS


//CSS COMPONENT IMPORTS
import './font-awesome-4.7.0/css/font-awesome.min.css';
import Layout from './layout/Layout';
import Button from './components/buttons/Button';
import Grid from './components/section/Grid';
import Wrap from './components/section/Wrap';
import H1 from './components/headers/H1';





class App extends Component {

  state = {
    images: null
  }
  componentDidMount = async () => {
    const Cosmic = require('cosmicjs');
    const api = Cosmic();
    const bucket = api.bucket({
    slug: 'ec055990-f24c-11e8-9231-9b47e8f95b7e'
    })
    const data = await bucket.getObjects({
      type: 'images'
})
this.setState({
  images:data
})

console.log(data);
  }

  render() {
    return (
    <div className="App">
    <Layout>
      <Wrap>
      <H1 isBig={true}>Hello</H1>
      <Button>Find out more</Button>
      </Wrap>
      <Grid  images={this.state.images}/>
    </Layout>
     </div>
    );
  }
}

export default App;
