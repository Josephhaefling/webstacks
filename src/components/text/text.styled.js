import styled from 'styled-components';
import { Colors } from "../../../helpers/ui";

const Styled = {
  Text: styled.p`
    color: ${props => props.color ? props.color : Colors.white};
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '18px'};
    font-weight: ${props => props.bold ? 700 : 400};
    margin: 14px 0px;
    `
}

export default Styled;
