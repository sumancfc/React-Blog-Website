import React from "react";

const Ratings = ({ value }) => {
  return (
    <span className='rating'>
      <i
        className={
          value >= 1
            ? "fa fa-star"
            : value >= 0.5
            ? "fa fa-star-half-alt"
            : "fa fa-star-alt"
        }
      ></i>
      <i
        className={
          value >= 2
            ? "fa fa-star"
            : value >= 1.5
            ? "fa fa-star-half-alt"
            : "fa fa-star"
        }
      ></i>
      <i
        className={
          value >= 3
            ? "fa fa-star"
            : value >= 2.5
            ? "fa fa-star-half-alt"
            : "fa fa-star"
        }
      ></i>
      <i
        className={
          value >= 4
            ? "fa fa-star"
            : value >= 3.5
            ? "fa fa-star-half-alt"
            : "fa fa-star"
        }
      ></i>
      <i
        className={
          value >= 5
            ? "fa fa-star"
            : value >= 4.5
            ? "fa fa-star-half-alt"
            : "fa fa-star"
        }
      ></i>
    </span>
  );
};

export default Ratings;
