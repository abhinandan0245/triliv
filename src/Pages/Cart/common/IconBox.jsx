// src/components/common/IconBox.jsx
import React from 'react';

const features = [
  { icon: 'icon-shipping', title: 'Free Shipping' },
  { icon: 'icon-gift', title: 'Gift Package' },
  { icon: 'icon-return', title: 'Ease Returns' },
  { icon: 'icon-support', title: 'ONE YEAR WARRANTY' }
];

const IconBox = () => {
  return (
    <div className="fl-iconbox wow fadeInUp">
      <div className="swiper tf-swiper sw-auto">
        <div className="swiper-wrapper">
          {features.map((feature, index) => (
            <div key={index} className="swiper-slide">
              <div className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                <div className="box-icon">
                  <i className={`icon ${feature.icon}`} aria-hidden="true" />
                </div>
                <div className="content">
                  <div className="title text-uppercase">{feature.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex d-xl-none sw-dot-default sw-pagination-iconbox justify-content-center" />
    </div>
  );
};

export default IconBox;