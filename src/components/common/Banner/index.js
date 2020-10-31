import React from "react";
import "./Banner.css";

const Banner = ({ image }) => {
  return (
    <div className='widget'>
      <div className='banner-spot clearfix'>
        <div className='banner-img'>
          <img
            src={`/assets/upload/${image}.jpg`}
            alt={image}
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
