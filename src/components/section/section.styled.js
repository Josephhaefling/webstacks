import styled from "styled-components";

const Styled = {
  Section: styled.section`
    display: flex;
    padding: 0px 10px 25px 10px;

    @media (min-width: 400px) {
      padding: 0px 10px 100px 10px;
    }

    @media(min-width: 768px) {
      padding: 0px 50px 100px 50px;
    }

    @media (min-width: 1024px) {
      padding: 0px 100px 100px 100px;
    }

    @media (min-width: 1500px) {
      padding: 0px 255px 100px 255px;
    }
  `,
};

export default Styled;
