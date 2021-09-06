import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const useLandingPage = () => {
    const data = useStaticQuery(
      graphql
      `{
          allContentfulLandingPageData {
            nodes {
              backgroundImage {
                file {
                  url
                }
              }
              featuredItems {
                title
                slug
                description {
                  description
                }
                image {
                  file {
                    url
                  }
                }
              }
            }
        	}
        }
      `
    );   
    const { backgroundImage, featuredItems } = data.allContentfulLandingPageData.nodes[0]
    return { backgroundImage, featuredItems };
}

export default useLandingPage
