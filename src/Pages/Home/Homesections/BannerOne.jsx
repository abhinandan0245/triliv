import React, { useEffect } from 'react';

import 'lazysizes'; // Alternative for lazyload in React
import { WOW } from 'wowjs'; // Alternative for wow.js animations
 // Assuming you have your CSS file

const BannerOne = () => {
  // Initialize wow.js for animations
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <section className="flat-spacing pt-0 pb_xl-0">
      <div className="container">
        <div className="s2-banner-with-text">
          <div className="banner">
            {/* Using loading="lazy" as modern alternative to lazyload class */}
            <img 
              src="images/plant-1.png" 
              data-src="images/plant-1.png" 
              alt="banner" 
              className="lazyload"
              loading="lazy"
            />
          </div>
          <div className="content-with-text wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <div className="box-title-content">
              <h2 className="title fw-semibold font-7">Refresh Your Space with Greenery</h2>
              <p className="desc text-main text-md">Discover a range of indoor plants that breathe life into
                your home. Shop now and elevate your space with nature's beauty.</p>
            </div>
            {/* Using React Router's Link would be better for internal navigation */}
            <a href="/shop" className="tf-btn btn-orange animate-btn">Shop Now</a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default BannerOne;