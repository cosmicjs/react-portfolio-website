import styled  from 'styled-components';

const Center = styled.div`
    max-width:1100px;
    height:100%;
    margin:30px auto;
    padding:0 60px;
    box-sizing:border-box;
    font-size:${(props) => props.fs ? '2.1em' : '0.7em'}; 
    text-align:${(props) => props.center ? 'justify' : 'left'}; 
    ${({theme}) => theme.media.tablet} {
        margin:150px auto;
        font-size:${(props) => props.fs ? '2.3em' : '1em'}; 
       }
        
`;
export default Center;

