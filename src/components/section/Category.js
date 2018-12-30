import React from 'react'
import styled from 'styled-components';
import CategoryCard from './../parts/CategoryCard';
import CaptionWrap from '../parts/Caption';
import Button from './../buttons/Button';
import H1 from '../headers/H1';
import { Link } from 'react-router-dom'
const ContainerCategory = styled.div`
  height:100%;
  margin:150px auto; 


  ${({theme}) => theme.media.mobile} {
     
  max-width:600px;   
 }
 ${({theme}) => theme.media.tablet} {
  max-width:800px;   
 }
 ${({theme}) => theme.media.desktop} {
  max-width:1300px;
 } 
`;
const Position = styled.div`
      background:${({theme}) => theme.colors.light};
      box-sizing:border-box;
      padding:0 50px;
     
       
        ${({theme}) => theme.media.mobile} {
          height:250px;
          width:400px;
          position:relative;
          box-shadow: ${(props) => props.index % 2 === 0 ? ' -9px 11px 14px 0 rgba(0, 0, 0, .15)' : ' 11px 11px 14px 0 rgba(0, 0, 0, .15)'}; 
          left:${(props) => props.index % 2 === 0 ? '-100px' : '100px'};
          :before{
            right:${(props) => props.index % 2 === 0 ? '0' : '200px'};
            content:'';
            height:100px;
            position:absolute;
            width:100px;
            top:0;
            border-right:${(props) => props.index % 2 === 0 ? '1px solid black;' : 'none'}; 
            border-left:${(props) => props.index % 2 !== 0 ? '1px solid black;' : 'none'}; 
            border-top:1px solid black; 
          }   
       
       }
       ${({theme}) => theme.media.tablet} {
        height:300px;
          :before{
            right:${(props) => props.index % 2 === 0 ? '0' : '200px'}; 
          }   
       }
       ${({theme}) => theme.media.desktop} {
        height:450px;
        width:550px;
          ::before{
            right:${(props) => props.index % 2 === 0 ? '0' : '350px'}; 
          } 
       } 
`;

export default function Category(props) {
  console.log("Props category", props);
return (
<ContainerCategory>
{props.category && props.category.map((item, index) => {
  return(
    <CategoryCard key={index} index={index + 1}>
      <img src={item.metadata.img.url} alt="img" index={index + 1} />
        <CaptionWrap index={index + 1}>   
         <Position index={index + 1}>
            <H1 isBig>{item.title}</H1>
            <p>{item.content}</p>
            <Link to={'/' + item.slug}><Button  >See more</Button> </Link>
         </Position>
        </CaptionWrap>
      </CategoryCard>
      )
    })}
    </ContainerCategory>
  )
}


