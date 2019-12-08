module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Aussie Green Klean',
        short_name: 'AGK',
        start_url: '/',
        background_color: '#8AF1BE',
        theme_color: '#8AF1BE',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
  ],
}