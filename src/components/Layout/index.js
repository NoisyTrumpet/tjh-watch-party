import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../@chakra-ui/gatsby-plugin/theme";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <main>{children}</main>
    </ChakraProvider>
  );
};

export default Layout;
