import styled from "styled-components";
import heroImage from '../../../images/hero-background@2x.png';

const Styled = {
  Main: styled.main`
  background-image: url(${heroImage});
  background-size: 100vw 100vh;
  font-family: 'Inter';
  height: 100%;
  width: 100%;

  @media(min-width: 768px) {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    width: 100vw;
  }
  `
};

export default Styled;