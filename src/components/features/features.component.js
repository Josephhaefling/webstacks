import React from 'react';
import Card from '../card/card.component';
import Heading from '../heading/heading.component';
import Text from '../text/text.component';
import Button from '../button/button.component';
import Styled from './features.styled';

import { Link, useStaticQuery, graphql } from "gatsby";

const Features = () => {
  
  const data = useStaticQuery(
      graphql`
        {
        	allContentfulLandingPageData{
        		edges {
        			node {
        				featuredItems {
        					title
                  slug
                  description {
        						description
                  } 
                  image {
        						file {
        						  url
        						  fileName
        						  contentType
        						}
                  }
                }
              }
            }
        	}
        }
      `
    )
    const featuredItems = data.allContentfulLandingPageData.edges[0].node.featuredItems;
    const getFeaturedItems = () => (
      featuredItems.map(item => {
        console.log(item)
        return (
          <Card key={item.title} >
            <Card.Header>
              <img src={item.image.file.url} />
            </Card.Header>
            <Card.Body>
              <Heading color='#333' level={2}>
               {item.title}
              </Heading>
              <Text color='#333'>
                {item.description.description}
              </Text>
            </Card.Body>
            <Card.Footer>
              <Button color='#333' image="chevronRight" label="Request a demo" />
            </Card.Footer>
          </Card>
        )
      })
    )
    
    const allItems = getFeaturedItems();



  return (
    <Styled.Features>
      {allItems}
    </Styled.Features>
  )
}

export default Features;