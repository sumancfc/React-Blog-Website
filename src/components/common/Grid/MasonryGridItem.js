import React from "react";
import { Link } from "react-router-dom";

const MasonryGridItem = () => {
  const posts = [
    {
      image: "/assets/upload/tech_01.jpg",
      className: "first-slot",
      categoryLink: "/category",
      category: "Technology",
      title:
        "Say hello to real handmade office furniture! Clean and beautiful design",
      link: "/",
      publishedAt: "24 July, 2019",
      author: "Suman Shrestha",
      authorLink: "/author",
    },
    {
      image: "/assets/upload/tech_02.jpg",
      className: "second-slot",
      categoryLink: "/category",
      category: "Gadgets",
      title: "Do not make mistakes when choosing web hosting",
      link: "/",
      publishedAt: "  03 July, 2020",
      author: "Shrestha",
      authorLink: "/author",
    },
    {
      image: "/assets/upload/tech_03.jpg",
      className: "last-slot",
      categoryLink: "/category",
      category: "Technology",
      title: "The most reliable Galaxy Note 8 images leaked",
      link: "/",
      publishedAt: "24 July, 2018",
      author: "Suman",
      authorLink: "/author",
    },
  ];
  return (
    <>
      {posts.map((post, i) => (
        <div key={i} className={post.className}>
          <div className='masonry-box'>
            <img src={post.image} alt={post.title} className='img-fluid' />
            <div className='shadoweffect'>
              <div className='shadow-desc'>
                <div className='blog-meta'>
                  <span className='bg-category'>
                    <Link to={post.categoryLink} title={post.category}>
                      {post.category}
                    </Link>
                  </span>
                  <h4>
                    <Link to={post.link} title={post.title}>
                      {post.title}
                    </Link>
                  </h4>
                  <small>
                    <Link to={post.link}>{post.publishedAt}</Link>
                  </small>
                  <small>
                    <Link to={post.authorLink}>by {post.author}</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MasonryGridItem;
