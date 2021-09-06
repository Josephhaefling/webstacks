import * as React from "react";
import LandingPage from "../components/landing-page/landing-page.component";
import heroImage from '../../images/hero-background@2x.png';
import "@fontsource/inter/" 

const pageStyles = {
  border: '3px solid blue', 
  backdropFilter: 'brightness(40%)',
  backgroundImage: `url(${heroImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  fontFamily: 'Inter',
  height: '100vh',
}

const IndexPage = () => {
  return  (
    <main style={pageStyles} >
      <LandingPage />
    </main>
  )
}

export default IndexPage;
