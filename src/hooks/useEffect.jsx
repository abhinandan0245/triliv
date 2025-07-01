import React, { useEffect } from "react";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="your-content" data-aos="fade-up">
      Content here
    </div>
  );
};
