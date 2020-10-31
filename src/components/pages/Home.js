import React from "react";
import Banner from "../common/Banner";
import MasonryGrid from "../common/Grid/MasonryGrid";
import RecentNews from "../common/RecentNews";
import TrendVideos from "../common/TrendVideos";
import Layout from "../Layout";
import Sidebar from "../Layout/Sidebar";

const Home = () => {
  return (
    <Layout>
      <MasonryGrid />
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <RecentNews />
            <Sidebar>
              <Banner image='banner_2' />
              <TrendVideos />
              <Banner image='banner_4' />
            </Sidebar>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
