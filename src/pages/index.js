import * as React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Bands from "../components/Bands";
import Logos from "../components/Logos";
import { withArtDirection, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  // Hero Data:
  const mobileImageGet = getImage(data.mobileImage.childImageSharp);
  const desktopImageGet = getImage(data.contentfulComponentHero.bg_image);
  const heroImages = withArtDirection(desktopImageGet, [
    {
      media: "(max-width: 1024px)",
      image: mobileImageGet,
    },
  ]);
  const vs = getImage(data.vsImage.childImageSharp);
  const fighters = data.contentfulComponentHero.fighterInfo;
  const heroTitle = data.contentfulComponentHero.title;
  const logo = data.contentfulComponentHero.logo;
  const date = data.contentfulComponentHero.date;
  const bands = data.allContentfulBand;
  return (
    <Layout>
      <Seo title={`Thomas J. Henry Watch Party`} />
      <Hero
        background={heroImages}
        fighters={fighters}
        title={heroTitle}
        logo={logo}
        date={date}
        vs={vs}
      />
      <Bands bands={bands} />
      <Logos />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    mobileImage: file(relativePath: {eq: "bg_mobile.jpg"}) {
    id
    childImageSharp {
      gatsbyImageData(
        quality: 90
        layout: CONSTRAINED
        formats: WEBP
        placeholder: BLURRED
      )
    }
  }
  vsImage: file(relativePath: {eq: "vs.png"}) {
    id
    childImageSharp {
      gatsbyImageData(
        quality: 90
        layout: CONSTRAINED
        formats: WEBP
        placeholder: BLURRED
      )
    }
  }
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
