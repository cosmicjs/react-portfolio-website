//PACKAGE IMPORT
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//CSS COMPONENT IMPORTS
import './font-awesome-4.7.0/css/font-awesome.min.css';
import Layout from './layout/Layout';
import Wrap from './components/section/Wrap';
import Category from './components/section/Category';
import PartGrid from './components/section/PartGrid';
import Contact from './components/page/Contact';
import Single from './components/section/Single';
import Footer from './components/section/Footer';
import Center from './components/parts/Center';

class App extends Component {
  state = {
    category:null,
    hg:false
  }
  componentDidMount = async () => {
    const Cosmic = require('cosmicjs');
    const api = Cosmic();
    const bucket = api.bucket({
     slug: process.env.REACT_APP_COSMIC_BUCKET || 'imageapp',
     read_key: process.env.REACT_APP_COSMIC_READ_KEY || ''
    })
    const data = await bucket.getObjects({
      type: 'categories'
    })
    this.setState({
      category: data.objects,
    })
    document.addEventListener('scroll', () => {
      if(window.pageYOffset > 50 ) {
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
    console.log(this.state.category);
    return (
    <div className="App">
    <Layout>
    <BrowserRouter>
    <>
      <Wrap hg={this.state.hg} />
      <Switch>
        <Route path="/" exact render={(props) => <Category category={this.state.category}/>}/>  
        <Route path='/contact' exact component={Contact}  />
        <Route path='/img/:slug' component={Single} exact  />
        <Route path='/:slug' component={PartGrid} exact  />
      </Switch>
      </>
     </BrowserRouter>
     <Center fs> " A portfolio is a set of pictures by someone, or photographs of examples of their work, which they use when entering competitions or applying for work. "</Center>
     <Footer/>
    </Layout>
     </div>
    );
  }
}

export default App;
