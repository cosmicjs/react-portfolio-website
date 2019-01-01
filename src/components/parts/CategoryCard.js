import styled from 'styled-components';

const CategoryCard = styled.div `
  display:grid;
  width:100%;
  padding:10px 0;
  grid-template-columns: minmax(320px, 640px);
  img{
    width:100%;
    height:auto;
    object-fit: cover;

  }

  ${({theme}) => theme.media.mobile} {
    grid-template-columns:${(props) => props.index % 2 === 0 ? '390px 250px' : '250px 390px'};
  font-size:0.6em;
  grid-template-rows:300px;
  img{
  
    height:300px;
    width:100%;
    background:yellow;
    box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, .15);
    order:${(props) => props.index % 2 === 0 ? '1' : '2'};    
  }
 }
 ${({theme}) => theme.media.tablet} {
  grid-template-columns:${(props) => props.index % 2 === 0 ? '550px 350px' : '350px 550px'};
  font-size:0.8em;
  grid-template-rows:400px;
  img{
  
    height:400px;
    width:100%;
    background:yellow;
    box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, .15);
    order:${(props) => props.index % 2 === 0 ? '1' : '2'}; 
     
 }
 ${({theme}) => theme.media.desktop} {
  display:grid;
  font-size:1.1em;
  grid-template-columns:${(props) => props.index % 2 === 0 ? '850px 450px' : '450px 850px'};
   grid-template-rows:600px;
  width:100%;
  
   img{
     height:600px; 
     
   }
 }
  
`;
export default CategoryCard;