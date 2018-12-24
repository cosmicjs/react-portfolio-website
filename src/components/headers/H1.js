import styled from 'styled-components';

const H1 = styled.h1 `
  color:${({theme}) => theme.colors.dark}
  font-size: ${(props) => props.isBig ? '5em' : '1em'}; 
  margin: 0 auto;
  
`;

export default H1;