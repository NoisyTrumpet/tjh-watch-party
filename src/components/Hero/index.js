import { Button } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";

const Hero = ({ fighters, title, date, background, logo }) => {
  return (
    <Box display="grid">
      <Box style={{ gridArea: "1/1" }} zIndex={9}>
        {/* <Box
          backgroundColor="#000000"
          color="white"
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
        </Box> */}
        <Box
          display="grid"
          placeItems="center"
          height={`100%`}
          width={`100%`}
          pt={[28, 10]}
        >
          <Box width={`100%`} display="grid" placeItems="center">
            <Box maxWidth={[`170px`, `200px`, `250px`, `275px`, `400px`]}>
              <Fade bottom>
                <GatsbyImage
                  image={getImage(logo)}
                  alt={"Thomas J. Henry World Championship Watch Party"}
                />
              </Fade>
            </Box>
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
              textAlign="center"
              color="secondary"
              fontWeight={300}
              height={200}
              px={4}
              py={2}
              textTransform="uppercase"
            >
            </Box>
            <Box
              textAlign="center"
              color="secondary"
              fontWeight={300}
              width={`fit-content`}
              px={4}
              py={1}
              mt={0}
              mb={-2}
              textTransform="uppercase"
            >
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`1xl`, `3xl`, `4xl`]}
                  // letterSpacing="widest"
                  fontWeight={800}
                  textShadow={`0 5px 1px rgb(0 0 1 / 100%)`}
                >
                  Freeman Colliseum
                </Text>
              </Fade>
            </Box>
            <Box
              backgroundColor={["blackAlpha.700", `#000000`]}
              textAlign="center"
              color="secondary"
              fontWeight={300}
              width={`fit-content`}
              px={4}
              py={1}
              my={0}
              textTransform="uppercase"
            >
              <Fade bottom cascade>
                <Text
                  fontSize={[`xl`, `xl`, `3xl`]}
                  textShadow={`1px 1px 2px rgba(0,0,0,0.7)`}
                >
                  {title}
                </Text>
              </Fade>
            </Box>
            <Box
              textAlign="center"
              color="secondary"
              fontWeight={300}
              width={`fit-content`}
              px={4}
              py={1}
              mt={-4}
              mb={0}
              textTransform="uppercase"
            >
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`2xl`, `2xl`, `4xl`, `7xl`]}
                  textShadow={`0 6px 1px rgb(0 0 1 / 100%)`}
                  // letterSpacing="widest"
                  fontWeight={'900'}
                >
                  {date}
                </Text>
              </Fade>
              {/* <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`xl`, `2xl`, `3xl`]}
                  letterSpacing="widest"
                  textShadow={`1px 1px 2px rgba(0,0,0,0.7)`}
                >
                  Freeman Colliseum
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`sm`, `md`, `lg`]}
                  letterSpacing="widest"
                  textShadow={`1px 1px 2px rgba(0,0,0,0.7)`}
                >
                  Doors open at 6:00PM
                </Text>
              </Fade> */}
            </Box>
            <Tada>
              <Button
                bg="primary"
                rounded="full"
                color="#fff"
                letterSpacing="2px"
                fontSize={["2xl", "3xl", "5xl", "7xl"]}
                px={[6, 8, 10, 12]}
                py={[8, 10, 12, 14]}
                my={4}
                as="a"
                fontWeight={900}
                href="https://purchase.growtix.com/events/landing/GERVONTA_DAVIS_VS_MARIO_BARRIOS_WATCH_PARTY"
                textShadow={`1px 1px 2px rgba(0,0,0,0.7)`}
              >
                BUY TICKETS
              </Button>
            </Tada>
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
