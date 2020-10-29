import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div id='wrapper'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
