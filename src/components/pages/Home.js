import React from "react";
import MasonryGrid from "../common/Grid/MasonryGrid";
import RecentNews from "../common/RecentNews";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <MasonryGrid />
      <RecentNews />
    </Layout>
  );
};

export default Home;
