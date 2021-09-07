import styled from "styled-components";

const Styled = {
  NavBar: styled.section`
    display: flex;
    flex-direction: row;
    min-height: 115px; 
    width: 100%;
  `,

  LogoContainer: styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100%;

    @media(min-width: 1024px) {
      justify-content: normal;
    }
    
    img {
      height: 24px;
    }
  `,

  NavigationContainer: styled.section`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    width: 100%;

    @media(min-width: 1024px) {
      justify-content: center;
      margin-top: 0px;
    }
  `,
};

export default Styled;
