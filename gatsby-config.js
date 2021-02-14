/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path')
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        static: path.join(__dirname, 'static'),
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
