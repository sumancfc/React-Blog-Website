import React from "react";
import { Link } from "react-router-dom";

const TrendVideosItem = ({ posts }) => {
  return (
    <div className='trend-videos'>
      {posts.map((post, i) => (
        <React.Fragment key={i}>
          <div className='blog-box'>
            <div className='post-media'>
              <Link to={post.link}>
                <img src={post.image} alt={post.title} className='img-fluid' />
                <div className='hovereffect'>
                  <span className='videohover'></span>
                </div>
              </Link>
            </div>
            <div className='blog-meta'>
              <h4>
                <Link to={post.link}>{post.title}</Link>
              </h4>
            </div>
          </div>
          <hr className='invisible' />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TrendVideosItem;
