import styled from 'styled-components';

const Styled = {
  Text: styled.p`
    color: ${props => props.color};
    font: 'inter';
    font-size: 18px;
    font-weight: ${props => props.bold ? 700 : 400};
    `
}

export default Styled;
