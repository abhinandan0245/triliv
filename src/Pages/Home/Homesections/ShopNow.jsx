import React, { useEffect } from 'react';

const ShopNow = () => {
  useEffect(() => {
    // Initialize Swiper here if needed
    // You might need to import Swiper and initialize it in this effect
    // Example:
    
    const swiper = new Swiper('.tf-swiper', {
      slidesPerView: 2,
      spaceBetween: 12,
      speed: 800,
      observer: true,
      observeParents: true,
      slidesPerGroup: 2,
      pagination: {
        el: '.sw-pagination-cls',
        clickable: true
      },
      breakpoints: {
        768: { slidesPerView: 2.7, spaceBetween: 12, slidesPerGroup: 2 },
        992: { slidesPerView: 3.7, spaceBetween: 24, slidesPerGroup: 3 },
        1200: { slidesPerView: 4.7, spaceBetween: 24, slidesPerGroup: 3 }
      }
    });
    
  }, []);

  const collections = [
    {
      id: 1,
      title: "Plants",
      image: "images/plant-1.jpg",
      link: "shop"
    },
    {
      id: 2,
      title: "Plant Care",
      image: "images/plant-2.jpg",
      link: "shop"
    },
    {
      id: 3,
      title: "Pots",
      image: "images/plant-3.jpg",
      link: "shop"
    },
    {
      id: 4,
      title: "Pet-Friendly",
      image: "images/plant-4.jpg",
      link: "shop"
    },
    {
      id: 5,
      title: "Gift Ideas",
      image: "images/plant-5.jpg",
      link: "shop"
    }
  ];

  return (
    <section>
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h3 className="title font-7">Shop By Collections</h3>
        </div>
      </div>
      <div className="slider-layout-right wow fadeInUp">
        <div 
          dir="ltr" 
          className="swiper tf-swiper tf-sw-right wrap-sw-over" 
          data-swiper={JSON.stringify({
            slidesPerView: 2,
            spaceBetween: 12,
            speed: 800,
            observer: true,
            observeParents: true,
            slidesPerGroup: 2,
            pagination: { el: ".sw-pagination-cls", clickable: true },
            breakpoints: {
              768: { slidesPerView: 2.7, spaceBetween: 12, slidesPerGroup: 2 },
              992: { slidesPerView: 3.7, spaceBetween: 24, slidesPerGroup: 3 },
              1200: { slidesPerView: 4.7, spaceBetween: 24, slidesPerGroup: 3 }
            }
          })}
        >
          <div className="swiper-wrapper">
            {collections.map((collection) => (
              <div key={collection.id} className="swiper-slide">
                <div className="wg-cls hover-img">
                  <a href={collection.link} className="d-block radius-16 image img-style">
                    <img 
                      src={collection.image} 
                      data-src={collection.image} 
                      alt={collection.title}
                      className="ls-is-cached lazyloaded" 
                    />
                  </a>
                  <div className="cls-content gap-6">
                    <a href={collection.link} className="text-xl fw-medium link">
                      {collection.title}
                    </a>
                    <a href={collection.link} className="tf-btn btn-line-dark">
                      <span className="text-xs">Shop Now</span>
                      <i className="icon icon-arrow-top-left fs-7" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-cls justify-content-center"></div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;