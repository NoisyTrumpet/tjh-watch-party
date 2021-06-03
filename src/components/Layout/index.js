import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../@chakra-ui/gatsby-plugin/theme";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <link
        href="//db.onlinewebfonts.com/c/ce5b4abe001c9e0fe604f753e1d6ebab?family=Univers"
        rel="stylesheet"
        type="text/css"
      />
      <main>{children}</main>
    </ChakraProvider>
  );
};

export default Layout;
