import React, { useState, useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useParams } from "react-router-dom";
import CompareModal from "../../components/ui/Modal/CompareModal";
import prod1 from "@/assets/images/women-black-1.jpg";
import prod2 from "@/assets/images/women-black-2.jpg";
import prod3 from "@/assets/images/women-black-3.jpg";
import prod4 from "@/assets/images/women-black-4.jpg";
import prod5 from "@/assets/images/fs-orange1.jpg";
import prod6 from "@/assets/images/fs-orange1.jpg";
import { useGetProductByIdQuery } from "../../services/products/productApi";

const MainDetail = ({productId }) => {
  // const { id } = useParams(); // Get product ID from URL
  const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("small");
  const [showCompare, setShowCompare] = useState(false);
  const [comparedProducts, setComparedProducts] = useState([]);
  const [bundleItems, setBundleItems] = useState([
    {
      id: 1,
      checked: true,
      title: "Single Breasted Blazer",
      newPrice: 60,
      oldPrice: 80,
    },
    {
      id: 2,
      checked: false,
      title: "Short Sleeve Sweat",
      newPrice: 75,
      oldPrice: 0,
    },
    {
      id: 3,
      checked: false,
      title: "One Shoulder Velvet T-Shirt",
      newPrice: 85,
      oldPrice: 100,
    },
  ]);

  // Use product data to populate images
  const [allImages, setAllImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [allThumbnails, setAllThumbnails] = useState([]);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  // When product data loads, set up images
  useEffect(() => {
    if (product) {
      const images = product.imageVariants?.map(variant => ({
        id: variant.id,
        color: variant.color,
        size: variant.size,
        thumb: variant.imageUrl,
        main: variant.imageUrl
      })) || [];
      
      setAllImages(images);
      setAllThumbnails(images);
      
      // Initial filtered images based on default selected size
      const initialFiltered = images.filter(img => img.size === selectedSize);
      setFilteredImages(initialFiltered);
    }
  }, [product, selectedSize]);

  // Initialize Swiper when filtered images change
  useEffect(() => {
    if (filteredImages.length > 0 && allThumbnails.length > 0) {
      // Destroy existing instances
      if (thumbsSwiperRef.current) thumbsSwiperRef.current.destroy();
      if (mainSwiperRef.current) mainSwiperRef.current.destroy();

      // Initialize vertical thumbnail swiper
      thumbsSwiperRef.current = new Swiper(".tf-product-media-thumbs", {
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: ".thumbs-next",
          prevEl: ".thumbs-prev",
        },
      });

      // Initialize horizontal main image swiper
      mainSwiperRef.current = new Swiper(".tf-product-media-main", {
        thumbs: {
          swiper: thumbsSwiperRef.current,
        },
      });

      // Connect navigation buttons
      document.querySelector(".thumbs-next")?.addEventListener("click", () => {
        mainSwiperRef.current.slideNext();
      });
      document.querySelector(".thumbs-prev")?.addEventListener("click", () => {
        mainSwiperRef.current.slidePrev();
      });
    }

    return () => {
      // Cleanup
      if (thumbsSwiperRef.current) thumbsSwiperRef.current.destroy();
      if (mainSwiperRef.current) mainSwiperRef.current.destroy();
    };
  }, [filteredImages, allThumbnails]);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const toggleBundleItem = (id) => {
    setBundleItems(
      bundleItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Calculate total price for bundle
  const bundleTotal = bundleItems.reduce((total, item) => {
    return item.checked ? total + item.newPrice : total;
  }, 0);

  const bundleOldTotal = bundleItems.reduce((total, item) => {
    return item.checked && item.oldPrice ? total + item.oldPrice : total;
  }, 0);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <section className="flat-single-product">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <div className="product-thumbs-slider">
                  <div
                    dir="ltr"
                    className="swiper tf-product-media-thumbs other-image-zoom"
                    data-preview={4}
                    data-direction="vertical"
                  >
                    <div className="swiper-wrapper stagger-wrap">
                      {filteredImages.map((image) => (
                        <div
                          key={image.id}
                          className="swiper-slide stagger-item"
                          data-size={image.size}
                        >
                          <div className="item">
                            <img
                              className="lazyload"
                              data-src={image.thumb}
                              src={image.thumb}
                              alt="img-product"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flat-wrap-media-product">
                    <div
                      dir="ltr"
                      className="swiper tf-product-media-main"
                      id="gallery-swiper-started"
                    >
                      <div className="swiper-wrapper">
                        {filteredImages.map((image) => (
                          <div
                            key={image.id}
                            className="swiper-slide"
                            data-size={image.size}
                          >
                            <a
                              href={image.main}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="item"
                              data-pswp-width="552px"
                              data-pswp-height="827px"
                            >
                              <img
                                className="tf-image-zoom lazyload"
                                data-zoom={image.main}
                                data-src={image.main}
                                src={image.main}
                                alt="img-product"
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="swiper-button-next nav-swiper thumbs-next" />
                    <div className="swiper-button-prev nav-swiper thumbs-prev" />
                  </div>
                </div>
              </div>
            </div>
            {/* /Product Images */}
            {/* Product Info */}
            <div className="col-md-6">
              <div className="tf-zoom-main" />
              <div className="tf-product-info-wrap other-image-zoom">
                <div className="tf-product-info-list">
                  <div className="tf-product-heading">
                    <span className="brand-product">{product.brand || 'KOTON'}</span>
                    <h5 className="product-name fw-medium">
                      {product.name || 'Black mustard oil'}
                    </h5>
                    
                    <div className="product-price">
                      <div className="display-sm price-new price-on-sale">
                        ₹ {product.price }
                      </div>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <>
                          <div className="display-sm price-old">₹ {product.originalPrice}</div>
                          <span className="badge-sale">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice * 100))} % Off
                          </span>
                        </>
                      )}
                    </div>
                    <div className="product-stock">
                      <span className="stock in-stock">In Stock</span>
                    </div>
                  </div>
                  <div className="tf-product-variant">
                    <div className="variant-picker-item variant-size">
                      <div className="variant-picker-label">
                        <div>
                          Size:
                          <span className="variant-picker-label-value value-currentSize">
                            {selectedSize.charAt(0).toUpperCase() +
                              selectedSize.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="variant-picker-values">
                        {['small', 'medium', 'large', 'extra large'].map(size => (
                          <span
                            key={size}
                            className={`size-btn ${
                              selectedSize === size ? "active" : ""
                            }`}
                            data-size={size}
                            onClick={() => handleSizeChange(size)}
                          >
                            {size.charAt(0).toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-total-quantity">
                    <div className="group-btn">
                      <div className="wg-quantity">
                        <button
                          className="btn-quantity btn-decrease"
                          onClick={() => handleQuantityChange("decrease")}
                        >
                          -
                        </button>
                        <input
                          className="quantity-product"
                          type="text"
                          name="number"
                          value={quantity}
                          readOnly
                        />
                        <button
                          className="btn-quantity btn-increase"
                          onClick={() => handleQuantityChange("increase")}
                        >
                          +
                        </button>
                      </div>
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="offcanvas"
                        className="tf-btn animate-btn btn-add-to-cart"
                      >
                        Add to cart
                      </a>
                    </div>
                    <a
                      href="checkout"
                      className="tf-btn btn-primary w-100 animate-btn"
                    >
                      Buy it now
                    </a>
                  </div>
                  <div className="tf-product-extra-link">
                    <a
                      href="javascript:void(0);"
                      className="product-extra-icon link btn-add-wishlist"
                    >
                      <i className="icon add icon-heart" />
                      <span className="add">Add to wishlist</span>
                      <i className="icon added icon-trash" />
                      <span className="added">Remove from wishlist</span>
                    </a>
                    <a
                      href="#shareSocial"
                      data-bs-toggle="modal"
                      className="product-extra-icon link"
                    >
                      <i className="icon icon-share" />
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /Product Info */}
          </div>
        </div>
      </div>
      
      {/* ... rest of your component ... */}
      
      {showCompare && (
        <CompareModal
          products={comparedProducts}
          onClose={() => setShowCompare(false)}
          onClearAll={(updatedProducts) =>
            setComparedProducts(updatedProducts || [])
          }
        />
      )}
    </section>
  );
};

export default MainDetail;