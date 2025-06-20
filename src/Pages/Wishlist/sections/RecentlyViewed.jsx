import React from 'react';
import ProductCard from '../../common/ProductCard/ProductCard';

const RecentlyViewed = ({ products }) => {
  return (
    <section className="flat-spacing section-viewed pt-0">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h4 className="title">Recently Viewed</h4>
        </div>
        <div className="fl-control-sw wrap-pos-nav sw-over-product wow fadeInUp">
          <div 
            dir="ltr" 
            className="swiper tf-swiper wrap-sw-over" 
            data-swiper={JSON.stringify({
              slidesPerView: 2,
              spaceBetween: 12,
              speed: 800,
              observer: true,
              observeParents: true,
              slidesPerGroup: 2,
              navigation: {
                clickable: true,
                nextEl: ".nav-next-viewed",
                prevEl: ".nav-prev-viewed"
              },
              pagination: { el: ".sw-pagination-viewed", clickable: true },
              breakpoints: {
                "768": { slidesPerView: 3, spaceBetween: 12, slidesPerGroup: 3 },
                "1200": { slidesPerView: 4, spaceBetween: 24, slidesPerGroup: 4 }
              }
            })}
          >
            <div className="swiper-wrapper">
              {products.map((product, index) => (
                <div key={index} className="swiper-slide">
                  <ProductCard 
                    product={product}
                    className="style-2"
                  />
                </div>
              ))}
            </div>
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-viewed justify-content-center" />
          </div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-viewed" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-viewed" />
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;