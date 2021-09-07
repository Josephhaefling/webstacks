import styled from "styled-components";

const Styled = {
  Card: styled.section`
    background-color: ${props => props.color};
    border-radius: 4px;
    margin-bottom: 25px;
    width: 100%;
  `,

  Header: styled.section``,
  Body: styled.section``,
  Footer: styled.section``,
};

export default Styled;
