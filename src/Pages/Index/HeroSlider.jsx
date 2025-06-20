import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: "images/slider-plant-1.jpg",
      title: "Elegance Redefined",
      subtitle: "Discover timeless styles for every occasion",
      buttonText: "Shop Collection"
    },
    {
      id: 2,
      image: "images/slider-plant-2.jpg",
      title: "Timeless Elegance",
      subtitle: "Explore classic designs that suit every moment",
      buttonText: "Shop Collection"
    },
    {
      id: 3,
      image: "images/slider-plant-3.jpg",
      title: "Refined Beauty",
      subtitle: "Explore classic designs that suit every moment",
      buttonText: "Shop Collection"
    }
  ];

  return (
    <div className="tf-slideshow slider-plant slider-default">
      <Swiper
        className="tf-sw-slideshow slider-effect-fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider-wrap">
              <div className="image">
                <img src={slide.image} alt="slider" />
              </div>
              <div className="box-content">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="content-slider text-center">
                        <div className="box-title-slider">
                          <div className="heading font-7 display-2xl text-white fw-semibold fade-item fade-item-1">
                            {slide.title}
                          </div>
                          <p className="sub text-md text-white fade-item fade-item-2">
                            {slide.subtitle}
                          </p>
                        </div>
                        <div className="box-btn-slider fade-item fade-item-3">
                          <a href="/products" className="tf-btn animate-btn btn-orange">
                            {slide.buttonText}
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
    </div>
  );
};

export default HeroSlider;