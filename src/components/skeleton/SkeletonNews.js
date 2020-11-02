import React from "react";
import SkeletonAnimation from "./SkeletonAnimation";
import SkeletonElement from "./SkeletonElement";

const SkeletonNews = () => {
  return (
    <div className='skeleton__wrapper skeleton__news-wrapper'>
      <div className='skeleton__news'>
        <div>
          <SkeletonElement type='thumbnail' />
        </div>
        <div className='skeleton__news-content'>
          <SkeletonElement type='title' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
        </div>
      </div>
      <SkeletonAnimation />
    </div>
  );
};

export default SkeletonNews;
