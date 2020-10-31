import React from "react";
import Banner from "../common/Banner";
import FollowUs from "../common/FollowUs";
import MasonryGrid from "../common/Grid/MasonryGrid";
import PopularPosts from "../common/PopularPosts";
import News from "../common/News";
import RecentReviews from "../common/RecentReview";
import TrendVideos from "../common/TrendVideos";
import Layout from "../Layout";
import Sidebar from "../Layout/Sidebar";
import Main from "../Layout/Main";

const Home = () => {
  return (
    <Layout>
      <MasonryGrid />
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <Main>
              <News title='Recent News' />
            </Main>
            <Sidebar>
              <Banner image='banner_2' />
              <TrendVideos />
              <PopularPosts />
              <RecentReviews />
              <FollowUs />
              <Banner image='banner_4' />
            </Sidebar>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
