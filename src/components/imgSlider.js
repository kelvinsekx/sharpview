import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from 'gatsby-image-background-slider'

function ImageSlider () {
     return (
        <BackgroundSlider 
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
              nodes {
                relativePath
                childImageSharp {
                  fluid (maxWidth: 4000, quality: 100){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8}
      />
     )
}

export default ImageSlider;