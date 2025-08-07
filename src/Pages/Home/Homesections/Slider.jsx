import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useGetAllBannersQuery } from "../../../services/homepage/sliderApi";

const Slider = () => {
  const { data: banners = [], error, isLoading } = useGetAllBannersQuery();
  const swiperRef = useRef(null);

  const animateSlide = (slideElement) => {
    if (!slideElement) return;

    const elements = {
      title: slideElement.querySelector(".heading"),
      subtitle: slideElement.querySelector(".sub"),
      button: slideElement.querySelector(".box-btn-slider"),
    };

    // Reset all animations
    Object.values(elements).forEach((el) => {
      if (el) {
        el.classList.remove(
          "animate__animated",
          "animate__fadeInDown",
          "animate__fadeInUp",
          "animate__zoomIn",
          "animate__fadeInRight",
          "animate__pulse",
          "animate__flipInX",
          "animate__lightSpeedIn",
          "animate__rubberBand"
        );
      }
    });

    // Apply new animations with delays
    setTimeout(() => {
      elements.title?.classList.add("animate__animated", "animate__fadeInDown");
    }, 100);
    setTimeout(() => {
      elements.subtitle?.classList.add("animate__animated", "animate__fadeInUp");
    }, 300);
    setTimeout(() => {
      elements.button?.classList.add("animate__animated", "animate__fadeIn");
    }, 500);
  };

  const swiperConfig = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    speed: 600,
    pagination: {
      clickable: true,
      el: ".sw-pagination-slider",
    },
    on: {
      init: (swiper) => {
        animateSlide(swiper.slides[swiper.activeIndex]);
      },
      slideChange: (swiper) => {
        animateSlide(swiper.slides[swiper.activeIndex]);
      },
    },
  };

  if (isLoading) return <p>Loading banners...</p>;
  if (error) return <p>Error loading banners</p>;

  return (
    <div className="tf-slideshow slider-plant slider-default">
      <div className="swiper tf-sw-slideshow" dir="ltr">
        <Swiper {...swiperConfig} modules={[Autoplay, Pagination]} className="swiper-wrapper" ref={swiperRef}>
          {banners.map((banner, index) => (
            <SwiperSlide key={banner.id} data-swiper-slide-index={index}>
              <div className="slider-wrap">
                <div className="image">
                  <img
                    src={banner.homepageImage}
                    alt={banner.title}
                    className="lazyload"
                  />
                </div>
                <div className="box-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="content-slider text-center">
                          <div className="box-title-slider">
                            <div className="heading font-7 display-2xl text-white fw-semibold">
                              {banner.title}
                            </div>
                            <p className="sub text-md text-white">{banner.description}</p>
                          </div>
                          <div className="box-btn-slider">
                            <a
                              href={banner.linkUrl || "#"}
                              className="tf-btn animate-btn btn-orange"
                            >
                              Shop Collection
                              <i className="icon icon-arr-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots style-grey dot-white sw-pagination-slider justify-content-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
