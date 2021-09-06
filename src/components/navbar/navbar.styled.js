import styled from "styled-components";

const Styled = {
  NavBar: styled.section`
    display: flex;
    min-height: 115px; 
    width: 100%;
  `,

  LogoContainer: styled.section`
    align-items: center;
    display: flex;
    width: 40%;

    img {
      height: 24px;
    }
  `,

  NavigationContainer: styled.section`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `,
};

export default Styled;
