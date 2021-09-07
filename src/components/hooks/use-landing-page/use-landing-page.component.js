import { useStaticQuery, graphql } from "gatsby";

const useLandingPage = () => {

  //TODO make the api pretty
    const data = useStaticQuery(
      graphql
      `{
          allContentfulLandingPageData {
            nodes {
              featuredItems {
                slug
                title
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
