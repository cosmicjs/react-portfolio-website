
import styled from 'styled-components';

const Img = styled.img`
object-fit: cover;
width: ${(props) => props.responsive ? '100%' : ''};
`;
export default Img;