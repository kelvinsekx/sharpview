/**
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
*/

module.exports = {
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
