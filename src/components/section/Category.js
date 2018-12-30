import React from 'react'
import styled from 'styled-components';
import CategoryCard from './../parts/CategoryCard';
import CaptionWrap from '../parts/Caption';
import Button from './../buttons/Button';
import H1 from '../headers/H1';
import { Link } from 'react-router-dom'
const ContainerCategory = styled.div`
    max-width:1300px;
    height:100%;
    margin:150px auto;    
  
      
   }
`;
const Position = styled.div`

       background:${({theme}) => theme.colors.light};
      //  transform: ${(props) => props.index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)'}; 
        height:450px;
        left:${(props) => props.index % 2 === 0 ? '-100px' : '100px'};
        width:500px;
        box-sizing:border-box;
        padding:0 50px;
        position:relative;
        box-shadow: ${(props) => props.index % 2 === 0 ? ' -9px 11px 14px 0 rgba(0, 0, 0, .15)' : ' 11px 11px 14px 0 rgba(0, 0, 0, .15)'}; 
        ::before{
          content:'';
          height:100px;
          position:absolute;
          width:100px;
          top:0;
          right:${(props) => props.index % 2 === 0 ? '0' : '350px'}; 
          border-right:${(props) => props.index % 2 === 0 ? '1px solid black;' : 'none'}; 
          border-left:${(props) => props.index % 2 !== 0 ? '1px solid black;' : 'none'}; 
          border-top:1px solid black;
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


