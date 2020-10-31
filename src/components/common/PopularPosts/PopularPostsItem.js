import React from "react";
import { Link } from "react-router-dom";

const PopularPostsItem = ({ posts }) => {
  return (
    <div className='list-group'>
      {posts.map((post, i) => (
        <Link
          key={i}
          to='#'
          className='list-group-item list-group-item-action flex-column align-items-start'
        >
          <div className='w-100 justify-content-between'>
            <img
              src={post.image}
              alt={post.title}
              className='img-fluid float-left'
            />
            <h5 className='mb-1'>{post.title}</h5>
            <small>{post.publishedAt}</small>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularPostsItem;
