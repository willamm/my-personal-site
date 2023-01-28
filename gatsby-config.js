/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteAddress = new URL("https://www.williamm.me");

module.exports = {
  siteMetadata: {
    title: `My Personal Site`,
    siteUrl: siteAddress.href
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-plugin-s3',
    options: {
      bucketName: "williamm.me",
      protocol: siteAddress.protocol.slice(0, -1),
      hostname: siteAddress.hostname,
      acl: null
    }
  }]
};