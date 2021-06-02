import { Box, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const Hero = ({ fighters, title, date, background }) => {
  console.log(fighters);
  return (
    <Box display="grid">
      <Box style={{ gridArea: "1/1" }} zIndex={9}>
        <Box
          backgroundColor="#000000"
          color="white"
          display="flex"
          justifyContent="space-between"
          height={`fit-content`}
          py={4}
        >
          <Box textAlign="center" minWidth={`48%`}>
            <Text
              fontSize={`3xl`}
              textTransform="uppercase"
              fontWeight="normal"
            >
              {fighters[0].name}
            </Text>
          </Box>
          <Box
            textAlign="center"
            minWidth={`4%`}
            display="grid"
            placeItems="center"
          >
            <Text fontWeight="light" fontSize="xl">
              VS
            </Text>
          </Box>
          <Box textAlign="center" minWidth={`48%`}>
            {" "}
            <Text
              fontSize={`3xl`}
              textTransform="uppercase"
              fontWeight="normal"
            >
              {fighters[1].name}
            </Text>
          </Box>
        </Box>
        <Box display="grid" placeItems="center" height={`100%`}>
          Hello
        </Box>
      </Box>

      <Box display="grid" style={{ gridArea: "1/1" }}>
        <GatsbyImage
          image={getImage(background)}
          alt="Title"
          style={{ gridArea: "1/1" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
