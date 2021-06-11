import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Box, Container, Heading } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./styles/faq.scss";

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
            fontSize={[`6xl`, `7xl`]}
            fontWeight={800}
            textShadow={`3px 0 1px rgb(0 0 1 / 100%), 0 3px 1px rgb(0 0 1 / 100%), 3px 3px 1px rgb(0 0 1 / 100%), 0 0 12px rgb(53 184 188 / 100%), 0 0 24px rgb(53 184 188 / 100%), 0 0 48px rgb(53 184 188 / 50%), 0 0 100px rgb(53 184 188 / 50%)`}
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
      <Container maxW={[`99vw`, `90vw`, `80vw`]} mx={`auto`} py={5}>
        {faqs.nodes.map((item) => (
          <Box my={4} className="faqStyles">
            <Box
              as={`h2`}
              color={`primary`}
              fontSize={[`lg`, `xl`, `2xl`]}
              fontWeight={800}
              textShadow={`1px 0 1px rgb(0 0 1 / 100%), 0 1px 1px rgb(0 0 1 / 100%), 1px 1px 1px rgb(0 0 1 / 100%), 0 2px 3px rgb(0 0 1 / 30%)`}
            >
              {item.question}
            </Box>
            <Box px={6} py={2} color={`black`}>
              {renderRichText(item.answer, options)}
            </Box>
          </Box>
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
