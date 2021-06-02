import { Container } from "@chakra-ui/layout";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title={`Thomas J. Henry Watch Party`} />
      <Container></Container>
    </Layout>
  );
};

export default IndexPage;
