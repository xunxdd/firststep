/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path')
module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-fontawesome-css',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "static/favicon.svg"
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        base64Width: 20,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'src/data'),
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        static: path.join(__dirname, 'static'),
        scss: path.join(__dirname, 'src/scss'),
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    }
  ],
}
