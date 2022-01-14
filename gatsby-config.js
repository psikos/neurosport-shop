require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
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
    PARALLEL_QUERY_RUNNING: true,
    // PRESERVE_FILE_DOWNLOAD_CACHE: true,
    // DEV_WEBPACK_CACHE: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
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
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-61MLB41GKB", // Google Analytics / GA
          // "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-61MLB41GKB",
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true, // https://github.com/andrezimpel/gatsby-plugin-gdpr-cookies#anonymize
          allowAdFeatures: false,
        },
      },
    },
    // {
    //   resolve: `gatsby-firesource`,
    //   options: {
    //     credential: {
    //       type: process.env.GATSBY_FIREBASE_TYPE,
    //       project_id: process.env.GATSBY_FIREBASE_PROJECT_ID,
    //       private_key_id: process.env.GATSBY_FIREBASE_PRIVATE_KEY_ID,
    //       private_key: process.env.GATSBY_FIREBASE_PRIVATE_KEY.replace(
    //         /\\n/g,
    //         "\n"
    //       ),
    //       client_email: process.env.GATSBY_FIREBASE_CLIENT_EMAIL,
    //       client_id: process.env.GATSBY_FIREBASE_CLIENT_ID,
    //       auth_uri: process.env.GATSBY_FIREBASE_AUTH_URI,
    //       token_uri: process.env.GATSBY_FIREBASE_TOKEN_URI,
    //       auth_provider_x509_cert_url:
    //         process.env.GATSBY_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    //       client_x509_cert_url:
    //         process.env.GATSBY_FIREBASE_CLIENT_X509_CERT_URL,
    //     },
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: process.env.FIREBASE_API_KEY,
    //       authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    //       databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
    //       projectId: process.env.FIREBASE_PROJECT_ID,
    //       storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    //       messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    //       appId: process.env.FIREBASE_APP_ID,
    //       measurementId: process.env.FIREBASE_MEASUREMENT_ID
    //     }
    //   }
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    "gatsby-plugin-netlify",
  ],
}
