import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const Slider= () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: 'images/slider-plant-1.jpg',
      title: 'Elegance Redefined',
      subtitle: 'Discover timeless styles for every occasion.',
      link: 'shop',
      animations: {
        title: 'animate__fadeInDown',
        subtitle: 'animate__fadeInUp',
        button: 'animate__fadeIn'
      }
    },
    {
      id: 2,
      image: 'images/slider-plant-2.jpg',
      title: 'Timeless Elegance',
      subtitle: 'Explore classic designs that suit every moment.',
      link: 'shop',
      animations: {
        title: 'animate__zoomIn',
        subtitle: 'animate__fadeInRight',
        button: 'animate__pulse'
      }
    },
    {
      id: 3,
      image: 'images/slider-plant-3.jpg',
      title: 'Refined Beauty',
      subtitle: 'Explore classic designs that suit every moment.',
      link: 'shop',
      animations: {
        title: 'animate__flipInX',
        subtitle: 'animate__lightSpeedIn',
        button: 'animate__rubberBand'
      }
    }
  ];

  const swiperConfig = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    speed: 1000,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: {
      clickable: true,
      el: '.sw-pagination-slider',
    },
    on: {
      init: (swiper) => {
        animateSlide(swiper.slides[swiper.activeIndex]);
      },
      slideChange: (swiper) => {
        animateSlide(swiper.slides[swiper.activeIndex]);
      }
    }
  };

  const animateSlide = (slideElement) => {
    if (!slideElement) return;

    const elements = {
      title: slideElement.querySelector('.heading'),
      subtitle: slideElement.querySelector('.sub'),
      button: slideElement.querySelector('.box-btn-slider')
    };

    // Reset all animations first
    Object.values(elements).forEach(el => {
      if (el) {
        el.classList.remove('animate__animated', ...Object.values(el.dataset.animations || {}));
      }
    });

    // Apply new animations with delays
    setTimeout(() => {
      if (elements.title) {
        elements.title.classList.add('animate__animated', slides[slideElement.dataset.swiperSlideIndex]?.animations.title);
      }
    }, 100);

    setTimeout(() => {
      if (elements.subtitle) {
        elements.subtitle.classList.add('animate__animated', slides[slideElement.dataset.swiperSlideIndex]?.animations.subtitle);
      }
    }, 300);

    setTimeout(() => {
      if (elements.button) {
        elements.button.classList.add('animate__animated', slides[slideElement.dataset.swiperSlideIndex]?.animations.button);
      }
    }, 500);
  };

  return (
    <div className="tf-slideshow slider-plant slider-default">
      <div dir="ltr" className="swiper tf-sw-slideshow slider-effect-fade swiper-initialized swiper-horizontal swiper-backface-hidden"
           data-preview="1" data-tablet="1" data-mobile="1"
           data-centered="false" data-space="0" data-space-mb="0"
           data-loop="true" data-auto-play="true">
        
        <Swiper
          {...swiperConfig}
          modules={[Autoplay, Pagination, EffectFade]}
          className="swiper-wrapper "
          ref={swiperRef}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="swiper-slide swiper-slide-next" data-swiper-slide-index={index}>
              <div className="slider-wrap">
                <div className="image">
                  <img 
                    src={slide.image} 
                    data-src={slide.image} 
                    alt="slider" 
                    className="lazyload" 
                  />
                </div>
                <div className="box-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="content-slider text-center">
                          <div className="box-title-slider">
                            <div className="heading font-7 display-2xl text-white fw-semibold"
                                 data-animations={slide.animations.title}>
                              {slide.title}
                            </div>
                            <p className="sub text-md text-white"
                               data-animations={slide.animations.subtitle}>
                              {slide.subtitle}
                            </p>
                          </div>
                          <div className="box-btn-slider"
                               data-animations={slide.animations.button}>
                            <a href={slide.link} className="tf-btn animate-btn btn-orange">
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