import styled from 'styled-components';

const ContainerCategory = styled.div`
  height:100%;
  max-width:640px; 
  margin:250px auto 150px auto; 
  box-sizing:border-box;
  a{
    padding-left:20px;
  }
  ${({theme}) => theme.media.mobile} {
     
  max-width:640px;   
  a{
    padding-left:0px;
  }
 }
 ${({theme}) => theme.media.tablet} {
  max-width:800px;   
  margin:250px auto;
 }
 ${({theme}) => theme.media.desktop} {
  max-width:1300px;
 } 
`;

export default ContainerCategory;