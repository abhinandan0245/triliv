import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const PeopleAlsoBought = () => {
  useEffect(() => {
    // Initialize Swiper after component mounts
    const swiper = new Swiper('.tf-swiper.wrap-sw-over', {
      slidesPerView: 2,
      spaceBetween: 12,
      speed: 800,
      observer: true,
      observeParents: true,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.nav-next-bought',
        prevEl: '.nav-prev-bought',
      },
      pagination: {
        el: '.sw-pagination-bought',
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

    // Cleanup Swiper instance when component unmounts
    return () => {
      if (swiper) {
        // swiper.destroy();
      }
    };
  }, []);

  const handleQuickView = (e) => {
    e.preventDefault();
    // Implement quick view functionality here
    console.log('Quick view clicked');
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    // Implement add to cart functionality here
    console.log('Add to cart clicked');
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    // Implement add to wishlist functionality here
    console.log('Add to wishlist clicked');
  };

  const handleAddToCompare = (e) => {
    e.preventDefault();
    // Implement add to compare functionality here
    console.log('Add to compare clicked');
  };

  return (
    <section>
      <div className="container">
        <div className="flat-title"data-aos="fade-up">
          <h4 className="title">People Also Bought</h4>
        </div>
        <div className="fl-control-sw2 wrap-pos-nav sw-over-product "data-aos="fade-up">
          <div dir="ltr" className="swiper tf-swiper wrap-sw-over">
            <div className="swiper-wrapper">
              {/* Item 1 */}
              <div className="swiper-slide">
                <div className="card-product style-2 card-product-size">
                  <div className="card-product-wrapper">
                    <a href="productdetail" className="product-img">
                      <img className="img-product lazyload" data-src="images/product/product-10.jpg" src="images/product/product-10.jpg" alt="image-product" />
                      <img className="img-hover lazyload" data-src="images/product/product-4.jpg" src="images/product/product-4.jpg" alt="image-product" />
                    </a>
                    <ul className="list-product-btn">
                      <li>
                        <a href="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip" onClick={handleAddToCart}>
                          <span className="icon icon-cart2" />
                          <span className="tooltip">Add to Cart</span>
                        </a>
                      </li>
                      <li className="wishlist">
                        <a href="javascript:void(0);" className="box-icon hover-tooltip" onClick={handleAddToWishlist}>
                          <span className="icon icon-heart2" />
                          <span className="tooltip">Add to Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview hover-tooltip" onClick={handleQuickView}>
                          <span className="icon icon-view" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </li>
                      <li className="compare">
                        <a href="#compare" data-bs-toggle="modal" aria-controls="compare" className="box-icon hover-tooltip" onClick={handleAddToCompare}>
                          <span className="icon icon-compare" />
                          <span className="tooltip">Add to Compare</span>
                        </a>
                      </li>
                    </ul>
                    <ul className="size-box">
                      <li className="size-item text-xs text-white">XS</li>
                      <li className="size-item text-xs text-white">S</li>
                      <li className="size-item text-xs text-white">M</li>
                      <li className="size-item text-xs text-white">L</li>
                      <li className="size-item text-xs text-white">XL</li>
                      <li className="size-item text-xs text-white">2XL</li>
                    </ul>
                    <div className="on-sale-wrap flex-column">
                      <span className="on-sale-item">20% Off</span>
                      <span className="on-sale-item trending">Trending</span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="productdetail" className="name-product link fw-medium text-md">Breeze Soft Tee</a>
                    <p className="price-wrap fw-medium">
                      <span className="price-new">$55.00</span>
                      <span className="price-old">$70.00</span>
                    </p>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                        <span className="tooltip color-filter">Blue</span>
                        <span className="swatch-value bg-light-blue-2" />
                        <img className="lazyload" data-src="images/product/product-10.jpg" src="images/product/product-10.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch hover-tooltip line tooltip-bot">
                        <span className="tooltip color-filter">White</span>
                        <span className="swatch-value bg-white" />
                        <img className="lazyload" data-src="images/product/product-4.jpg" src="images/product/product-4.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Pink</span>
                        <span className="swatch-value bg-light-pink-9" />
                        <img className="lazyload" data-src="images/product/product-30.jpg" src="images/product/product-30.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="swiper-slide">
                <div className="card-product style-2">
                  <div className="card-product-wrapper">
                    <a href="productdetail" className="product-img">
                      <img className="img-product lazyload" data-src="images/product/product-16.jpg" src="images/product/product-16.jpg" alt="image-product" />
                      <img className="img-hover lazyload" data-src="images/product/product-19.jpg" src="images/product/product-19.jpg" alt="image-product" />
                    </a>
                    <ul className="list-product-btn">
                      <li>
                        <a href="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip" onClick={handleAddToCart}>
                          <span className="icon icon-cart2" />
                          <span className="tooltip">Add to Cart</span>
                        </a>
                      </li>
                      <li className="wishlist">
                        <a href="javascript:void(0);" className="box-icon hover-tooltip" onClick={handleAddToWishlist}>
                          <span className="icon icon-heart2" />
                          <span className="tooltip">Add to Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview hover-tooltip" onClick={handleQuickView}>
                          <span className="icon icon-view" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </li>
                      <li className="compare">
                        <a href="#compare" data-bs-toggle="modal" aria-controls="compare" className="box-icon hover-tooltip" onClick={handleAddToCompare}>
                          <span className="icon icon-compare" />
                          <span className="tooltip">Add to Compare</span>
                        </a>
                      </li>
                    </ul>
                    <div className="on-sale-wrap type-2 flex-column">
                      <span className="on-sale-item trending">Trending</span>
                      <span className="on-sale-item new">New</span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="productdetail" className="name-product link fw-medium text-md">Sunburst Graphic Tee</a>
                    <p className="price-wrap fw-medium">
                      <span className="price-new">$115.00</span>
                    </p>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                        <span className="tooltip color-filter">Yellow</span>
                        <span className="swatch-value bg-yellow-4" />
                        <img className="lazyload" data-src="images/product/product-16.jpg" src="images/product/product-16.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Grey</span>
                        <span className="swatch-value bg-grey-4" />
                        <img className="lazyload" data-src="images/product/product-19.jpg" src="images/product/product-19.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Black</span>
                        <span className="swatch-value bg-dark" />
                        <img className="lazyload" data-src="images/product/product-22.jpg" src="images/product/product-22.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="swiper-slide">
                <div className="card-product style-2">
                  <div className="card-product-wrapper">
                    <a href="productdetail" className="product-img">
                      <img className="img-product lazyload" data-src="images/product/product-32.jpg" src="images/product/product-32.jpg" alt="image-product" />
                      <img className="img-hover lazyload" data-src="images/product/product-42.jpg" src="images/product/product-42.jpg" alt="image-product" />
                    </a>
                    <ul className="list-product-btn">
                      <li>
                        <a href="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip" onClick={handleAddToCart}>
                          <span className="icon icon-cart2" />
                          <span className="tooltip">Add to Cart</span>
                        </a>
                      </li>
                      <li className="wishlist">
                        <a href="javascript:void(0);" className="box-icon hover-tooltip" onClick={handleAddToWishlist}>
                          <span className="icon icon-heart2" />
                          <span className="tooltip">Add to Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview hover-tooltip" onClick={handleQuickView}>
                          <span className="icon icon-view" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </li>
                      <li className="compare">
                        <a href="#compare" data-bs-toggle="modal" aria-controls="compare" className="box-icon hover-tooltip" onClick={handleAddToCompare}>
                          <span className="icon icon-compare" />
                          <span className="tooltip">Add to Compare</span>
                        </a>
                      </li>
                    </ul>
                    <div className="on-sale-wrap">
                      <span className="on-sale-item limited">Limited</span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="productdetail" className="name-product link fw-medium text-md">Long Sleeve T-Shirt</a>
                    <p className="price-wrap fw-medium">
                      <span className="price-new">$85.00</span>
                    </p>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                        <span className="tooltip color-filter">Grey</span>
                        <span className="swatch-value bg-grey-4" />
                        <img className="lazyload" data-src="images/product/product-32.jpg" src="images/product/product-32.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Pink</span>
                        <span className="swatch-value bg-light-pink-10" />
                        <img className="lazyload" data-src="images/product/product-42.jpg" src="images/product/product-42.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="swiper-slide">
                <div className="card-product style-2">
                  <div className="card-product-wrapper">
                    <a href="productdetail" className="product-img">
                      <img className="img-product lazyload" data-src="images/product/product-33.jpg" src="images/product/product-33.jpg" alt="image-product" />
                      <img className="img-hover lazyload" data-src="images/product/product-17.jpg" src="images/product/product-17.jpg" alt="image-product" />
                    </a>
                    <ul className="list-product-btn">
                      <li>
                        <a href="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip" onClick={handleAddToCart}>
                          <span className="icon icon-cart2" />
                          <span className="tooltip">Add to Cart</span>
                        </a>
                      </li>
                      <li className="wishlist">
                        <a href="javascript:void(0);" className="box-icon hover-tooltip" onClick={handleAddToWishlist}>
                          <span className="icon icon-heart2" />
                          <span className="tooltip">Add to Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview hover-tooltip" onClick={handleQuickView}>
                          <span className="icon icon-view" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </li>
                      <li className="compare">
                        <a href="#compare" data-bs-toggle="modal" aria-controls="compare" className="box-icon hover-tooltip" onClick={handleAddToCompare}>
                          <span className="icon icon-compare" />
                          <span className="tooltip">Add to Compare</span>
                        </a>
                      </li>
                    </ul>
                    <div className="on-sale-wrap type-2 flex-column">
                      <span className="on-sale-item new">New</span>
                      <span className="on-sale-item limited">Limited</span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="productdetail" className="name-product link fw-medium text-md">Back Printed Crew Neck T-Shirt</a>
                    <p className="price-wrap fw-medium">
                      <span className="price-new">$130.00</span>
                    </p>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                        <span className="tooltip color-filter">Black</span>
                        <span className="swatch-value bg-dark" />
                        <img className="lazyload" data-src="images/product/product-33.jpg" src="images/product/product-33.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch line hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">White</span>
                        <span className="swatch-value bg-white" />
                        <img className="lazyload" data-src="images/product/product-17.jpg" src="images/product/product-17.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Green</span>
                        <span className="swatch-value bg-green" />
                        <img className="lazyload" data-src="images/product/product-21.jpg" src="images/product/product-21.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="swiper-slide">
                <div className="card-product style-2">
                  <div className="card-product-wrapper">
                    <a href="productdetail" className="product-img">
                      <img className="img-product lazyload" data-src="images/fs-orange2.jpg" src="images/fs-orange2.jpg" alt="image-product" />
                      <img className="img-hover lazyload" data-src="images/fs-green2.jpg" src="images/fs-green2.jpg" alt="image-product" />
                    </a>
                    <ul className="list-product-btn">
                      <li>
                        <a href="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip" onClick={handleAddToCart}>
                          <span className="icon icon-cart2" />
                          <span className="tooltip">Add to Cart</span>
                        </a>
                      </li>
                      <li className="wishlist">
                        <a href="javascript:void(0);" className="box-icon hover-tooltip" onClick={handleAddToWishlist}>
                          <span className="icon icon-heart2" />
                          <span className="tooltip">Add to Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview hover-tooltip" onClick={handleQuickView}>
                          <span className="icon icon-view" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </li>
                      <li className="compare">
                        <a href="#compare" data-bs-toggle="modal" aria-controls="compare" className="box-icon hover-tooltip" onClick={handleAddToCompare}>
                          <span className="icon icon-compare" />
                          <span className="tooltip">Add to Compare</span>
                        </a>
                      </li>
                    </ul>
                    <div className="on-sale-wrap flex-column">
                      <span className="on-sale-item">20% Off</span>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <a href="productdetail" className="name-product link fw-medium text-md">Puff Sleeve Shirred Blouse</a>
                    <p className="price-wrap fw-medium">
                      <span className="price-new">$57.00</span>
                      <span className="price-old">$70.00</span>
                    </p>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                        <span className="tooltip color-filter">Orange</span>
                        <span className="swatch-value bg-light-orange-2" />
                        <img className="lazyload" data-src="images/fs-orange2.jpg" src="images/fs-orange2.jpg" alt="image-product" />
                      </li>
                      <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                        <span className="tooltip color-filter">Green</span>
                        <span className="swatch-value bg-light-green" />
                        <img className="lazyload" data-src="images/fs-green2.jpg" src="images/fs-green2.jpg" alt="image-product" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-bought justify-content-center" />
          </div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-bought" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-bought" />
        </div>
      </div>
    </section>
  );
};

export default PeopleAlsoBought;