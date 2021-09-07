import styled from "styled-components";

const Styled = {
  NavBar: styled.section`
    display: flex;
    flex-direction: column;
    min-height: 115px; 
    width: 100%;

    @media(min-width: 768px) {
      flex-direction: row;
    }
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
    justify-content: center;
    width: 100%;
  `,
};

export default Styled;
