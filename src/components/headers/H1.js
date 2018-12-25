import styled from 'styled-components';

const H1 = styled.h1 `
  color:${({theme}) => theme.colors.dark}
  font-size: ${(props) => props.isBig ? '4em' : '1em'}; 

  
`;

export default H1;