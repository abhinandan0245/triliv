import React from 'react';

const BannerTwo = () => {
  return (
    <section className="flat-spacing-3">
      <div className="container">
        <div className="s3-banner-with-text">
          <div className="content-with-text wow fadeInUp">
            <div className="box-title-content">
              <span className="subtitle text-md fw-medium">LIFE GATHERS AROUND PLANTS</span>
              <h2 className="title fw-semibold font-7">Perfect Plants for Every Corner</h2>
              <p className="desc text-main text-md">From small succulents to statement plants, find the ideal
                green companion for any room. Explore our collection today!</p>
            </div>
            <a href="/shop" className="tf-btn btn-orange animate-btn">Shop Collection</a>
          </div>
          <div className="image-banner">
            <div className="image image-1 hover-img">
              <div className="shine-item img-style wow fadeInRight" data-wow-delay="0.1s">
                <img src="images/sub-plant-3.jpg" data-src="images/sub-plant-3.jpg" alt="" className="lazyload" />
              </div>
            </div>
            <div className="image image-2 hover-shine hover-img">
              <div className="shine-item img-style wow fadeInRight">
                <img src="images/plant-22.jpg" data-src="images/plant-22.jpg" alt="" className="lazyload" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;