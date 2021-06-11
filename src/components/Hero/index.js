import { Button } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import Logos from "../Logos";
import "./hero.scss";

const Hero = ({ date, background, logo }) => {
  return (
    <Box display="grid">
      <Box style={{ gridArea: "1/1" }} zIndex={9} className="logoContainer">
        <Box
          display="grid"
          placeItems="center"
          height={`100%`}
          width={[`80vw`, `60vw`]}
          py={2}
          mx={`auto`}
        >
          <Box width={`100%`} display="grid" placeItems="center">
            <Box
              maxWidth={[`300px`, `300px`, `450px`, `600px`, `600px`]}
              mx={`auto`}
              py={1}
            >
              <Fade bottom>
                <GatsbyImage
                  image={getImage(logo)}
                  alt={"Thomas J. Henry Music Fest Party"}
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
                Thomas J. Henry Music Fest Party
              </Heading>
            </Box>
            <Box
              textAlign="center"
              color="secondary"
              fontWeight={300}
              px={4}
              py={[0, 1, 1, 1]}
              my={5}
              textTransform="uppercase"
            >
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`md`, `2xl`, `3xl`, `4xl`, `5xl`]}
                  letterSpacing="widest"
                  lineHeight={1.2}
                  fontWeight={800}
                  textShadow={`0 2px 1px rgb(0 0 1 / 100%), 2px 2px 8px rgba(0, 0, 1, 0.5)`}
                >
                  Freeman Colliseum
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`md`, `lg`, `2xl`, `3xl`, `3xl`]}
                  letterSpacing="widest"
                  fontWeight={800}
                  textShadow={`0 2px 1px rgb(0 0 1 / 100%), 2px 2px 8px rgba(0, 0, 1, 0.5)`}
                >
                  San Antonio, Texas
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`2xl`, `3xl`, `5xl`, `6xl`, `7xl`]}
                  textShadow={`0 2px 1px rgb(0 0 1 / 100%), 2px 2px 8px rgba(0, 0, 1, 0.5)`}
                  lineHeight={1.2}
                  fontWeight={"900"}
                >
                  {date}
                </Text>
              </Fade>
              <Fade bottom>
                <Text
                  color={`white`}
                  fontSize={[`md`, `lg`, `2xl`, `3xl`, `3xl`]}
                  letterSpacing="widest"
                  fontWeight={800}
                  textShadow={`0 2px 1px rgb(0 0 1 / 100%), 2px 2px 8px rgba(0, 0, 1, 0.5)`}
                  my={0}
                  py={0}
                  lineHeight={1.5}
                >
                  $10 PER PERSON - Doors Open 6:00pm
                </Text>
              </Fade>
            </Box>
            <Tada delay={1000}>
              <Button
                bg="primary"
                color="#fff"
                letterSpacing="2px"
                fontSize={["md", "2xl", "3xl", "4xl", "5xl"]}
                lineHeight={1}
                px={[4, 4, 6, 10]}
                py={[4, 4, 6, 10]}
                as="a"
                fontWeight={900}
                href="https://purchase.growtix.com/eh/TJH_MUSICFEST"
                textShadow={`1px 1px 2px rgba(0,0,0,0.7), 2px 2px 8px rgba(0, 0, 1, 0.5)`}
              >
                BUY TICKETS
              </Button>
            </Tada>
            <Logos />
          </Box>
        </Box>
      </Box>

      <Box
        display="grid"
        style={{ gridArea: "1/1" }}
        overflow={`hidden`}
        className="bgFix"
      >
        <GatsbyImage
          image={background}
          alt="Title"
          style={{ gridArea: "1/1" }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
