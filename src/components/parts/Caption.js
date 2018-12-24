import styled from 'styled-components';

const CaptionWrap = styled.div`
        background: ${({theme}) => theme.colors.light};
        position:relative;
        top:0;
        right:0;
        border:1px solid red;
        width:500px;
        height:500px;
`;

export default CaptionWrap;