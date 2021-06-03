import { Box, Text, Grid } from "@chakra-ui/layout";
import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Bands = ({ bands }) => {
  return (
    <Box my={4}>
      <Text
        textAlign="center"
        letterSpacing="widest"
        fontSize={[`2xl`, `2xl`, `4xl`, `7xl`]}
        textTransform={`uppercase`}
        color={`primary`}
      >
        With Musical Performances By:
      </Text>
      {bands.nodes.map((band) => (
        <Grid
          display={`grid`}
          placeItems={`center`}
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        >
          <Box display={`grid`}  px={[4, 8, 12]}>
            <Text
              letterSpacing="widest"
              fontSize={`3xl`}
              textTransform={`uppercase`}
              textShadow={`1px 1px 2px rgba(0,0,0,0.5)`}
              color={`primary`}
            >
              {band.name}
            </Text>
            <Text letterSpacing="wide">
              {band.headshot.description}
            </Text>
          </Box>

          <Box>
            <GatsbyImage image={getImage(band.headshot)} alt={band.name} />
          </Box>
        </Grid>
      ))}
    </Box>
  );
};

export default Bands;
