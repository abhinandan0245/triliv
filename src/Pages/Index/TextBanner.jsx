import React from 'react';

const TextBanner = ({ reverseLayout }) => {
  return (
    <section className={`flat-spacing ${reverseLayout ? 'pb_xl-0' : 'pt-0 pb_xl-0'}`}>
      <div className="container">
        <div className={`s2-banner-with-text ${reverseLayout ? 'reverse' : ''}`}>
          <div className="banner">
            <img src={reverseLayout ? "images/plant-22.jpg" : "images/plant-1.png"} alt="banner" />
          </div>
          <div className="content-with-text wow fadeInUp">
            <div className="box-title-content">
              <h2 className="title fw-semibold font-7">
                {reverseLayout ? "Perfect Plants for Every Corner" : "Refresh Your Space with Greenery"}
              </h2>
              <p className="desc text-main text-md">
                {reverseLayout 
                  ? "From small succulents to statement plants, find the ideal green companion for any room. Explore our collection today!"
                  : "Discover a range of indoor plants that breathe life into your home. Shop now and elevate your space with nature's beauty."}
              </p>
            </div>
            <a href="/products" className="tf-btn btn-orange animate-btn">
              {reverseLayout ? "Shop Collection" : "Shop Now"}
              <i className="icon icon-arr-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBanner;