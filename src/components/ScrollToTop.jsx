


// import { useEffect, useState } from "react";
// import "./ScrollToTop.css";

// const ScrollToTop = () => {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (!showButton) return null;

//   return (
//     <button
//       type="button"
//       className="scroll-to-top"
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//     >
//       ↑
//     </button>
//   );
// };

// export default ScrollToTop;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const { pathname } = useLocation();

  // Route change hone par page top par jayega
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  // Scroll hone par button show/hide
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

  // Scroll-to-top button click
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
