import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className="tf-slideshow slider-plant slider-default">
      <div dir="ltr" className="swiper tf-sw-slideshow slider-effect-fade" 
        data-preview={1} data-tablet={1} data-mobile={1} 
        data-centered="false" data-space={0} data-space-mb={0} 
        data-loop="true" data-auto-play="true">
        
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="slider-wrap">
              <div className="image">
                <img src="/images/slider-plant-1.jpg" alt="slider" className="lazyload" />
              </div>
              <div className="box-content">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="content-slider text-center">
                        <div className="box-title-slider">
                          <div className="heading font-7 display-2xl text-white fw-semibold fade-item fade-item-1">
                            Elegance Redefined
                          </div>
                          <p className="sub text-md text-white fade-item fade-item-2">
                            Discover timeless styles for every occasion.
                          </p>
                        </div>
                        <div className="box-btn-slider fade-item fade-item-3">
                          <Link to="/product" className="tf-btn animate-btn btn-orange">
                            Shop Collection
                            <i className="icon icon-arr-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="slider-wrap">
              <div className="image">
                <img src="/images/slider-plant-2.jpg" alt="slider" className="lazyload" />
              </div>
              <div className="box-content">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="content-slider text-center">
                        <div className="box-title-slider">
                          <div className="heading font-7 display-2xl text-white fw-semibold fade-item fade-item-1">
                            Timeless Elegance
                          </div>
                          <p className="sub text-md text-white fade-item fade-item-2">
                            Explore classic designs that suit every moment.
                          </p>
                        </div>
                        <div className="box-btn-slider fade-item fade-item-3">
                          <Link to="/product" className="tf-btn animate-btn btn-orange">
                            Shop Collection
                            <i className="icon icon-arr-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots style-grey dot-white sw-pagination-slider justify-content-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;