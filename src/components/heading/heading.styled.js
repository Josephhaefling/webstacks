import styled from "styled-components";

const Styled = {
  Heading: styled.section`
    color: ${(props) => props.color};
    h1 {
      font-size: 56px;
      margin: 0px;
    }
    h2 {
      font-size: 48px;
      margin: 16px 0px;
    }
    h3 {
      font-size: 36px;
      margin: 0;
    }
    h4 {
      font-size: 24px;
      margin: 0;
    }
    h5 {
      font-size: 18px;
      margin: 0;
    }
  `,
};

export default Styled;
