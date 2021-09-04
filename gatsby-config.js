module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "webstacks-tech-challenge",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CFPAT-E8SO0F3B1rV5K8rnhes7dJSw8r3m6w_bfBqrEL9ClR0",
        spaceId: "2o00sbq4tc8r",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
