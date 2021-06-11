import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Bands = () => {
  const bands = useStaticQuery(graphql`
    query {
      left: file(relativePath: { eq: "bands/MusicFest_leftBanner.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
      right: file(relativePath: { eq: "bands/MusicFest_rightBanner.jpg" }) {
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
    <Box w={`100vw`}>
      <Box bgColor="black" p={4}>
        <Text
          color="#fff"
          textAlign="center"
          as="h2"
          maxW={`90%`}
          mx={`auto`}
          textTransform="uppercase"
          fontSize={[`2xl`, `4xl`, `5xl`]}
          fontWeight={"900"}
          textShadow={`0 3px 1px rgb(0 0 1 / 100%), 1px 3px 1px rgb(0 0 1 / 100%)`}
        >
          The Lineup
        </Text>
      </Box>
      <Box
        display={`grid`}
        gridTemplateColumns={[
          `repeat(1, auto)`,
          `repeat(1, auto)`,
          `repeat(2, auto)`,
        ]}
        gridTemplateRows={[
          `repeat(2, auto)`,
          `repeat(2, auto)`,
          `repeat(1, auto)`,
        ]}
      >
        <Box>
          <GatsbyImage
            image={getImage(bands.left.childImageSharp)}
            alt={"Arrolladora"}
            style={{ maxWidth: `100vw` }}
          />
        </Box>
        <Box>
          <GatsbyImage
            image={getImage(bands.right.childImageSharp)}
            alt={"Lupillo Rivera"}
            style={{ maxWidth: `100vw` }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Bands;
