module.exports = {
  siteMetadata: {
    title: "CCTV Drain Surveys Terenure - Drain Surveys Terenure",
    author: "Drain Surveys Terenure",
    description: "Drain Surveys Terenure offers competitively priced CCTV drain surveys in Dublin. Drain inspections identify blockages, collapses & more. Low cost effective rate."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-recaptcha',
    'gatsby-plugin-sharp', 
    'gatsby-transformer-sharp'
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
}
