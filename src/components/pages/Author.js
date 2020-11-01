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
import AboutAuthor from "../common/Author";

const Author = () => {
  return (
    <Layout>
      <Breadcrumb pageTitle='Author / Author-Name' />
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <Main>
              <AboutAuthor />
              <News />
            </Main>
            <Sidebar>
              <FollowUs />
              <TrendVideos />
              <Banner image='banner_2' />
              <PopularPosts />
              <RecentReviews />
              <Banner image='banner_4' />
            </Sidebar>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Author;
