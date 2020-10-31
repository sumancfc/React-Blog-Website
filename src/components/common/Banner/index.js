import React from "react";
import "./Banner.css";

const Banner = ({ image }) => {
  return (
    <div class='banner-spot clearfix'>
      <div class='banner-img'>
        <img
          src={`/assets/upload/${image}.jpg`}
          alt={image}
          class='img-fluid'
        />
      </div>
    </div>
  );
};

export default Banner;
