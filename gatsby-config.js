const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "webstacks-tech-challenge",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
