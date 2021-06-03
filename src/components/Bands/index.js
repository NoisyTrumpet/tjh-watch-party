import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Bands = ({ bands }) => {
  return (
    <Box my={4}>
      <Text
        textAlign="center"
        letterSpacing="widest"
        fontSize={`xl`}
        textTransform={`uppercase`}
        textShadow={`1px 1px 2px rgba(0,0,0,0.7)`}
      >
        With Musical Performances By:
      </Text>
      {bands.nodes.map((band) => (
        <Box display={`grid`} placeItems={`center`}>
          <Text
            letterSpacing="widest"
            fontSize={`2xl`}
            textTransform={`uppercase`}
            textShadow={`1px 1px 2px rgba(0,0,0,0.7)`}
          >
            {band.name}
          </Text>
          <GatsbyImage
            image={getImage(band.headshot.gatsbyImageData)}
            alt={band.name}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Bands;
