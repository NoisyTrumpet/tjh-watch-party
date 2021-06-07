import { Box, Grid } from "@chakra-ui/layout";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import "./logos.scss";

const Logos = () => {
  const logos = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "logos" } }) {
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
      mayweather: file(relativePath: { eq: "logos/mayweather.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
      showtime: file(relativePath: { eq: "logos/showtime.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
      gtb: file(relativePath: { eq: "logos/gtb.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
      gtd: file(relativePath: { eq: "logos/gtd.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
    }
  `);

  return (
    <Box py={4} width={`100%`} backgroundColor={`black`}>
      <Grid
        display={`grid`}
        placeItems={`center`}
        templateColumns={["repeat(2, auto)", "repeat(4, auto)"]}
        templateRows={["repeat(2, 1fr)", "repeat(1, 1fr)"]}
        gridGap={6}
        className="logoContainer"
        px={2}
        mx="auto"
      >
        <Box display={`grid`} placeItems={`center`} className="logoItemLg">
          <GatsbyImage
            image={getImage(logos.mayweather.childImageSharp)}
            alt={"box logo"}
            style={{ maxWidth: "100%" }}
          />
        </Box>
        <Box display={`grid`} placeItems={`center`} className="logoItem">
          <GatsbyImage
            image={getImage(logos.gtd.childImageSharp)}
            alt={"box logo"}
            style={{ maxWidth: "100%" }}
          />
        </Box>
        <Box display={`grid`} placeItems={`center`} className="logoItem">
          <GatsbyImage
            image={getImage(logos.gtb.childImageSharp)}
            alt={"box logo"}
            style={{ maxWidth: "100%" }}
          />
        </Box>
        <Box display={`grid`} placeItems={`center`} className="logoItemLg">
          <GatsbyImage
            image={getImage(logos.showtime.childImageSharp)}
            alt={"box logo"}
            style={{ maxWidth: "100%" }}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Logos;
