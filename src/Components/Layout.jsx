import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
function Layout() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
 const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {scrolled ? (
        <div className="arrow">
          <a onClick={(e)=>scrollToTop(e)}>
            <img src="/images/arrow-up.webp" alt="" />
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Layout;
