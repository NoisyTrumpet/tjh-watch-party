import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FAQ = ({ data }) => {
  const faqs = data.allContentfulFaQs;
  const Bold = ({ children }) => (
    <p style={{ fontWeight: "bold" }}>{children}</p>
  );
  const Text = ({ children }) => <p>{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };
  return (
    <Layout>
      <Seo
        title={`Thomas J. Henry Music Fest FAQs`}
        description={`Thomas J. Henry Music Fest FAQs`}
      />
      <Box display={`grid`}>
        <Box
          display="grid"
          placeItems="center"
          style={{ gridArea: "1/1" }}
          zIndex={9}
          py={5}
          mx={`auto`}
        >
          <Heading
            as="h1"
            textAlign="center"
            fontSize={[`2xl`, `3xl`, `5xl`, `6xl`, `7xl`]}
            fontWeight={800}
            textShadow={`0 2px 1px rgb(0 0 1 / 100%), 2px 2px 8px rgba(0, 0, 1, 0.5)`}
            color={`white`}
          >
            FAQs
          </Heading>
        </Box>
        <Box
          display="grid"
          style={{ gridArea: "1/1" }}
          overflow={`hidden`}
          maxHeight={`30vh`}
          alignContent={`center`}
        >
          <GatsbyImage
            image={getImage(data.banner.childImageSharp)}
            alt={"Music crowd banner"}
            style={{ maxWidth: `100vw` }}
          />
        </Box>
      </Box>
      <Container maxW={`80vw`} mx={`auto`} py={5}>
        {faqs.nodes.map((item) => (
          <>
            <h2>{item.question}</h2>
            {renderRichText(item.answer, options)}
          </>
        ))}
      </Container>
    </Layout>
  );
};

export default FAQ;

export const query = graphql`
  query FaqQuery {
    allContentfulFaQs {
      nodes {
        question
        answer {
          raw
        }
      }
    }
    banner: file(relativePath: { eq: "banner.jpg" }) {
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
`;
