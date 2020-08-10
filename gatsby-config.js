/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-react-head",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "kwiz-prod-kwizlandingsite4dffe659-5dkp21qotkhw",
      },
    },
  ],
}
