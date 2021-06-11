import * as React from "react";
import { Box, Stack, Text, Grid, GridItem } from "@chakra-ui/react";
import Copyright from "./Fragments/Copyright";
import TJHLogo from "./Fragments/TJHLogo";
// import { graphql, useStaticQuery } from "gatsby";
import FooterHeading from "./Fragments/FooterHeading";
// import PMXLogo from "./Fragments/PMXLogo";
// import ThemeToggle from "../ThemeToggle"
const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="100vw"
      py={[0, 0, 8]}
      px={{
        base: "4",
        md: "8",
      }}
    >
      <Grid
        display={`grid`}
        placeItems={`start`}
        maxW={[`100%`, `100%`, `80%`]}
        templateColumns={[
          "repeat(1, auto)",
          "repeat(1, auto)",
          "repeat(2, auto)",
        ]}
        templateRows={["repeat(2, auto)", "repeat(2, auto)", "repeat(1, auto)"]}
        gridGap={6}
        px={2}
        py={4}
        mx="auto"
        mb={10}
      >
        <GridItem display={`grid`} placeItems={`center`} mx="auto">
          <FooterHeading mb={2}>Sponsored By:</FooterHeading>
          <a
            href="https://thomasjhenrylaw.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TJHLogo
              width="130% !important"
              height="auto !important"
              style={{ maxHeight: `200px`, width: `100%` }}
            />
          </a>
        </GridItem>
        <GridItem
          display={`grid`}
          placeItems={`center`}
          textAlign="center"
          mx="auto"
        >
          <FooterHeading mb={2}>About</FooterHeading>
          <Text maxWidth={500}>
            Grammy-award winning artist Lupillo Rivera is making his way to the
            Alamo City for a special one-night only performance at the Thomas J.
            Henry Music Fest. Featuring opening performances by La Arrolladora
            Banda El Limón de René Camacho. Proceeds benefit the Boys and Girls
            Club of San Antonio.
          </Text>
        </GridItem>
      </Grid>
      <Stack justifyContent="center" alignItems="center" pb={6}>
        {/* <ThemeToggle /> */}
        <Copyright alignSelf={`center`} />
        {/* <SocialMediaLinks /> */}
      </Stack>
    </Box>
  );
};

export default Footer;
