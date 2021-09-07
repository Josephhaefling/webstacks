import React from 'react';
import Text from '../text/text.component';
import Heading from '../heading/heading.component';
import Button from '../button/button.component';
import NavBar from "../navbar/navbar.component";
import Features from "../features/features.component";
import Card from "../card/card.component";
import useLandingPage from "../hooks/use-landing-page/use-landing-page.component";

import { Colors } from "../../../helpers/ui";
import Styled from './landing-page.styled';

const LandingPage = () => {
  //Contentful Data
  const data = useLandingPage()

  return (
    <Styled.Page >
      <NavBar />
      <Styled.TopSection>
        <Card.Body>
          <Styled.Card>
            <Card.Header>
              <Heading color={Colors.white} level={5}>
                AMERICA’S #1 RATED ADVENTURE PLATFORM
              </Heading>
              <Heading color={Colors.white} level={2}>
                Take control of your weekends
              </Heading>
              <Text color={Colors.white}>
                Find adveture anywhere.
              </Text>
            </Card.Header>
            <Card.Footer>
              <Styled.ButtonSection>
                <Button backgroundColor={Colors.blue} image="chevronRight" label="Get started" />
                <Button backgroundColor={Colors.gray} image="chevronRight" label="Request a demo" />
              </Styled.ButtonSection>
            </Card.Footer>
          </Styled.Card>
        </Card.Body>
      </Styled.TopSection>
      <Styled.BottomSection>
        <Features featuredItems={data.featuredItems} />
      </Styled.BottomSection>
    </Styled.Page>
  )
}

export default LandingPage;