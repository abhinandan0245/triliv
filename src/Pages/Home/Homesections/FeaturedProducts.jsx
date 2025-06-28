import React, { useState , useEffect } from 'react';
import QuickAddModal from '../../../components/ui/Modal/QuickAdd';
const FeaturedProducts = () => {
  // Initialize Swiper when component mounts
  const [showQuickAdd, setShowQuickAdd] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    // Check if Swiper is available (you'll need to import Swiper in your project)
    if (typeof window !== 'undefined' && window.Swiper) {
      new window.Swiper('.tf-swiper.wrap-sw-over', {
        slidesPerView: 2,
        spaceBetween: 12,
        speed: 800,
        observer: true,
        observeParents: true,
        slidesPerGroup: 2,
        navigation: {
          clickable: true,
          nextEl: '.nav-next-product',
          prevEl: '.nav-prev-product'
        },
        pagination: { 
          el: '.sw-pagination-product', 
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
    }
  }, []);

  // Product data array for easier management
  const products = [
    {
      id: 1,
      name: "Bird of Paradise",
      priceNew: "$130.00",
      priceOld: "$150.00",
      discount: "20% Off",
      images: {
        main: "images/product-1.jpg",
        hover: "images/product-2.jpg"
      },
      colors: [
        { name: "White", value: "bg-white", image: "images/product-1.jpg" },
        { name: "Brown", value: "bg-brown-9", image: "images/product-2.jpg" },
        { name: "Black", value: "bg-dark", image: "images/product-3.jpg" }
      ]
    },
    {
      id: 2,
      name: "Ficus 'Ruby'",
      priceNew: "$110.00",
      priceOld: "$130.00",
      discount: "20% Off",
      images: {
        main: "images/product-4.jpg",
        hover: "images/product-5.jpg"
      },
      colors: [
        { name: "Beige", value: "bg-light-beige-2", image: "images/product-4.jpg" },
        { name: "Black", value: "bg-dark", image: "images/product-5.jpg" },
        { name: "Taupe Brown", value: "bg-taupe-brown", image: "images/product-6.jpg" }
      ]
    },
    {
      id: 3,
      name: "Olive Tree",
      priceNew: "$150.00",
      images: {
        main: "images/product-7.jpg",
        hover: "images/product-8.jpg"
      },
      colors: [
        { name: "Reddish Brown", value: "bg-reddish-brown", image: "images/product-7.jpg" },
        { name: "Blue", value: "bg-blue-2", image: "images/product-8.jpg" },
        { name: "Terra Cotta", value: "bg-terra-cotta", image: "images/product-9.jpg" }
      ]
    },
    {
      id: 4,
      name: "ZZ Plant",
      priceNew: "$145.00",
      priceOld: "$160.00",
      discount: "20% Off",
      images: {
        main: "images/product-10.jpg",
        hover: "images/product-11.jpg"
      },
      colors: [
        { name: "Black", value: "bg-dark-6", image: "images/product-10.jpg" },
        { name: "Beige", value: "bg-beige-2", image: "images/product-11.jpg" }
      ]
    },
    {
      id: 5,
      name: "Bird of Paradise",
      priceNew: "$130.00",
      priceOld: "$150.00",
      discount: "20% Off",
      images: {
        main: "images/product-1.jpg",
        hover: "images/product-2.jpg"
      },
      colors: [
        { name: "White", value: "bg-white", image: "images/product-1.jpg" },
        { name: "Brown", value: "bg-brown-9", image: "images/product-2.jpg" },
        { name: "Black", value: "bg-dark", image: "images/product-3.jpg" }
      ]
    }
  ];

  // Quick add handler
  const handleQuickAdd = (e, productId) => {
  e.preventDefault();
  const product = products.find(p => p.id === productId);
  setSelectedProduct(product);
  setShowQuickAdd(true);
};

  // Wishlist handler
  const handleWishlist = (e, productId) => {
    e.preventDefault();
    // Implement wishlist logic here
    console.log(`Add product ${productId} to wishlist`);
  };

  // Quick view handler
  const handleQuickView = (e, productId) => {
    e.preventDefault();
    // Implement quick view logic here
    console.log(`Quick view product ${productId}`);
  };

  // Compare handler
  const handleCompare = (e, productId) => {
    e.preventDefault();
    // Implement compare logic here
    console.log(`Add product ${productId} to compare`);
  };

  return (
    <section className="flat-spacing-2 bg-gradient-2">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h3 className="title letter-0 text-start font-7">Featured Products</h3>
        </div>
        <div className="fl-control-sw2 wrap-pos-nav sw-over-product wow fadeInUp">
          <div dir="ltr" className="swiper tf-swiper wrap-sw-over">
            <div className="swiper-wrapper">
              {products.map((product) => (
                <div className="swiper-slide" key={product.id}>
                  <div className="card-product">
                    <div className="card-product-wrapper asp-ratio-0">
                      <a href="productdetail" className="product-img">
                        <img 
                          className="img-product lazyload" 
                          data-src={product.images.main} 
                          src={product.images.main} 
                          alt="image-product" 
                        />
                        <img 
                          className="img-hover lazyload" 
                          data-src={product.images.hover} 
                          src={product.images.hover} 
                          alt="image-product" 
                        />
                      </a>
                      <ul className="list-product-btn">
                        <li>
                          <a 
                            href="#quickadd" 
                            onClick={(e) => handleQuickAdd(e, product.id)}
                            className="hover-tooltip tooltip-left box-icon"
                          >
                            <span className="icon icon-cart2" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                        </li>
                        <li className="wishlist">
                          <a 
                            href="javascript:void(0);" 
                            onClick={(e) => handleWishlist(e, product.id)}
                            className="hover-tooltip tooltip-left box-icon"
                          >
                            <span className="icon icon-heart2" />
                            <span className="tooltip">Add to Wishlist</span>
                          </a>
                        </li>
                        <li>
                          <a 
                            href="#quickView" 
                            onClick={(e) => handleQuickView(e, product.id)}
                            className="hover-tooltip tooltip-left box-icon quickview"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </li>
                        <li className="compare">
                          <a 
                            href="#compare" 
                            onClick={(e) => handleCompare(e, product.id)}
                            className="hover-tooltip tooltip-left box-icon"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                          </a>
                        </li>
                      </ul>
                      {product.discount && (
                        <div className="on-sale-wrap">
                          <span className="on-sale-item">{product.discount}</span>
                        </div>
                      )}
                    </div>
                    <div className="card-product-info">
                      <a href="" className="name-product link fw-medium text-md">
                        {product.name}
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className={`price-new text-xl ${product.priceOld ? 'text-primary' : ''}`}>
                          {product.priceNew}
                        </span>
                        {product.priceOld && (
                          <span className="price-old">{product.priceOld}</span>
                        )}
                      </p>
                      <ul className="list-color-product style-2">
                        {product.colors.map((color, index) => (
                          <li 
                            key={index}
                            className={`list-color-item hover-tooltip tooltip-bot ${index === 0 ? 'active' : ''} ${index === 0 && product.id === 1 ? 'line' : ''} color-swatch`}
                          >
                            <span className="tooltip color-filter">{color.name}</span>
                            <span className={`swatch-value ${color.value}`} />
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
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-product justify-content-center"></div>
          </div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-product" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-product" />
        </div>
      </div>
      {showQuickAdd && selectedProduct && (
  <QuickAddModal 
    product={selectedProduct}
    onClose={() => setShowQuickAdd(false)}
  />
)}
    </section>
  );
};

export default FeaturedProducts;