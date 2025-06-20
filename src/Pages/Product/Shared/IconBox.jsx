// components/shared/IconBox.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const IconBox = ({ items }) => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    return () => {
      // Cleanup when component unmounts
    };
  }, []);

  return (
    <div className="flat-spacing-5 line-top flat-wrap-iconbox">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={12}
          speed={800}
          preventInteractionOnTransition={false}
          touchStartPreventDefault={false}
          pagination={{
            el: '.sw-pagination-iconbox',
            clickable: true,
          }}
          breakpoints={{
            575: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 205,
            },
          }}
          className="wow fadeInUp"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="tf-icon-box style-2">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={item.iconPath} fill="#ABABAB" />
                </svg>
                <div className="content">
                  <div className="title">{item.title}</div>
                  <p className="desc text-grey-2">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex d-xl-none sw-dot-default sw-pagination-iconbox justify-content-center" />
      </div>
    </div>
  );
};

export default IconBox;