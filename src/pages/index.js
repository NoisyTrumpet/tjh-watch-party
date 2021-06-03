import * as React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Bands from "../components/Bands";

const IndexPage = ({ data }) => {
  // Hero Data:
  const heroImage = data.contentfulComponentHero.bg_image;
  const fighters = data.contentfulComponentHero.fighterInfo;
  const heroTitle = data.contentfulComponentHero.title;
  const logo = data.contentfulComponentHero.logo;
  const date = data.contentfulComponentHero.date;
  const bands = data.allContentfulBand;
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
      <Bands bands={bands} />
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
    allContentfulBand {
      nodes {
        headshot {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            quality: 100
            placeholder: BLURRED
          )
          description
        }
        name
      }
    }
  }
`;
