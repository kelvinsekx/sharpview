/**
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
*/

module.exports = {
  plugins: [
    //gatsby typography plugin
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    // gatsby styld components plugin
    `gatsby-plugin-styled-components`,

    // gatsby slider 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/bg`,
      },
    },
    // image handler 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ],
}
