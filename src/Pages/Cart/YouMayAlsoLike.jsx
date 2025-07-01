import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const YouMayAlsoLike = () => {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
  

    // Initialize Swiper
    swiperInstance.current = new Swiper(swiperRef.current, {
      slidesPerView: 2,
      spaceBetween: 12,
      speed: 800,
      observer: true,
      observeParents: true,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.nav-next-also',
        prevEl: '.nav-prev-also',
      },
      pagination: {
        el: '.sw-pagination-also',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 12,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24,
          slidesPerGroup: 4,
        },
      },
    });

    // Cleanup function
    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
      }
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Loose Fit Tee",
      priceNew: "$120.00",
      priceOld: "$150.00",
      mainImage: "images/product/product-36.jpg",
      hoverImage: "images/product/product-4.jpg",
      colors: [
        { name: "Beige", class: "bg-beige", image: "images/product/product-36.jpg", active: true },
        { name: "Black", class: "bg-dark", image: "images/product/product-9.jpg" },
        { name: "White", class: "bg-white", image: "images/product/product-4.jpg", line: true }
      ]
    },
    {
      id: 2,
      name: "Long Sleeve T-Shirt",
      priceNew: "$120.00",
      priceOld: "$150.00",
      mainImage: "images/product/product-37.jpg",
      hoverImage: "images/product/product-7.jpg",
      colors: [
        { name: "Red", class: "bg-red", image: "images/product/product-37.jpg", active: true },
        { name: "Beige", class: "bg-beige", image: "images/product/product-7.jpg" },
        { name: "Grey", class: "bg-grey-4", image: "images/product/product-2.jpg" }
      ]
    },
    {
      id: 3,
      name: "Loose Fit Tee",
      priceNew: "$120.00",
      priceOld: "$130.00",
      mainImage: "images/product/product-38.jpg",
      hoverImage: "images/product/product-29.jpg",
      colors: [
        { name: "Black", class: "bg-dark", image: "images/product/product-38.jpg", active: true },
        { name: "White", class: "bg-white", image: "images/product/product-29.jpg", line: true }
      ]
    },
    {
      id: 4,
      name: "Long Sleeve T-Shirt",
      priceNew: "$120.00",
      priceOld: "$130.00",
      mainImage: "images/product/product-39.jpg",
      hoverImage: "images/product/product-27.jpg",
      colors: [
        { name: "Blue", class: "bg-light-blue", image: "images/product/product-39.jpg", active: true },
        { name: "Light Purple", class: "bg-light-purple-3", image: "images/product/product-27.jpg" }
      ]
    },
    {
      id: 5,
      name: "COOLMAX® Loose Fit Tee",
      priceNew: "$60.00",
      priceOld: "$80.00",
      mainImage: "images/product/product-13.jpg",
      hoverImage: "images/product/product-14.jpg",
      colors: [
        { name: "Black", class: "bg-dark", image: "images/product/product-13.jpg", active: true },
        { name: "Purple", class: "bg-purple-3", image: "images/product/product-14.jpg" }
      ]
    },
    {
      id: 6,
      name: "Printed T-shirt",
      priceNew: "$120.00",
      priceOld: "$140.00",
      mainImage: "images/product/product-26.jpg",
      hoverImage: "images/product/product-26.jpg",
      colors: [
        { name: "White", class: "bg-white", image: "images/product/product-26.jpg", active: true, line: true },
        { name: "Grey", class: "bg-grey-4", image: "images/women-grey-1.jpg" },
        { name: "Black", class: "bg-dark", image: "images/women-black-6.jpg" }
      ]
    }
  ];

  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="flat-title  mb_5" data-aos="fade-up">
          <h4 className="title">You May Also Like</h4>
        </div>
        <div className="fl-control-sw wrap-pos-nav sw-over-product">
          <div dir="ltr" className="swiper tf-swiper wrap-sw-over" ref={swiperRef}>
            <div className="swiper-wrapper">
              {products.map((product) => (
                <div className="swiper-slide" key={product.id}>
                  <div className="card-product style-2">
                    <div className="card-product-wrapper">
                      <a href="productdetail" className="product-img">
                        <img 
                          className="img-product lazyload"
                          data-src={product.mainImage}
                          src={product.mainImage}
                          alt="image-product"
                        />
                        <img 
                          className="img-hover lazyload"
                          data-src={product.hoverImage}
                          src={product.hoverImage}
                          alt="image-product"
                        />
                      </a>
                      <ul className="list-product-btn">
                        <li>
                          <a href="cart" className="hover-tooltip box-icon">
                            <span className="icon icon-cart2"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="javascript:void(0);" className="hover-tooltip box-icon">
                            <span className="icon icon-heart2"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#quickView" 
                            data-bs-toggle="modal"
                            className="hover-tooltip box-icon quickview"
                          >
                            <span className="icon icon-view"></span>
                            <span className="tooltip">Quick View</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a 
                            href="#compare" 
                            data-bs-toggle="modal"
                            className="hover-tooltip box-icon"
                          >
                            <span className="icon icon-compare"></span>
                            <span className="tooltip">Add to Compare</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-product-info">
                      <a href="productdetail" className="name-product link fw-medium text-md">
                        {product.name}
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className="price-new">{product.priceNew}</span>
                        <span className="price-old">{product.priceOld}</span>
                      </p>
                      <ul className="list-color-product">
                        {product.colors.map((color, index) => (
                          <li 
                            key={index}
                            className={`list-color-item hover-tooltip tooltip-bot color-swatch ${color.active ? 'active' : ''} ${color.line ? 'line' : ''}`}
                          >
                            <span className="tooltip color-filter">{color.name}</span>
                            <span className={`swatch-value ${color.class}`}></span>
                            <img 
                              className="lazyload" 
                              data-src={color.image}
                              src={color.image}
                              alt="image-product"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-also justify-content-center"></div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-also"></div>
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-also"></div>
        </div>
      </div>
    </section>
  );
};

export default YouMayAlsoLike;