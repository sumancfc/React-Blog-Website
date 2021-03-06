import React from "react";

const Main = ({ children }) => {
  return (
    <div className='col-lg-9 col-md-12 col-sm-12 col-xs-12'>
      <div className='page-wrapper'>{children}</div>
    </div>
  );
};

export default Main;
