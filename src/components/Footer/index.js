import * as React from "react";
import { Box, Stack, Text, Grid, GridItem } from "@chakra-ui/react";
import Copyright from "./Fragments/Copyright";
import TJHLogo from "./Fragments/TJHLogo";
// import { graphql, useStaticQuery } from "gatsby";
import FooterHeading from "./Fragments/FooterHeading";
// import PMXLogo from "./Fragments/PMXLogo";
// import ThemeToggle from "../ThemeToggle"
const Footer = () => {
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
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py={[0, 0, 8]}
      px={{
        base: "4",
        md: "8",
      }}
    >
      <Grid
        display={`grid`}
        placeItems={`start`}
        maxW={"1000"}
        templateColumns={{
          base: "repeat(1, auto)",
          md: "auto 65%",
        }}
        templateRows={{ base: "repeat(2, auto)", md: "repeat(1, auto)" }}
        gridGap={6}
        px={2}
        py={4}
        mx="auto"
        mb={10}
      >
        <GridItem display={`grid`} placeItems={`center`} order={[1]} w={`100%`}>
          <FooterHeading mb={2}>Sponsored By:</FooterHeading>
          <a
            href="https://thomasjhenrylaw.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TJHLogo
              width="130% !important"
              height="auto !important"
              style={{ maxHeight: `200px` }}
            />
          </a>
        </GridItem>
        <GridItem
          display={`grid`}
          placeItems={`center`}
          // maxW={[`100%`, `70%`]}
          order={2}
          textAlign="center"
        >
          <FooterHeading mb={2}>About</FooterHeading>
          <Text>
            Two-Division World Champion Gervonta “Tank” Davis faces off against
            the undefeated Super Lightweight World Champion, Mario Barrios.
            Watch live from the Freeman Coliseum at the Thomas J Henry Watch
            Party benefiting the Boys and Girls Club of San Antonio with musical
            performances by special guests Lupillo Rivera and DJ Kidd Spin.
          </Text>
        </GridItem>
        {/* <GridItem display={`grid`} placeItems={`center`} order={[3, 2, 3]}>
          <FooterHeading mb={2}>Presented by:</FooterHeading>
          <PMXLogo style={{ maxWidth: `100%`, maxHeight: `54px` }} />
        </GridItem> */}
      </Grid>

      {/* <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          spacing={{
            base: "10",
            lg: "28",
          }}
          justifyContent={`center`}
        >
          <Box>
            <FooterHeading mb={2}>Sponsored By:</FooterHeading>
            <TJHLogo /> */}
      {/* <GatsbyImage
              image={getImage(logo.logo.logo)}
              alt="Thomas J. Henry World Championship Watch Party"
              style={{ maxWidth: `200px` }}
            /> */}
      {/* </Box>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={{
              base: "10",
              md: "20",
            }}
          >
            <Box>
              <FooterHeading mb={2}>About</FooterHeading>
              <Text>Two-Division World Champion Gervonta “Tank” Davis faces off against the undefeated Super Lightweight World Champion, Mario Barrios. Watch live from the Freeman Coliseum at the Thomas J Henry Watch Party benefiting the Boys and Girls Club of San Antonio with musical performances by special guests Lupillo Rivera and DJ Kidd Spin.</Text>
            </Box>
            <Box maxWidth={200}>
              <FooterHeading mb={2}>Presented by:</FooterHeading>
              <PMXLogo style={{ maxWidth: `100%`, maxHeight: `54px` }} />
            </Box> */}

      {/* <LinkGrid
            spacing={{
              base: '10',
              md: '20',
              lg: '28',
            }}
            flex="1"
          />
          <SubscribeForm
            width={{
              base: 'full',
              md: 'sm',
            }}
          /> */}
      {/* </Stack>
        </Stack> */}
      <Stack justifyContent="center" alignItems="center" pb={6}>
        {/* <ThemeToggle /> */}
        <Copyright alignSelf={`center`} />
        {/* <SocialMediaLinks /> */}
      </Stack>
      {/* </Stack> */}
    </Box>
  );
};

export default Footer;
