import * as React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";

// import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Header = () => {
  // const logo = useStaticQuery(graphql`
  //   query {
  //     logo: contentfulComponentHero {
  //       logo {
  //         gatsbyImageData(
  //           placeholder: BLURRED
  //           quality: 90
  //           layout: CONSTRAINED
  //         )
  //       }
  //     }
  //   }
  // `);
  return (
    <Box>
      <Box as="header" bg={mode("white", "gray.800")} borderBottomWidth="1px">
        <Box
          maxW="7xl"
          mx="auto"
          py="4"
          px={{
            base: "6",
            md: "8",
          }}
        >
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box
                as="a"
                href="#"
                rel="home"
                maxWidth={[`100px`, `150px`, `200px`]}
              >
                <VisuallyHidden>
                  Thomas J. Henry Music Fest Party
                </VisuallyHidden>
                {/* <GatsbyImage
                  image={getImage(logo.logo.logo)}
                  alt={`Thomas J. Henry World Championship Watch Party`}
                /> */}
              </Box>
              <HStack
                display={{
                  base: "none",
                  lg: "flex",
                }}
                spacing="8"
              >
                {/* <DesktopNavLink active>About</DesktopNavLink>
                <DesktopNavLink>Fighters</DesktopNavLink>
                <DesktopNavLink>Sponsors</DesktopNavLink>
                <DesktopNavLink>Contact</DesktopNavLink> */}
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack
                spacing="8"
                display={{
                  base: "flex",
                  md: "flex",
                }}
              >
                <Button
                  bg="primary"
                  rounded="full"
                  fontWeight="light"
                  color="#fff"
                  letterSpacing="2px"
                  fontSize="xl"
                  as="a"
                  href="https://purchase.growtix.com/eh/TJH_MUSICFEST"
                  textShadow={`1px 1px 2px rgba(0,0,0,0.7)`}
                >
                  BUY TICKETS
                </Button>
              </HStack>
              {/* <Box ml="5">
                <MobileNav />
              </Box> */}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
