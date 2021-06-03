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
  const heroTitle = data.contentfulComponentHero.title;
  const logo = data.contentfulComponentHero.logo;
  const date = data.contentfulComponentHero.date;
  return (
    <Layout>
      <Seo title={`Thomas J. Henry Watch Party`} />
      <Hero
        background={heroImage}
        fighters={fighters}
        title={heroTitle}
        logo={logo}
        date={date}
      />
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
        gatsbyImageData(
          formats: WEBP
          layout: CONSTRAINED
          quality: 90
          placeholder: BLURRED
        )
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
