// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// export default function ScrollToTop() {
// const { pathname } = useLocation()
// useEffect(() => {
// window.scrollTo(0, 0)
// }, [pathname])
// return null
// }


import { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      type="button"
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;