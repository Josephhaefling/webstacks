import styled from "styled-components";

const Styled = {
  Card: styled.section`
    background-color: ${props => props.color};
    border-radius: 4px;
    height: 240px;
    width: 370px;
  `,

  Header: styled.section``,
  Body: styled.section``,
  Footer: styled.section``,
};

export default Styled;
