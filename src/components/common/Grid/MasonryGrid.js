import React from "react";
import MasonryGridItem from "./MasonryGridItem";
import "./MasonryGrid.css";

const MasonryGrid = () => {
  return (
    <section className='section masonry-section'>
      <div className='container-fluid'>
        <div className='masonry-blog clearfix'>
          <MasonryGridItem />
        </div>
      </div>
    </section>
  );
};

export default MasonryGrid;
