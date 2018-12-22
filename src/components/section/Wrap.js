import styled from 'styled-components';

const Wrap = styled.div`
  max-width:1280px;
  height:300px;
  background:${({theme}) => theme.colors.light} 
  margin:0 auto;
`;
export default Wrap;