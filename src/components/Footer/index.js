import * as React from "react";
import { Box, Stack, StackDivider, Text, Button } from "@chakra-ui/react";
import Copyright from "./Fragments/Copyright";
import SocialMediaLinks from "./Fragments/SocialMediaLinks";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FooterHeading from "./Fragments/FooterHeading";

const Footer = () => {
  const logo = useStaticQuery(graphql`
    query {
      logo: contentfulComponentHero {
        logo {
          gatsbyImageData(
            placeholder: BLURRED
            quality: 90
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

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
        >
          <Box flex="1">
            <GatsbyImage
              image={getImage(logo.logo.logo)}
              alt="Thomas J. Henry World Championship Watch Party"
              style={{ maxWidth: `200px` }}
            />
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
              <Button
                bg="primary"
                rounded="full"
                fontWeight="light"
                color="#fff"
                letterSpacing="2px"
                fontSize="xl"
                as="a"
                href="https://purchase.growtix.com/events/landing/GERVONTA_DAVIS_VS_MARIO_BARRIOS_WATCH_PARTY"
                textShadow={`1px 1px 2px rgba(0,0,0,0.7)`}
              >
                BUY TICKETS
              </Button>
            </Box>
            <Box>
              <FooterHeading>About</FooterHeading>
              <Text>About text goes here</Text>
            </Box>
            <Box>
              <FooterHeading>Presented by:</FooterHeading>
              <Text>PMX Events</Text>
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
        <Stack
          direction={{
            base: "column-reverse",
            md: "row",
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Copyright alignSelf={`center`} />
          {/* <SocialMediaLinks /> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
