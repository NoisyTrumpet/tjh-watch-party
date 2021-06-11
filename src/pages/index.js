import * as React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Bands from "../components/Bands";
import { getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  // Hero Data:
  const desktopImageGet = getImage(data.contentfulComponentHero.bg_image);
  const heroTitle = data.contentfulComponentHero.title;
  const logo = data.contentfulComponentHero.logo;
  const date = data.contentfulComponentHero.date;
  return (
    <Layout>
      <Seo
        title={`Thomas J. Henry Music Fest`}
        description={`Thomas J Henry Music Fest on Saturday, June 26, 2021, in the Freeman Coliseum with entertainment by Grammy award-winning artist Lupillo Rivera and DJ Kidd Spin. Proceeds benefit the Boys and Girls Club of San Antonio.`}
      />
      <Hero
        background={desktopImageGet}
        title={heroTitle}
        logo={logo}
        date={date}
      />
      <Bands />
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
      date
      ctaLink
    }

  }
`;
