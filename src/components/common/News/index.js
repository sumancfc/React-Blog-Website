import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { postdata } from "./Postdata";
import Pagination from "../Pagination";
import "./News.css";

const News = ({ title = false }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

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
    <>
      <div className='page-wrapper'>
        {title && (
          <div className='blog-top clearfix'>
            <h4 className='pull-left'>{title}</h4>
          </div>
        )}

        <NewsItem posts={currentPosts} />
      </div>

      <hr className='invisible' />

      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default News;
