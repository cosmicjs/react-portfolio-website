
import  styled  from 'styled-components';

 const Button = styled.button`
    background: ${({theme}) => theme.colors.light}
    color: ${({theme}) => theme.colors.darkOne}
    font-size: ${({theme}) => theme.fontWg.thin}
    font-size: 1em;
    padding:10px;
    border-radius:50px;
    height:40px;
    width:200px;
    border:1px solid ${({theme}) => theme.colors.darkOne};
    cursor:pointer;
    transition:all .7s ease;

    :hover{
        background: ${({theme}) => theme.colors.dark};
        color: ${({theme}) => theme.colors.light}
    }
`;
export default Button;
