import styled from "styled-components";

const Styled = {
  Navigation: styled.section`
    display: flex;
    flex-direction: column;

    @media(min-width: 1000px) {
      flex-direction: row;
    }

    button {
      margin-top: 15px;
    }
  `,
};

export default Styled;
