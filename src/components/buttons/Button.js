
import  styled  from 'styled-components';

 const Button = styled.button`
    background: ${({theme}) => theme.colors.dark}
    color: ${({theme}) => theme.colors.light}
    font-size: ${({theme}) => theme.fontWg.thin}
    padding:10px;
    height:50px;
    width:200px;
    border:1px solid black;
`;
export default Button;