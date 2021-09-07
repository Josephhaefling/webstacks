import React from 'react';
import Navigation from '../navigation/navigation.component';
import Section from '../section/section.component';
import Styled from './navbar.styled';
import bracketsLogo from '../../../images/brackets-logo.svg';

const NavBar = () => {
  return (
    <Section>
      <Styled.NavBar>
        <Styled.LogoContainer>
          <img src={bracketsLogo} alt="Brackets logo"/>
        </Styled.LogoContainer>
        <Styled.NavigationContainer>
          <Navigation />
        </Styled.NavigationContainer>
      </Styled.NavBar>
    </Section>
  )
}

export default NavBar;