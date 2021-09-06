import styled from "styled-components";

const Styled = {
  Heading: styled.section`
    color: ${(props) => props.color};
    h1 {
      font-size: 56px;
      margin: 0px;
    }
    h2 {
      color: ${(props) => props.color};
      font-size: 48px;
      margin: 16px 0px;
    }
    h3 {
      color: ${(props) => props.color};
      font-size: 36px;
      margin: 0;
    }
    h4 {
      color: ${(props) => props.color};
      font-size: 24px;
      margin: 0;
    }
    h5 {
      color: ${(props) => props.color};
      font-size: 18px;
      margin: 0;
    }
  `,
};

export default Styled;
