import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Container } from "@chakra-ui/layout";

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
      <Container>
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
  }
`;
