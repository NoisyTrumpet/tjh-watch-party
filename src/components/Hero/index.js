import { Button } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Logo from "../Header/Fragments/Logo";

const Hero = ({ fighters, title, date, background, logo }) => {
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
          display={`none`}
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
        <Box display="grid" placeItems="center" height={`100%`} width={`100%`}>
          <Box width={`100%`} display="grid" placeItems="center">
            <Box maxWidth={[`175px`, `175px`, `100%`]}>
              <GatsbyImage
                image={getImage(logo)}
                alt={"Thomas J. Henry World Championship Watch Party"}
              />
            </Box>
            <Button
              bg="primary"
              rounded="full"
              fontWeight="light"
              color="#fff"
              letterSpacing="2px"
              fontSize={["2xl", "3xl", "5xl", "7xl"]}
              px={[6, 8, 10, 12]}
              py={[8, 10, 12, 14]}
              mt={4}
              as="a"
              fontWeight={900}
              href="https://purchase.growtix.com/events/landing/GERVONTA_DAVIS_VS_MARIO_BARRIOS_WATCH_PARTY"
            >
              BUY TICKETS
            </Button>
            <Box maxWidth={300} backgroundColor={`primary`}>
              <Heading
                as="h1"
                textAlign="center"
                display={["none"]}
                color={`white`}
              >
                Thomas J. Henry World Championship Watch Party
              </Heading>
            </Box>
            <Box
              backgroundColor="#000000"
              textAlign="center"
              color="secondary"
              fontWeight={300}
              width={`fit-content`}
              px={4}
              py={2}
              mt={4}
              textTransform="uppercase"
            >
              <Text fontSize={[`xl`, `xl`, `3xl`]}>{title}</Text>
            </Box>
            <Box
              backgroundColor={["blackAlpha.700", `transparent`]}
              textAlign="center"
              color="secondary"
              fontWeight={300}
              width={`fit-content`}
              px={4}
              py={2}
              textTransform="uppercase"
            >
              <Text color={`white`} fontSize={[`xl`,`2xl`,`4xl`,`7xl`]}>
                {date}
              </Text>
            </Box>
          </Box>
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
