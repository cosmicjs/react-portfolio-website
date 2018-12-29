import React, { Component } from 'react'
import styled from 'styled-components'

import Card from '../parts/Card';
import Img from '../parts/Figure';
import Anchor from './../parts/Anchor';


const GridContainer = styled.div`
max-width:1300px;
height: 2000px;
 //background-color: ${({theme}) => theme.colors.lightOne};  
color: ${({theme}) => theme.colors.dark};
display: grid;
margin:200px auto;
grid-gap:5px;
grid-template-columns: ${(props) => props.column ? 'repeat(auto-fit, minmax(320px, 1fr))' :' repeat(auto-fit, minmax(420px,1fr))' }; 
grid-template-rows:auto;
justify-items: center;
`;

const PartCard = styled.div`
    width:300px;
    height:400px;
    background:yellow;
`;
export default class PartGrid extends Component {
    
    state ={
        picture: []
    }
    componentDidMount = async() => {
        console.log(this.props);
        const slug = this.props.match.params.slug;
        console.log(slug);
        const Cosmic = require('cosmicjs')
        const api = Cosmic()
        const bucket = api.bucket({
        slug: 'ec055990-f24c-11e8-9231-9b47e8f95b7e'
        })
        const data = await bucket.getObject({
        slug: `${slug}`
        })
        this.setState({
            picture:data.object
        })
    }


  render() {
    this.state.picture && console.log("Data images", this.state.picture.metadata);
    return (

        <GridContainer>
        { this.state.picture.metadata && this.state.picture.metadata.images.map((item, index) => {
        return(
          <Card key={index}>
            <Img src={item.metadata.img.url} alt=""/>
          </Card>
        )
       })}
            
        </GridContainer>
    )
  }
}
