import { Heading, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

const FooterHeading = (props) => (
  <Heading
    as="h4"
    color={useColorModeValue("primary", "#ffffff")}
    fontSize="lg"
    fontWeight="light"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
);

export default FooterHeading;
