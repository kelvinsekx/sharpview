/**
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
*/

module.exports = {
  siteMetadata: {
    title: "sharpview optometric clinic",
    description: "Sharpview Optometric Clinic is a leading optometric clinic and eye care centre in Nigeria. It provides services ranging from eye exams, glasses and all other expertise service. ",
    author: "kelvinsekx",
    keywords: ['optometric', 'optometric clinic in Ibadan', "eye centre in Nigera", "clinic in Nigeria", "eye care center", "Gbolade Osinuga", "top clinic in Ibadan", "best clinic in Nigeria and Ibadan", 'best eye doctor in Nigeria and Ibadan'],
    siteUrl: "https://www.sharpviewoptometricclinic.com"
  },

  plugins: [
    // gatsby-manifest will always top
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sharpview",
        short_name: "Sharpview",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.jpg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    // `gatsby-plugin-offline`,
    // `gatsby-plugin-react-helmet`,
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
