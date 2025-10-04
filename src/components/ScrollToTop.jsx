import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // pura location object lo

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.key]); 
  // ab dono dependency sahi kaam karenge

  return null;
};

export default ScrollToTop;
