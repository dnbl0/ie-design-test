/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: 'IE Design System',
    description: 'Multi-brand design guidelines and component documentation for IE, Lexus, and Toyota',
    author: 'IE Design Team',
    siteUrl: 'https://ie-design.example.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IE Design System',
        short_name: 'IE Design',
        start_url: '/',
        background_color: '#003087',
        theme_color: '#003087',
        display: 'standalone',
        icon: 'src/images/ie-icon.svg',
        icon_options: { purpose: 'any maskable' },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'images', path: `${__dirname}/src/images` },
    },
  ],
};
