import styled from 'styled-components';

const CategoryCard = styled.div`
  display:grid;
  grid-template-columns:${(props) => props.index % 2 === 0 ? '850px 450px' : '450px 850px'};
  grid-template-rows:600px;
  width:100%;
  padding:10px 0;

  img{
    height:600px;
    width:100%;
    background:yellow;
    box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, .15);
    order:${(props) => props.index % 2 === 0 ? '1' : '2'}; 
    
  }
  
`;
export default CategoryCard;