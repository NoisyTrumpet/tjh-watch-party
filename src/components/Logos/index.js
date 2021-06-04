import { Box, Grid } from "@chakra-ui/layout";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {graphql, useStaticQuery } from "gatsby"

const Logos = () => {

  const logos = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "logos"}}) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              quality: 90
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: WEBP
            )
          }
        }
      }
    }
  }
  `)

  return (
    <Box py={4} width={`100%`} backgroundColor={`black`}>
          <Grid
            display={`grid`}
            placeItems={`center`}
            templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
            templateRows={["repeat(2, 1fr)", "repeat(1, 1fr)"]}
          >
            {console.log(logos)}
            {logos.allFile.edges.map((logo) => (
              <Box display={`grid`}
              placeItems={`center`}>
                <GatsbyImage image={getImage(logo.node.childImageSharp)} alt={"box logo"} style={{maxWidth: "100%"}} />
              </Box>
            ))}
          </Grid>
    </Box>
  );
};

export default Logos;

