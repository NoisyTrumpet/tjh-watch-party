import { Container } from "@chakra-ui/layout";
import { graphql } from "gatsby";
import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = ({ data }) => {
  console.log(data);
  // Hero Data:
  const heroImage = data.contentfulComponentHero.bg_image;
  const fighters = data.contentfulComponentHero.fighterInfo;
  return (
    <Layout>
      <Seo title={`Thomas J. Henry Watch Party`} />
      <Hero background={heroImage} fighters={fighters} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    contentfulComponentHero {
      bg_image {
        gatsbyImageData(
          layout: CONSTRAINED
          formats: WEBP
          placeholder: BLURRED
          quality: 90
        )
      }
      logo {
        id
        file {
          url
          fileName
          contentType
        }
      }
      title
      name
      ctaText
      fighterInfo {
        name
        heroImage {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            quality: 90
            placeholder: BLURRED
          )
        }
      }
      date
      ctaLink
    }
  }
`;
