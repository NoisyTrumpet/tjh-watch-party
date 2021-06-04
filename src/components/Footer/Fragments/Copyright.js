import { Text } from "@chakra-ui/layout";
import * as React from "react";

const Copyright = (props) => (
  <Text
    fontSize={[`xs`, "sm"]}
    fontWeight={300}
    letterSpacing="wide"
    {...props}
  >
    &copy; {new Date().getFullYear()} Thomas J. Henry Injury Attorneys, all
    rights reserved.
  </Text>
);

export default Copyright;
