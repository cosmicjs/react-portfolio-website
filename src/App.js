//PACKAGE IMPORT
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// COMPONENT IMPORTS


//CSS COMPONENT IMPORTS
import './font-awesome-4.7.0/css/font-awesome.min.css';
import Layout from './layout/Layout';
import Button from './components/buttons/Button';
import Grid from './components/section/Grid';
import Wrap from './components/section/Wrap';

import Category from './components/section/Category';



class App extends Component {

  state = {
    images: null,
    categories: null,
    hg:false
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
    document.addEventListener('scroll', () => {
      if(window.pageYOffset > 50 ) {
        
        console.log("work", window.pageYOffset);
        this.setState({
          hg: true
        })
        
        }
        else{
          this.setState({
            hg: false
          })
          
        }
    });
   
}
  handleMenu = () => {
    this.setState((prevProps) => ({visable: !prevProps.visable }));
  }    
  render() {
    return (
     
    <div className="App">
    <Layout>
      <Wrap hg={this.state.hg} />
     <BrowserRouter>
      <Switch>
        <Route path="/" exact
         render={(props) => <Category category={this.state.category}/>}
        />
        <Route path="/grid"
         render={(props) => <Grid {...props} images={this.state.images}/>} 
         />
      </Switch>
     </BrowserRouter>
    </Layout>
     </div>
    );
  }
}

export default App;
