import React, { useState, useEffect } from 'react';
import Navigation from '../navigation/navigation.component';
import DropDownMenu from '../drop-down-menu/drop-down-menu.component';
import Section from '../section/section.component';
import Styled from './navbar.styled';
import bracketsLogo from '../../../images/brackets-logo.svg';
const NavBar = () => {
  const [screenWidth, setScreenWidth] = useState();

  const handleWindowSizeChange = () => {
    setScreenWidth(window.screen.width);
  }

  useEffect(() => {
    setScreenWidth(window.screen.width);
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);
  
  return (
    <Section>
      <Styled.NavBar>
        <Styled.LogoContainer>
          <img src={bracketsLogo} alt="Brackets logo"/>
        </Styled.LogoContainer>
          {screenWidth < 1000 ? (
              <Styled.NavigationContainer>
                <DropDownMenu />
              </Styled.NavigationContainer>
            ) : (
              <Styled.NavigationContainer>
                <Navigation />
              </Styled.NavigationContainer>
            )
        }
      </Styled.NavBar>
    </Section>
  )
}

export default NavBar;