import { Box, Grid } from "@chakra-ui/layout";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import "./logos.scss";

const Logos = () => {
  const logos = useStaticQuery(graphql`
    query {
      kbbt: file(relativePath: { eq: "logos/kbbt_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
      kxtn: file(relativePath: { eq: "logos/kxtn_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
      queB: file(relativePath: { eq: "logos/queB_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
      uni: file(relativePath: { eq: "logos/uni_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
      vibe: file(relativePath: { eq: "logos/vibe_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
      latin: file(relativePath: { eq: "logos/latinMix_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 90
            formats: WEBP
          )
        }
      }
    }
  `);

  return (
    <Box py={4} width={`100%`} ml={[`-10%`, `revert`]}>
      <Grid
        display={`grid`}
        placeItems={`center`}
        gridGap={[2, 6]}
        px={2}
        mt={5}
        mx="auto"
        className="gridLogos"
      >
        <Box
          display={`grid`}
          placeItems={`center`}
          height={`auto`}
          width={[`80px`, `80px`]}
        >
          <GatsbyImage
            image={getImage(logos.kxtn.childImageSharp)}
            alt={"KXTN Tejano logo"}
            style={{ width: "auto", height: "100%" }}
            className="logoItem"
          />
        </Box>
        <Box
          display={`grid`}
          placeItems={`center`}
          height={`auto`}
          width={[`90px`, `90px`]}
        >
          <GatsbyImage
            image={getImage(logos.kbbt.childImageSharp)}
            alt={"98.5 The Beat logo"}
            style={{ width: "auto", height: "100%" }}
            className="logoItem"
          />
        </Box>
        <Box
          display={`grid`}
          placeItems={`center`}
          height={`auto`}
          width={[`180px`, `180px`]}
        >
          <GatsbyImage
            image={getImage(logos.uni.childImageSharp)}
            alt={"S.A. Univision logo"}
            style={{ width: "auto", height: "100%" }}
            className="logoItem"
          />
        </Box>
        <Box
          display={`grid`}
          placeItems={`center`}
          height={`auto`}
          width={[`70px`, `70px`]}
        >
          <GatsbyImage
            image={getImage(logos.vibe.childImageSharp)}
            alt={"107.5 Vibe logo"}
            style={{ width: "auto", height: "100%" }}
            className="logoItem"
          />
        </Box>
        <Box
          display={`grid`}
          placeItems={`center`}
          height={`auto`}
          width={[`100px`, `100px`]}
        >
          <GatsbyImage
            image={getImage(logos.queB.childImageSharp)}
            alt={"92.9 Que Buena logo"}
            style={{ width: "auto", height: "100%" }}
            className="logoItem"
          />
        </Box>
        <Box
          display={`grid`}
          placeItems={`center`}
          height={`auto`}
          width={[`80px`, `80px`]}
        >
          <GatsbyImage
            image={getImage(logos.latin.childImageSharp)}
            alt={"95.1 Latino Mix logo"}
            style={{ width: "auto", height: "100%" }}
            className="logoItem"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Logos;
