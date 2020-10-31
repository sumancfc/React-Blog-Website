import React from "react";
import TrendVideosItem from "./TrendVideosItem";
import "./TrendVideos.css";

const videoPosts = [
  {
    image: "/assets/upload/video_1.jpg",
    link: "/",
    title: "We prepared the best 10 laptop presentations for you",
  },
  {
    image: "/assets/upload/video_2.jpg",
    link: "/",
    title: "We are guests of ABC Design Studio - Vlog",
  },
  {
    image: "/assets/upload/video_3.jpg",
    link: "/",
    title: "Both blood pressure monitor and intelligent clock",
  },
];

const TrendVideos = () => {
  return (
    <div className='widget'>
      <h2 className='widget-title'>Trend Videos</h2>
      <TrendVideosItem posts={videoPosts} />
    </div>
  );
};

export default TrendVideos;
