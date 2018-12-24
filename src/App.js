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
import Category from './components/section/Category';


class App extends Component {

  state = {
    images: null,
    categories: null
  }
  componentDidMount = async () => {
    const Cosmic = require('cosmicjs');
    const api = Cosmic();
    const bucket = api.bucket({
    slug: 'ec055990-f24c-11e8-9231-9b47e8f95b7e'
    })
    const data = await bucket.getObjects();
    const cat = data.objects.filter((item) => {
      return(
        item.type_slug === "categories"
      )
    });
    const img = data.objects.filter((item) => {
      return(
        item.type_slug === "images"
      )
    });
    this.setState({
      images:img,
      category: cat
    })
    console.log((this.state.images), (this.state.category));
}
      
  

  render() {
    return (
     
    <div className="App">
    <Layout>
      <Wrap>
      <H1 isBig={true}>Sublim</H1>
      </Wrap>
      <Category category={this.state.category}/>
      {/* <Grid  images={this.state.images}/> */}
    </Layout>
     </div>
    );
  }
}

export default App;
