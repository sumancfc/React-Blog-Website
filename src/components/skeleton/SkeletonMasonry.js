import React from "react";
import SkeletonAnimation from "./SkeletonAnimation";
import SkeletonElement from "./SkeletonElement";

const SkeletonMasonry = ({ className }) => {
  return (
    <div className={`skeleton__wrapper ${className}`}>
      <div className='skeleton__masonry'>
        <SkeletonElement type='category' />
        <SkeletonElement type='title' />
        <SkeletonElement type='title' />
        <SkeletonElement type='meta' />
      </div>
      <SkeletonAnimation />
    </div>
  );
};

export default SkeletonMasonry;
