import React, { useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      className='scroll-to-top'
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      Scroll to Top
    </div>
  );
};

export default ScrollToTop;
