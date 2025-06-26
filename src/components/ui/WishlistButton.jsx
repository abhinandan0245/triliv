import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const WishlistPage = () => {
  // Initialize WOW.js and other JS plugins
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WOW = require('wow.js');
      new WOW().init();
      
      // Initialize Bootstrap tooltips if needed
      if (typeof window.bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
      }
    }
  }, []);

  // Wishlist items data
  const wishlistItems = [
    {
      id: 1,
      name: "Loose Fit Tee",
      priceNew: "$120.00",
      priceOld: "$150.00",
      mainImage: "images/product/product-19.jpg",
      hoverImage: "images/women-grey-2.jpg",
      colors: [
        { name: "Grey", value: "bg-grey-4", image: "images/product/product-19.jpg" },
        { name: "Black", value: "bg-dark", image: "images/product/product-9.jpg" },
        { name: "White", value: "bg-white", image: "images/product/product-4.jpg", line: true }
      ],
      hasSize: true
    },
    {
      id: 2,
      name: "Regular Fit Pima Cotton Polo Shirt",
      priceNew: "$130.00",
      mainImage: "images/product/product-2.jpg",
      hoverImage: "images/product/product-2.jpg",
      outOfStock: true
    },
    {
      id: 3,
      name: "Long Regular Fit Tee",
      priceNew: "$60.00",
      priceOld: "$70.00",
      mainImage: "images/product/product-3.jpg",
      hoverImage: "images/product/product-4.jpg",
      colors: [
        { name: "Yellow", value: "bg-yellow", image: "images/product/product-3.jpg" },
        { name: "Grey", value: "bg-grey-4", image: "images/product/product-6.jpg" },
        { name: "White", value: "bg-white", image: "images/product/product-4.jpg", line: true }
      ],
      hasSize: true,
      countdown: {
        timer: 1007500,
        labels: "D  :,H  :,M  :,S"
      }
    },
    // Add more items as needed
  ];

  // Recently viewed items data
  const recentlyViewedItems = [
    {
      id: 1,
      name: "Turtleneck T-shirt",
      priceNew: "$80.00",
      priceOld: "$100.00",
      mainImage: "images/product/product-5.jpg",
      hoverImage: "images/product/product-22.jpg",
      colors: [
        { name: "Grey", value: "bg-grey-4", image: "images/product/product-5.jpg" },
        { name: "Black", value: "bg-dark", image: "images/product/product-22.jpg" },
        { name: "Orange", value: "bg-light-orange-2", image: "images/product/product-40.jpg" }
      ],
      discount: "20% Off",
      hasSize: true
    },
    {
      id: 2,
      name: "Loose Fit Tee",
      priceNew: "$65.00",
      mainImage: "images/product/product-12.jpg",
      hoverImage: "images/product/product-39.jpg",
      colors: [
        { name: "Orange", value: "bg-light-orange-2", image: "images/product/product-12.jpg" },
        { name: "Blue", value: "bg-light-blue", image: "images/product/product-39.jpg" }
      ],
      discount: "Trending"
    },
    // Add more items as needed
  ];

  // Handle remove item from wishlist
  const handleRemoveItem = (itemId) => {
    console.log(`Removing item ${itemId} from wishlist`);
    // In a real app, this would update state or make an API call
  };

  // Handle add to cart
  const handleAddToCart = (itemId) => {
    console.log(`Adding item ${itemId} to cart`);
    // In a real app, this would update state or make an API call
  };

  // Handle quick view
  const handleQuickView = (itemId) => {
    console.log(`Showing quick view for item ${itemId}`);
    // In a real app, this would open a modal with product details
  };

  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Wishlist</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="index.php">Home</a>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Wishlist</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}
      
      {/* Wish list */}
      <section className="flat-spacing-13">
        <div className="container">
          <div className="wrapper-wishlist tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
            {wishlistItems.map(item => (
              <div 
                key={item.id} 
                className={`card-product style-wishlist style-3 ${item.hasSize ? 'card-product-size' : ''} ${item.outOfStock ? 'out-of-stock' : ''}`}
              >
                <i 
                  className="icon icon-close remove" 
                  onClick={() => handleRemoveItem(item.id)}
                />
                <div className="card-product-wrapper">
                  <a href="product-detail.php" className="product-img">
                    <img 
                      className="img-product lazyload" 
                      data-src={item.mainImage} 
                      src={item.mainImage} 
                      alt="image-product" 
                      loading="lazy"
                    />
                    <img 
                      className="img-hover lazyload" 
                      data-src={item.hoverImage} 
                      src={item.hoverImage} 
                      alt="image-product" 
                      loading="lazy"
                    />
                  </a>
                  {!item.outOfStock && (
                    <ul className="list-product-btn">
                      <li>
                        <a 
                          href="#shoppingCart" 
                          className="box-icon hover-tooltip"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(item.id);
                          }}
                        >
                          <span className="icon icon-cart2" />
                          <span className="tooltip">Add to Cart</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#quickView" 
                          className="box-icon hover-tooltip quickview"
                          onClick={(e) => {
                            e.preventDefault();
                            handleQuickView(item.id);
                          }}
                        >
                          <span className="icon icon-view" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#compare" 
                          className="box-icon hover-tooltip compare"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="icon icon-compare" />
                          <span className="tooltip">Add to Compare</span>
                        </a>
                      </li>
                    </ul>
                  )}
                  {item.countdown && (
                    <div className="countdown-box">
                      <div 
                        className="js-countdown" 
                        data-timer={item.countdown.timer} 
                        data-labels={item.countdown.labels}
                      />
                    </div>
                  )}
                </div>
                <div className="card-product-info">
                  <a href="product-detail.php" className="name-product link fw-medium text-md">
                    {item.name}
                  </a>
                  <p className="price-wrap fw-medium">
                    <span className="price-new">{item.priceNew}</span>
                    {item.priceOld && (
                      <span className="price-old">{item.priceOld}</span>
                    )}
                  </p>
                  {item.colors && (
                    <ul className="list-color-product">
                      {item.colors.map((color, index) => (
                        <li 
                          key={index} 
                          className={`list-color-item hover-tooltip tooltip-bot color-swatch ${index === 0 ? 'active' : ''} ${color.line ? 'line' : ''}`}
                        >
                          <span className="tooltip color-filter">{color.name}</span>
                          <span className={`swatch-value ${color.value}`} />
                          <img 
                            className="lazyload" 
                            data-src={color.image} 
                            src={color.image} 
                            alt="image-product" 
                            loading="lazy"
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
            
            {/* Pagination */}
            <ul className="wg-pagination">
              <li className="active">
                <div className="pagination-item">1</div>
              </li>
              <li>
                <a href="#" className="pagination-item">2</a>
              </li>
              <li>
                <a href="#" className="pagination-item">3</a>
              </li>
              <li>
                <a href="#" className="pagination-item"><i className="icon-arr-right2" /></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* /Wish list*/}
      
      {/* Recently Viewed */}
      <section className="flat-spacing section-viewed pt-0">
        <div className="container">
          <div className="flat-title wow fadeInUp">
            <h4 className="title">Recently Viewed</h4>
          </div>
          <div className="fl-control-sw wrap-pos-nav sw-over-product wow fadeInUp">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={12}
              slidesPerView={2}
              slidesPerGroup={2}
              speed={800}
              observer
              observeParents
              navigation={{
                nextEl: '.nav-next-viewed',
                prevEl: '.nav-prev-viewed',
              }}
              pagination={{
                el: '.sw-pagination-viewed',
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 12,
                },
                1200: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 24,
                },
              }}
              className="tf-swiper wrap-sw-over"
            >
              {recentlyViewedItems.map(item => (
                <SwiperSlide key={item.id}>
                  <div className={`card-product style-2 ${item.hasSize ? 'card-product-size' : ''}`}>
                    <div className="card-product-wrapper">
                      <a href="product-detail.php" className="product-img">
                        <img 
                          className="img-product lazyload" 
                          data-src={item.mainImage} 
                          src={item.mainImage} 
                          alt="image-product" 
                          loading="lazy"
                        />
                        <img 
                          className="img-hover lazyload" 
                          data-src={item.hoverImage} 
                          src={item.hoverImage} 
                          alt="image-product" 
                          loading="lazy"
                        />
                      </a>
                      <ul className="list-product-btn">
                        <li>
                          <a 
                            href="#shoppingCart" 
                            className="box-icon hover-tooltip"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToCart(item.id);
                            }}
                          >
                            <span className="icon icon-cart2" />
                            <span className="tooltip">Add to Cart</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a 
                            href="#wishlist" 
                            className="box-icon hover-tooltip"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="icon icon-heart2" />
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#quickView" 
                            className="box-icon quickview hover-tooltip"
                            onClick={(e) => {
                              e.preventDefault();
                              handleQuickView(item.id);
                            }}
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a 
                            href="#compare" 
                            className="box-icon hover-tooltip"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                          </a>
                        </li>
                      </ul>
                      {item.hasSize && (
                        <ul className="size-box">
                          <li className="size-item text-xs text-white">XS</li>
                          <li className="size-item text-xs text-white">S</li>
                          <li className="size-item text-xs text-white">M</li>
                          <li className="size-item text-xs text-white">L</li>
                          <li className="size-item text-xs text-white">XL</li>
                          <li className="size-item text-xs text-white">2XL</li>
                        </ul>
                      )}
                      {item.discount && (
                        <div className="on-sale-wrap">
                          <span className={`on-sale-item ${item.discount === 'Trending' ? 'trending' : ''}`}>
                            {item.discount}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="card-product-info">
                      <a href="product-detail.php" className="name-product link fw-medium text-md">
                        {item.name}
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className="price-new">{item.priceNew}</span>
                        {item.priceOld && (
                          <span className="price-old">{item.priceOld}</span>
                        )}
                      </p>
                      {item.colors && (
                        <ul className="list-color-product">
                          {item.colors.map((color, index) => (
                            <li 
                              key={index} 
                              className={`list-color-item color-swatch hover-tooltip tooltip-bot ${index === 0 ? 'active' : ''} ${color.line ? 'line' : ''}`}
                            >
                              <span className="tooltip color-filter">{color.name}</span>
                              <span className={`swatch-value ${color.value}`} />
                              <img 
                                className="lazyload" 
                                data-src={color.image} 
                                src={color.image} 
                                alt="image-product" 
                                loading="lazy"
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-viewed justify-content-center" />
            <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-viewed" />
            <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-viewed" />
          </div>
        </div>
      </section>
      {/* /Recently Viewed */}
    </div>
  );
};

export default WishlistPage;