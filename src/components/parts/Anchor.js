import styled from 'styled-components';
const Anchor = styled.span`
    position:absolute;
    top:0;
    left:0;
    z-index:100;
    height:50px;
    width:50px;
    display:flex;
    justify-content:center;
    color:${({theme}) => theme.colors.dark};
    border:1px solid ${({theme}) => theme.colors.dark}
    border-radius:50%;
    align-items:center;
    transition:all .8s ease;
    text-decoration:none;
`;
export default Anchor;