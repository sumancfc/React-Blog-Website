import React from "react";
import Banner from "../common/Banner";
import FollowUs from "../common/FollowUs";
import PopularPosts from "../common/PopularPosts";
import News from "../common/News";
import RecentReviews from "../common/RecentReview";
import TrendVideos from "../common/TrendVideos";
import Layout from "../Layout";
import Sidebar from "../Layout/Sidebar";
import Main from "../Layout/Main";
import Breadcrumb from "../common/Breadcrumb";

const Technology = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Technology' />
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <Main>
              <News />
            </Main>
            <Sidebar>
              <TrendVideos />
              <Banner image='banner_2' />
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

export default Technology;
