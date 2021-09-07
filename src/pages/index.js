import * as React from "react";
import LandingPage from "../components/landing-page/landing-page.component";
import "@fontsource/inter/";
import Styled from '../components/page-styles/index.styled';

const IndexPage = () => {
  return  (
    <Styled.Main>
      <LandingPage />
    </Styled.Main>
  )
}

export default IndexPage;
