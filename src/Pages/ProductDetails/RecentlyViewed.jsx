import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const RecentlyViewed = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper when component mounts
    swiperRef.current = new Swiper('.tf-swiper.wrap-sw-over', {
      slidesPerView: 2,
      spaceBetween: 12,
      speed: 800,
      observer: true,
      observeParents: true,
      slidesPerGroup: 2,
      navigation: {
        clickable: true,
        nextEl: '.nav-next-viewed',
        prevEl: '.nav-prev-viewed'
      },
      pagination: { 
        el: '.sw-pagination-viewed', 
        clickable: true 
      },
      breakpoints: {
        768: { 
          slidesPerView: 3, 
          spaceBetween: 12, 
          slidesPerGroup: 3 
        },
        1200: { 
          slidesPerView: 4, 
          spaceBetween: 24, 
          slidesPerGroup: 4
        }
      }
    });

    // Clean up on unmount
    return () => {
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  // Product data array for easier management
  const products = [
    {
      id: 1,
      name: "Turtleneck T-shirt",
      mainImage: "images/product/product-5.jpg",
      hoverImage: "images/product/product-22.jpg",
      priceNew: "$80.00",
      priceOld: "$100.00",
      discount: "20% Off",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      colors: [
        { name: "Grey", value: "bg-grey-4", image: "images/product/product-5.jpg", active: true },
        { name: "Black", value: "bg-dark", image: "images/product/product-22.jpg" },
        { name: "Orange", value: "bg-light-orange-2", image: "images/product/product-40.jpg" }
      ]
    },
    {
      id: 2,
      name: "Loose Fit Tee",
      mainImage: "images/product/product-12.jpg",
      hoverImage: "images/product/product-39.jpg",
      priceNew: "$65.00",
      tag: "Trending",
      colors: [
        { name: "Orange", value: "bg-light-orange-2", image: "images/product/product-12.jpg", active: true },
        { name: "Blue", value: "bg-light-blue", image: "images/product/product-39.jpg" }
      ]
    },
    {
      id: 3,
      name: "Crop T-shirt",
      mainImage: "images/product/product-11.jpg",
      hoverImage: "images/product/product-7.jpg",
      priceNew: "$45.00",
      discount: "20% Off",
      countdown: 1007500,
      colors: [
        { name: "White", value: "bg-white", image: "images/product/product-11.jpg", line: true },
        { name: "Beige", value: "bg-beige", image: "images/product/product-7.jpg", active: true },
        { name: "Light Orange", value: "bg-light-orange-2", image: "images/product/product-18.jpg" }
      ]
    },
    {
      id: 4,
      name: "Short Sleeve Sweat",
      mainImage: "images/product/product-31.jpg",
      hoverImage: "images/product/product-13.jpg",
      priceNew: "$130.00",
      tag: "Limited",
      tagType: "type-2",
      colors: [
        { name: "White", value: "bg-white", image: "images/product/product-31.jpg", active: true, line: true },
        { name: "Black", value: "bg-dark", image: "images/product/product-13.jpg" }
      ]
    },
    {
      id: 5,
      name: "Breeze Soft Tee",
      mainImage: "images/product/product-30.jpg",
      hoverImage: "images/product/product-10.jpg",
      priceNew: "$50.00",
      priceOld: "$70.00",
      colors: [
        { name: "Purple", value: "bg-purple-3", image: "images/product/product-30.jpg", active: true },
        { name: "Blue", value: "bg-light-blue-2", image: "images/product/product-10.jpg" }
      ]
    }
  ];

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h4 className="title">Recently Viewed</h4>
        </div>
        <div className="fl-control-sw2 wrap-pos-nav sw-over-product wow fadeInUp">
          <div dir="ltr" className="swiper tf-swiper wrap-sw-over">
            <div className="swiper-wrapper">
              {products.map((product) => (
                <div className="swiper-slide" key={product.id}>
                  <div className={`card-product style-2 ${product.sizes ? 'card-product-size' : ''}`}>
                    <div className="card-product-wrapper">
                      <a href="productdetail" className="product-img">
                        <img 
                          className="img-product lazyload" 
                          data-src={product.mainImage} 
                          src={product.mainImage} 
                          alt={product.name} 
                        />
                        <img 
                          className="img-hover lazyload" 
                          data-src={product.hoverImage} 
                          src={product.hoverImage} 
                          alt={product.name} 
                        />
                      </a>
                      <ul className="list-product-btn">
                        <li>
                          <a href="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                            <span className="icon icon-cart2" />
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="#!" className="box-icon hover-tooltip">
                            <span className="icon icon-heart2" />
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li>
                          <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview hover-tooltip">
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a 
                            href="#compare" 
                            data-bs-toggle="modal" 
                            aria-controls="compare" 
                            className="box-icon hover-tooltip"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                          </a>
                        </li>
                      </ul>
                      
                      {product.sizes && (
                        <ul className="size-box">
                          {product.sizes.map((size, index) => (
                            <li key={index} className="size-item text-xs text-white">{size}</li>
                          ))}
                        </ul>
                      )}
                      
                      <div className="on-sale-wrap">
                        {product.discount && (
                          <span className="on-sale-item">{product.discount}</span>
                        )}
                        {product.tag && (
                          <span className={`on-sale-item ${product.tag.toLowerCase()}`}>{product.tag}</span>
                        )}
                        {product.tagType && (
                          <span className={`on-sale-item ${product.tag.toLowerCase()} ${product.tagType}`}>
                            {product.tag}
                          </span>
                        )}
                      </div>
                      
                      {product.countdown && (
                        <div className="countdown-box">
                          <div 
                            className="js-countdown" 
                            data-timer={product.countdown} 
                            data-labels="D  :,H  :,M  :,S" 
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="card-product-info">
                      <a href="productdetail" className="name-product link fw-medium text-md">
                        {product.name}
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className="price-new">{product.priceNew}</span>
                        {product.priceOld && (
                          <span className="price-old">{product.priceOld}</span>
                        )}
                      </p>
                      <ul className="list-color-product">
                        {product.colors.map((color, index) => (
                          <li 
                            key={index}
                            className={`list-color-item color-swatch hover-tooltip tooltip-bot ${color.active ? 'active' : ''} ${color.line ? 'line' : ''}`}
                          >
                            <span className="tooltip color-filter">{color.name}</span>
                            <span className={`swatch-value ${color.value}`} />
                            <img 
                              className="lazyload" 
                              data-src={color.image} 
                              src={color.image} 
                              alt={color.name} 
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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