import styled from 'styled-components';

const Position = styled.div`
background:${({theme}) => theme.colors.light};
box-sizing:border-box;
padding:0 20px;

 
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
  padding:0 40px;
  width:500px;
    :before{
      right:${(props) => props.index % 2 === 0 ? '0' : '250px'}; 
    }   
 }
 ${({theme}) => theme.media.desktop} {
  height:450px;
  width:550px;
  padding:0 50px;
  h1{
    margin-bottom:60px;
  }
    ::before{
      right:${(props) => props.index % 2 === 0 ? '0' : '350px'}; 
    } 
 } 
`;

export default Position;