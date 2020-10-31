import React from "react";
import { Link } from "react-router-dom";
import "./FollowUs.css";

const FollowUs = () => {
  return (
    <div className='widget'>
      <h2 className='widget-title'>Follow Us</h2>

      <div className='row text-center'>
        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-6'>
          <Link to='#' className='social-button facebook-button'>
            <i className='fa fa-facebook'></i>
            <p>27k</p>
          </Link>
        </div>

        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-6'>
          <Link to='#' className='social-button twitter-button'>
            <i className='fa fa-twitter'></i>
            <p>98k</p>
          </Link>
        </div>

        <div className='col-lg-3 col-md-3 col-sm-3 col-xs-6'>
          <Link to='#' className='social-button youtube-button'>
            <i className='fa fa-youtube'></i>
            <p>22k</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
