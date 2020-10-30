import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecentNewsItem from "./RecentNewsItem";
import { postdata } from "./Postdata";
import "./RecentNews.css";
import Pagination from "../Pagination";

const RecentNews = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  useEffect(() => {
    setPosts(postdata);
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className='section'>
      <div className='container'>
        <div className='row'></div>
        <div className='col-lg-9 col-md-12 col-sm-12 col-xs-12'>
          <div className='page-wrapper'>
            <div className='blog-top clearfix'>
              <h4 className='pull-left'>
                Recent News
                <Link to='#'>
                  <i className='fa fa-rss'></i>
                </Link>
              </h4>
            </div>

            <RecentNewsItem posts={currentPosts} />
          </div>

          <hr className='invisible' />

          <Pagination
            postPerPage={postPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
