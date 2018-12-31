import React, { Component } from 'react'
import styled from 'styled-components'

import Card from '../parts/Card';
import Img from '../parts/Figure';
import Anchor from './../parts/Anchor';
import { Link } from 'react-router-dom';


const GridContainer = styled.div`
    min-height:100%;
    display:grid;
    margin:150px auto;
    justify-items:center;
    grid-template-column:1fr;
    grid-template-rows:400px;
    grid-gap:10px;
${({theme}) => theme.media.mobile} {
   grid-template-columns:320px 320px;
   width:640px;
}
${({theme}) => theme.media.tablet} {
    grid-template-columns:320px 320px 320px;
    width:960px;
    
}
${({theme}) => theme.media.desktop} {
    grid-template-columns:320px 320px 320px 320px;
    width:1280px;
    margin:200px auto 450px auto;
}
`;
export default class PartGrid extends Component {
    state ={
        picture: []
    }
    componentDidMount = async() => {
        const slug = this.props.match.params.slug;

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
    return (
        <GridContainer column={true}>
        { this.state.picture.metadata && this.state.picture.metadata.images.map((item, index) => {
        return(
          <Card key={index}>
            <Img src={item.metadata.img.url} alt=""/>
            <Anchor as={Link} to={'/img/' + item.slug}>
            <i className="fa fa-link" aria-hidden="true"></i>
            </Anchor>
          </Card>
        )
       })}    
        </GridContainer>
    )
  }
}