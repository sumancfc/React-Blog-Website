import React from "react";
import PopularPostsItem from "./PopularPostsItem";

const popularPosts = [
  {
    image: "/assets/upload/600_1.jpg",
    title: "5 Beautiful buildings you need..",
    publishedAt: "12 Jan, 2020",
  },
  {
    image: "/assets/upload/600_2.jpg",
    title: "Let's make an introduction for..",
    publishedAt: "12 Jan, 2020",
  },
  {
    image: "/assets/upload/600_3.jpg",
    title: "Did you see the most beautiful..",
    publishedAt: "12 Jan, 2016",
  },
];

const PopularPosts = () => {
  return (
    <div className='widget'>
      <h2 className='widget-title'>Popular Posts</h2>
      <div className='blog-list-widget'>
        <PopularPostsItem posts={popularPosts} />
      </div>
    </div>
  );
};

export default PopularPosts;
