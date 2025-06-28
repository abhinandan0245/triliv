import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const SubProduct = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper when component mounts
    swiperRef.current = new Swiper('.tf-swiper', {
      slidesPerView: 2,
      spaceBetween: 12,
      speed: 800,
      observer: true,
      observeParents: true,
      slidesPerGroup: 2,
      navigation: {
        clickable: true,
        nextEl: '.nav-next-cls',
        prevEl: '.nav-prev-cls',
      },
      pagination: { 
        el: '.sw-pagination-cls', 
        clickable: true 
      },
      breakpoints: {
        768: { 
          slidesPerView: 3, 
          spaceBetween: 24, 
          slidesPerGroup: 3 
        },
        1200: { 
          slidesPerView: 4, 
          spaceBetween: 24, 
          slidesPerGroup: 3
        }
      }
    });

    // Clean up Swiper when component unmounts
    return () => {
      if (swiperRef.current) {
        // swiperRef.current.destroy();
      }
    };
  }, []);

  const collectionItems = [
    {
      id: 1,
      image: "images/men.jpg",
      title: "Men",
      count: "3 items"
    },
    {
      id: 2,
      image: "images/dresses.jpg",
      title: "Dresses",
      count: "5 items"
    },
    {
      id: 3,
      image: "images/sportwear2.jpg",
      title: "Sportwears",
      count: "9 items"
    },
    {
      id: 4,
      image: "images/bag.jpg",
      title: "Bags",
      count: "4 items"
    },
    {
      id: 5,
      image: "images/men-top.jpg",
      title: "Men's Top",
      count: "7 items"
    },
    {
      id: 6,
      image: "images/kid.jpg",
      title: "Kids",
      count: "11 items"
    }
  ];

  return (
    <div className="flat-spacing-4">
      <div className="container">
        <div className="fl-control-sw pos1">
          <div dir="ltr" className="swiper tf-swiper hover-sw-nav wow fadeInUp">
            <div className="swiper-wrapper">
              {collectionItems.map((item) => (
                <div className="swiper-slide" key={item.id}>
                  <div className="wg-cls style-abs2 hover-img">
                    <a href="product.php" className="image-wrap relative">
                      <div className="image img-style">
                        <img 
                          src={item.image} 
                          data-src={item.image} 
                          alt="" 
                          className="lazyload" 
                        />
                      </div>
                      <div className="cls-btn text-center">
                        <button className="tf-btn btn-white hover-dark">View all</button>
                      </div>
                      <span className="tf-overlay" />
                    </a>
                    <div className="cls-content text-center">
                      <a href="product.php" className="text-type text-xl-2 fw-medium link">
                        {item.title}
                      </a>
                      <span className="count-item body-text-2 text-main">{item.count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-cls justify-content-center" />
          </div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-cls" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-cls" />
        </div>
      </div>
    </div>
  );
};

export default SubProduct;