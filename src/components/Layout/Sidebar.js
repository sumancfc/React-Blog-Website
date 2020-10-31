import React from "react";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  return (
    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
      <div className='sidebar'>{children}</div>
    </div>
  );
};

export default Sidebar;
