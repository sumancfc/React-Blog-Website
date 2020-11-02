import React from "react";
import { Link } from "react-router-dom";
import SkeletonNews from "../../skeleton/SkeletonNews";

const NewsItem = ({ posts }) => {
  return (
    <div className='blog-list clearfix'>
      {posts &&
        posts.map((post) => (
          <React.Fragment key={post.id}>
            <div className='blog-box row'>
              <div className='col-md-4'>
                <div className='post-media'>
                  <Link to={`/${post.category}/${post.id}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className='img-fluid'
                    />
                    <div className='hovereffect'></div>
                  </Link>
                </div>
              </div>

              <div className='blog-meta big-meta col-md-8'>
                <h4>
                  <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
                </h4>
                <p>{post.desc}</p>
                <small className='firstsmall'>
                  <Link className='bg-category' to={`/${post.category}`}>
                    {post.category}
                  </Link>
                </small>
                <small>
                  <Link to='#'>{post.publishedAt}</Link>
                </small>
                <small>
                  <Link to='/author'>by {post.author}</Link>
                </small>
                <small>
                  <Link to='#'>
                    <i className='fa fa-eye'></i> {post.views}
                  </Link>
                </small>
              </div>
            </div>
            <hr className='invisible' />
          </React.Fragment>
        ))}

      {!posts &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <SkeletonNews key={n} />)}
    </div>
  );
};

export default NewsItem;
