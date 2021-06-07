import * as React from "react";
import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";
import Copyright from "./Fragments/Copyright";
import TJHLogo from "./Fragments/TJHLogo";
// import { graphql, useStaticQuery } from "gatsby";
import FooterHeading from "./Fragments/FooterHeading";
import PMXLogo from "./Fragments/PMXLogo";
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
      py="12"
      px={{
        base: "4",
        md: "8",
      }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
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
            <TJHLogo />
            {/* <GatsbyImage
              image={getImage(logo.logo.logo)}
              alt="Thomas J. Henry World Championship Watch Party"
              style={{ maxWidth: `200px` }}
            /> */}
          </Box>
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
              <Text>Thomas J Henry Watch Party featuring Davis V Barrios WBA Super Lightweight Championship Live on Showtime PPV on Saturday, June 26, 2021, in the Freeman Coliseum with entertainment by Grammy award-winning artist Lupillo Rivera and DJ Kidd Spin.Proceeds benefit the Boys and Girls Club of San Antonio.</Text>
            </Box>
            <Box maxWidth={200}>
              <FooterHeading mb={2}>Presented by:</FooterHeading>
              <PMXLogo style={{ maxWidth: `100%`, maxHeight: `54px` }} />
            </Box>

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
          </Stack>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          {/* <ThemeToggle /> */}
          <Copyright alignSelf={`center`} />
          {/* <SocialMediaLinks /> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
