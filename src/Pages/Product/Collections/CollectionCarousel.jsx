// components/collections/CollectionCarousel.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const CollectionCarousel = ({ collections }) => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    return () => {
      // Cleanup when component unmounts
    };
  }, []);

  return (
    <div className="flat-spacing-4">
      <div className="container">
        <div className="fl-control-sw pos1">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={12}
            speed={800}
            observer={true}
            observeParents={true}
            slidesPerGroup={2}
            navigation={{
              nextEl: '.nav-next-cls',
              prevEl: '.nav-prev-cls',
            }}
            pagination={{
              el: '.sw-pagination-cls',
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerGroup: 3,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
                slidesPerGroup: 3,
              },
            }}
            className="hover-sw-nav wow fadeInUp"
          >
            {collections.map((collection, index) => (
              <SwiperSlide key={index}>
                <div className="wg-cls style-abs2 hover-img">
                  <a href={collection.link} className="image-wrap relative">
                    <div className="image img-style">
                      <img
                        src={collection.image}
                        data-src={collection.image}
                        alt={collection.name}
                        className="lazyload"
                      />
                    </div>
                    <div className="cls-btn text-center">
                      <button className="tf-btn btn-white hover-dark">
                        View all
                      </button>
                    </div>
                    <span className="tf-overlay" />
                  </a>
                  <div className="cls-content text-center">
                    <a href={collection.link} className="text-type text-xl-2 fw-medium link">
                      {collection.name}
                    </a>
                    <span className="count-item body-text-2 text-main">
                      {collection.count} items
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-cls justify-content-center" />
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-cls" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-cls" />
        </div>
      </div>
    </div>
  );
};

export default CollectionCarousel;