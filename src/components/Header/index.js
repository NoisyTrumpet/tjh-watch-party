import * as React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";

import Logo from "./Fragments/Logo";
import { MobileNav } from "./Fragments/MobileNav";
import { DesktopNavLink } from "./Fragments/NavLink";

const Header = () => {
  return (
    <Box minH="480px">
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
              <Box as="a" href="#" rel="home">
                <VisuallyHidden>Envelope app</VisuallyHidden>
                <Logo />
              </Box>
              <HStack
                display={{
                  base: "none",
                  lg: "flex",
                }}
                spacing="8"
              >
                <DesktopNavLink active>About</DesktopNavLink>
                <DesktopNavLink>Fighters</DesktopNavLink>
                <DesktopNavLink>Sponsors</DesktopNavLink>
                <DesktopNavLink>Contact</DesktopNavLink>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack
                spacing="8"
                display={{
                  base: "none",
                  md: "flex",
                }}
              >
                <Button colorScheme="blue" rounded="full">
                  BUY TICKETS
                </Button>
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
