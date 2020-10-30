import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ pageTitle }) => {
  return (
    <div className='breadcrumb-section'>
      <div className='container'>
        <div className='row'>
          <div className=' col-md-12 col-sm-12 col-xs-12'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='/'>Home</Link>
              </li>
              <li className='breadcrumb-item active'>{pageTitle}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
