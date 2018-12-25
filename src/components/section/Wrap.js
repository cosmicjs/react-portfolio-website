import styled from 'styled-components';

const Wrap = styled.div`
  max-width:1200px;
  height:150px
  background:${({theme}) => theme.colors.light} 
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
export default Wrap;