require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
}

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: `NEUROSPORT`,
    description: `Naukowa wiedza w przystępnej formie`,
    author: `@psikos`,
    siteUrl: `https://neurosport.pl`,
    image:
      "https://raw.githubusercontent.com/psikos/neurosport-shop/main/src/images/recent_w2560.jpg",
  },
  flags: {
    // PARALLEL_QUERY_RUNNING: true,
    // PRESERVE_FILE_DOWNLOAD_CACHE: true,
    // DEV_WEBPACK_CACHE: true,
    // PARALLEL_SOURCING: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          //"G-61MLB41GKB", // Google Analytics / GA
          process.env.GATSBY_GOOGLE_TRACKING_ID,
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NEUROSPORT.PL`,
        short_name: `NEUROSPORT`,
        start_url: `/`,
        background_color: `#007a00`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
      forceFullSync: true,
      downloadLocal: true,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "",
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true, // https://github.com/andrezimpel/gatsby-plugin-gdpr-cookies#anonymize
          allowAdFeatures: false,
        },
      },
    },
    "gatsby-plugin-netlify",
  ],
}
