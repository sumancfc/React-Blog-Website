import React from "react";
import RecentReviewItem from "./RecentReviewItem";

const recentReviews = [
  {
    image: "/assets/upload/600_1.jpg",
    title: "Banana-chip chocolate cake recipe..",
    rating: "5",
  },
  {
    image: "/assets/upload/600_2.jpg",
    title: "10 practical ways to choose organic..",
    rating: "4",
  },
  {
    image: "/assets/upload/600_3.jpg",
    title: "We are making homemade ravioli..",
    rating: "3.5",
  },
];

const RecentReviews = () => {
  return (
    <div className='widget'>
      <h2 className='widget-title'>Recent Reviews</h2>
      <div className='blog-list-widget'>
        <RecentReviewItem posts={recentReviews} />
      </div>
    </div>
  );
};

export default RecentReviews;
