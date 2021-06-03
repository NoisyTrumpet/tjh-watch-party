import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../@chakra-ui/gatsby-plugin/theme";
import "@fontsource/anton";
// import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
