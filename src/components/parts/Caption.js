import styled from 'styled-components';

const CaptionWrap = styled.div`
        background: ${({theme}) => theme.colors.light};
        width:100%;
        height:100%;
        position:relative;
        order:${(props) => props.index % 2 === 0 ? '2' : '1'};
        display:flex;
        justify-content:center;
        align-items:center; 
      
      
`;

export default CaptionWrap;