import React from 'react';
import Card from '../card/card.component';
import Heading from '../heading/heading.component';
import Text from '../text/text.component';
import Button from '../button/button.component';
import Styled from './features.styled';

import { Colors } from "../../../helpers/ui";

const Features = ({ featuredItems }) => {
  //Create array of feature Cards
  const getFeaturedItems = () => (
    featuredItems.map(item => {
      return (
        <Styled.Card color={Colors.white} key={item.title} >
          <Styled.CardHeader>
            <Styled.ImageContainer id={item.slug}>
              <img src={item.image.file.url} />
            </Styled.ImageContainer>
          </Styled.CardHeader>
          <Styled.CardBody>
            <Heading color={Colors.black} level={5}>
              {item.title}
            </Heading>
            <Text color={Colors.black}>
              {item.description.description}
            </Text>
          </Styled.CardBody>
          <Styled.CardFooter>
            <Button 
              color={Colors.orange}
              image="chevronRight" 
              label="Learn More" 
            />
          </Styled.CardFooter>
        </Styled.Card>
      )
    })
  )
  //Array of feature cards to be rendered    
  const allItems = getFeaturedItems();

  return (
    <Styled.Features>
      {allItems}
    </Styled.Features>
  )
}

export default Features;