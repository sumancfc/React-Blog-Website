import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import MasonryGrid from "../common/Grid/MasonryGrid";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <Breadcrumb />
      <MasonryGrid />
    </Layout>
  );
};

export default Home;
