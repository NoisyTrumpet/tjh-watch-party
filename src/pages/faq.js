import * as React from "react";
import { graphql } from "gatsby";
// import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
// import { withArtDirection, getImage } from "gatsby-plugin-image";

const FAQ = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={`Thomas J. Henry Watch Party FAQs`}
        description={`Thomas J. Henry Watch Party FAQs`}
      />

      {/* {faqs.nodes.map((fAq) => (
        <h2>{fAq.question}</h2>
        <p>{fAq.answer}</p>
        ))} */}
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
