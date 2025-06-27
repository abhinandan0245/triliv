import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination]);

const PeopleAlsoBought = () => {
  const swiperRef = useRef(null);

  // Product data array
  const products = [
    {
      id: 1,
      name: "Breeze Soft Tee",
      priceNew: "$55.00",
      priceOld: "$70.00",
      discount: "20% Off",
      trending: true,
      mainImage: "images/product/product-10.jpg",
      hoverImage: "images/product/product-4.jpg",
      colors: [
        { name: "Blue", value: "bg-light-blue-2", image: "images/product/product-10.jpg" },
        { name: "White", value: "bg-white", image: "images/product/product-4.jpg", line: true },
        { name: "Pink", value: "bg-light-pink-9", image: "images/product/product-30.jpg" }
      ],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"]
    },
    {
      id: 2,
      name: "Sunburst Graphic Tee",
      priceNew: "$115.00",
      trending: true,
      new: true,
      mainImage: "images/product/product-16.jpg",
      hoverImage: "images/product/product-19.jpg",
      colors: [
        { name: "Yellow", value: "bg-yellow-4", image: "images/product/product-16.jpg" },
        { name: "Grey", value: "bg-grey-4", image: "images/product/product-19.jpg" },
        { name: "Black", value: "bg-dark", image: "images/product/product-22.jpg" }
      ]
    },
    {
      id: 3,
      name: "Long Sleeve T-Shirt",
      priceNew: "$85.00",
      limited: true,
      mainImage: "images/product/product-32.jpg",
      hoverImage: "images/product/product-42.jpg",
      colors: [
        { name: "Grey", value: "bg-grey-4", image: "images/product/product-32.jpg" },
        { name: "Pink", value: "bg-light-pink-10", image: "images/product/product-42.jpg" }
      ]
    },
    {
      id: 4,
      name: "Back Printed Crew Neck T-Shirt",
      priceNew: "$130.00",
      new: true,
      limited: true,
      mainImage: "images/product/product-33.jpg",
      hoverImage: "images/product/product-17.jpg",
      colors: [
        { name: "Black", value: "bg-dark", image: "images/product/product-33.jpg" },
        { name: "White", value: "bg-white", image: "images/product/product-17.jpg", line: true },
        { name: "Green", value: "bg-green", image: "images/product/product-21.jpg" }
      ]
    },
    {
      id: 5,
      name: "Puff Sleeve Shirred Blouse",
      priceNew: "$57.00",
      priceOld: "$70.00",
      discount: "20% Off",
      mainImage: "images/fs-orange2.jpg",
      hoverImage: "images/fs-green2.jpg",
      colors: [
        { name: "Orange", value: "bg-light-orange-2", image: "images/fs-orange2.jpg" },
        { name: "Green", value: "bg-light-green", image: "images/fs-green2.jpg" }
      ]
    }
  ];

  // Initialize tooltips (this would need to be implemented separately in React)
  useEffect(() => {
    // If you're using jQuery tooltips, you might need to initialize them here
    // This is just a placeholder - actual implementation depends on your tooltip library
    if (typeof window !== 'undefined' && window.jQuery) {
      // $('.hover-tooltip').tooltip();
    }
  }, []);

  return (
    <section>
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h4 className="title">People Also Bought</h4>
        </div>
        <div className="fl-control-sw2 wrap-pos-nav sw-over-product wow fadeInUp">
          <div dir="ltr" className="swiper tf-swiper wrap-sw-over">
            <Swiper
              ref={swiperRef}
              spaceBetween={12}
              slidesPerView={2}
              slidesPerGroup={2}
              speed={800}
              observer={true}
              observeParents={true}
              navigation={{
                nextEl: ".nav-next-bought",
                prevEl: ".nav-prev-bought"
              }}
              pagination={{
                el: ".sw-pagination-bought",
                clickable: true
              }}
              breakpoints={{
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
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className={`card-product style-2 ${product.sizes ? 'card-product-size' : ''}`}>
                    <div className="card-product-wrapper">
                      <a href="product-detail.php" className="product-img">
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
                          <a 
                            href="#shoppingCart" 
                            data-bs-toggle="offcanvas" 
                            className="box-icon hover-tooltip"
                          >
                            <span className="icon icon-cart2"></span>
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a href="javascript:void(0);" className="box-icon hover-tooltip">
                            <span className="icon icon-heart2"></span>
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#quickView" 
                            data-bs-toggle="modal" 
                            className="box-icon quickview hover-tooltip"
                          >
                            <span className="icon icon-view"></span>
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
                            <span className="icon icon-compare"></span>
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
                      
                      <div className={`on-sale-wrap ${product.new && product.limited ? 'type-2' : ''} flex-column`}>
                        {product.discount && <span className="on-sale-item">{product.discount}</span>}
                        {product.trending && <span className="on-sale-item trending">Trending</span>}
                        {product.new && <span className="on-sale-item new">New</span>}
                        {product.limited && <span className="on-sale-item limited">Limited</span>}
                      </div>
                    </div>
                    <div className="card-product-info">
                      <a href="product-detail.php" className="name-product link fw-medium text-md">
                        {product.name}
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className="price-new">{product.priceNew}</span>
                        {product.priceOld && <span className="price-old">{product.priceOld}</span>}
                      </p>
                      <ul className="list-color-product">
                        {product.colors.map((color, index) => (
                          <li 
                            key={index} 
                            className={`list-color-item color-swatch hover-tooltip tooltip-bot ${index === 0 ? 'active' : ''} ${color.line ? 'line' : ''}`}
                          >
                            <span className="tooltip color-filter">{color.name}</span>
                            <span className={`swatch-value ${color.value}`}></span>
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
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-bought justify-content-center"></div>
          </div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-bought"></div>
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-bought"></div>
        </div>
      </div>
    </section>
  );
};

export default PeopleAlsoBought;