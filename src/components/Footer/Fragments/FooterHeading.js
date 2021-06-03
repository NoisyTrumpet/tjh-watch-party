import { Heading, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

const FooterHeading = (props) => (
  <Heading
    as="h4"
    color={useColorModeValue("gray.600", "#ffffff")}
    fontSize="lg"
    fontWeight="light"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
);

export default FooterHeading;
