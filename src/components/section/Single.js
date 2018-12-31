import React, { Component } from 'react'

import CategoryCard from './../parts/CategoryCard';
import CaptionWrap from '../parts/Caption';
import Button from './../buttons/Button';
import H1 from '../headers/H1';
import ContainerCategory from './../parts/Contain';
import Position from './../parts/PositionContainer';
import { Link } from 'react-router-dom';
import Par from './../parts/Paragraph';

export default class Single extends Component {
    state ={
        img: null
    }
    componentDidMount = async() => {
        const link = this.props.match.params.slug;

        const Cosmic = require('cosmicjs')
        const api = Cosmic()
        const bucket = api.bucket({
        slug: 'imageapp'
        })
        const data = await bucket.getObject({
        slug: `${link}`
        })
        this.setState({
            img:data.object
        })
    }
 
  render() {
    return (
    <ContainerCategory>
    <CategoryCard index={0}>
    {this.state.img && <img src={this.state.img.metadata.img.url} alt="img" index={0} /> }
        <CaptionWrap index={0}>   
         <Position index={0}>
         {this.state.img &&  <H1 isBig>{this.state.img.title}</H1>}
         {this.state.img &&  <Par  dangerouslySetInnerHTML={{__html:this.state.img.content}}></Par>}
         </Position>
        </CaptionWrap>
      </CategoryCard>
      <br/> <br/>
      <Link to={'/'}><Button >Go back</Button></Link>
    </ContainerCategory>
    )
  }
}
