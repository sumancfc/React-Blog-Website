import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonMasonry from "../../skeleton/SkeletonMasonry";

const postdata = [
  {
    id: "1",
    image: "/assets/upload/tech_01.jpg",
    className: "first-slot",
    category: "technology",
    title:
      "Say hello to real handmade office furniture! Clean and beautiful design",
    publishedAt: "24 July, 2019",
    author: "Suman Shrestha",
    authorLink: "/author",
  },
  {
    id: "2",
    image: "/assets/upload/tech_02.jpg",
    className: "second-slot",
    category: "gadgets",
    title: "Do not make mistakes when choosing web hosting",
    publishedAt: "  03 July, 2020",
    author: "Shrestha",
    authorLink: "/author",
  },
  {
    id: "3",
    image: "/assets/upload/tech_03.jpg",
    className: "last-slot",
    category: "technology",
    title: "The most reliable Galaxy Note 8 images leaked",
    publishedAt: "24 July, 2018",
    author: "Suman",
    authorLink: "/author",
  },
];

const data = [
  {
    id: "1",
    className: "first-slot",
  },
  {
    id: "2",
    className: "second-slot",
  },
  {
    id: "3",
    className: "last-slot",
  },
];

const MasonryGridItem = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPosts(postdata);
    }, 3000);
  }, []);

  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className={post.className}>
            <div className='masonry-box'>
              <img src={post.image} alt={post.title} className='img-fluid' />
              <div className='shadoweffect'>
                <div className='shadow-desc'>
                  <div className='blog-meta'>
                    <span className='bg-category'>
                      <Link to={`/${post.category}`} title={post.category}>
                        {post.category}
                      </Link>
                    </span>
                    <h4>
                      <Link
                        to={`/${post.category}/${post.id}`}
                        title={post.title}
                      >
                        {post.title}
                      </Link>
                    </h4>
                    <small>
                      <Link to={`/${post.category}/${post.id}`}>
                        {post.publishedAt}
                      </Link>
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

      {!posts &&
        data.map((n) => <SkeletonMasonry key={n.id} className={n.className} />)}
    </>
  );
};

export default MasonryGridItem;
