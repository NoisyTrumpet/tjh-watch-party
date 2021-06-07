import { Button } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import "./hero.scss";

const Hero = ({ fighters, title, date, background, logo, vs }) => {
  return (
    <Box display="grid">
      <Box style={{ gridArea: "1/1" }} zIndex={9} height={`fit-content`}>
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
          width={`60vw`}
          py={2}
          mx={`auto`}
          className="contBGspace"
        >
          <Box width={`100%`} display="grid" placeItems="center">
            <Box
              maxWidth={[`120px`, `200px`, `250px`, `250px`, `400px`]}
              mx={`auto`}
              py={1}
            >
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
            <Box maxWidth={[`50px`, `80px`, `100px`, `100px`, `150px`]} pb={3}>
              <Fade bottom>
                <GatsbyImage image={vs} alt={"VS logo"} />
              </Fade>
            </Box>
            <Box
              textAlign="center"
              color="secondary"
              fontWeight={300}
              // width={`fit-content`}
              px={4}
              py={[0, 1, 1, 1]}
              mt={0}
              mb={[0, -2, -1, -1]}
              textTransform="uppercase"
            >
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`md`, `2xl`, `3xl`, `4xl`, `5xl`]}
                  letterSpacing="widest"
                  lineHeight={1}
                  fontWeight={800}
                  textShadow={`0 3px 1px rgb(0 0 1 / 100%)`}
                >
                  Freeman Colliseum
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`12px`, `lg`, `2xl`, `2xl`, `3xl`]}
                  letterSpacing="widest"
                  fontWeight={800}
                  textShadow={`0 3px 1px rgb(0 0 1 / 100%)`}
                >
                  San Antonio, Texas
                </Text>
              </Fade>
            </Box>
            <Box
              backgroundColor={["blackAlpha.700", `#000000`]}
              textAlign="center"
              color="secondary"
              fontWeight={300}
              // width={`fit-content`}
              px={[2, 4, 6, 4]}
              py={[1, 1, 2, 2]}
              my={0}
              textTransform="uppercase"
            >
              <Fade bottom cascade>
                <Text
                  fontSize={[`10px`, `sm`, `lg`, `2xl`, `3xl`]}
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
              // width={`fit-content`}
              px={4}
              py={[0, 1, 1, 1]}
              mt={[-2, -2, -2, -5, -5]}
              mb={0}
              textTransform="uppercase"
            >
              <Fade bottom>
                <Text
                  color={`white`}
                  mt={4}
                  fontSize={[`2xl`, `3xl`, `5xl`]}
                  textShadow={`0 3px 1px rgb(0 0 1 / 100%)`}
                  // letterSpacing="widest"
                  lineHeight={1}
                  fontWeight={"900"}
                >
                  {date}
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`12px`, `lg`, `2xl`, `2xl`, `3xl`]}
                  letterSpacing="widest"
                  fontWeight={800}
                  textShadow={`0 3px 1px rgb(0 0 1 / 100%)`}
                >
                  $10 PER PERSON
                </Text>
              </Fade>
            </Box>
            <Tada>
              <Button
                bg="primary"
                // rounded="full"
                color="#fff"
                letterSpacing="2px"
                fontSize={["md", "2xl", "3xl", "4xl", "5xl"]}
                lineHeight={1}
                px={[4, 4, 6, 10]}
                py={[4, 4, 6, 10]}
                my={0}
                as="a"
                fontWeight={900}
                href="https://purchase.growtix.com/eh/GERVONTA_DAVIS_VS_MARIO_BARRIOS_WATCH_PARTY"
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
          className="art-directed"
          image={background}
          alt="Title"
          style={{ gridArea: "1/1", maxWidth: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
