import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ScrollToTop from "../common/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div id='wrapper'>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
