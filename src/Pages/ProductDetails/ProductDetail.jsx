import BreadcrumbP from "./Breadcrumb";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { useParams } from "react-router-dom";
import CompareModal from "../../components/ui/Modal/CompareModal";
import { useGetProductByIdQuery } from "../../services/products/productApi";
import { useAddToCartMutation } from "../../services/cart/cartApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const { 
    data: product, 
    isLoading, 
    isError, 
    error 
  } = useGetProductByIdQuery(id, {
    skip: !id,
    refetchOnMountOrArgChange: true
  });
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();


const user = useSelector(state => state.auth.user);


  // State management
  const [quantity, setQuantity] = useState(1);
  const [showCompare, setShowCompare] = useState(false);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState("");

 // Memoized product data transformation
const productData = useMemo(() => {
  if (!product) return null;

  const sizes = Array.isArray(product.sizes)
    ? product.sizes
    : typeof product.sizes === "string"
      ? product.sizes.split(',').map(s => s.trim())
      : [];

  const priceVariants = Array.isArray(product.priceVariants)
    ? product.priceVariants
    : typeof product.priceVariants === "string"
      ? (() => {
          try {
            return JSON.parse(product.priceVariants);
          } catch {
            return [];
          }
        })()
      : [];

  const variant = priceVariants.find((v) => v.size === selectedSize);

  const price = variant?.price || 0;
  const originalPrice = variant?.originalPrice || 0;
  const discountPercentage = variant?.discountPercentage || 0;
  const discountAmount = variant?.discountAmount || (originalPrice - price);

  return {
    ...product,
    sizes,
    priceVariants,
    selectedVariant: variant,
    price,
    originalPrice,
    discountPercentage,
    discountAmount
  };
}, [product, selectedSize]);

useEffect(() => {
  if (
    product &&
    selectedSize === "" &&
    (Array.isArray(product.sizes) || typeof product.sizes === "string")
  ) {
    const parsedSizes = Array.isArray(product.sizes)
      ? product.sizes
      : product.sizes.split(',').map(s => s.trim());

    if (parsedSizes.length > 0) {
      setSelectedSize(parsedSizes[0]); // ✅ Safe state update in effect
    }
  }
}, [product, selectedSize]);


useEffect(() => {
  console.log('Raw product:', product);
}, [product]);




  // Handle size change
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Memoize filtered images with proper fallbacks
  const filteredImages = useMemo(() => {
    if (!productData?.imageVariants) return [];
    
    // Ensure imageVariants is an array
    const imageVariants = Array.isArray(productData.imageVariants)
      ? productData.imageVariants
      : [];

    return imageVariants
      .filter(img => img?.imageUrl) // Filter out invalid images
      .map(img => ({
        id: img.id || Math.random().toString(),
        thumb: img.imageUrl,
        main: img.imageUrl
      }));
  }, [productData]);

  // Initialize Swiper
  useEffect(() => {
    if (filteredImages.length === 0) return;

    const initSwipers = () => {
      // Cleanup existing instances
      if (thumbsSwiperRef.current) thumbsSwiperRef.current.destroy(true, true);
      if (mainSwiperRef.current) mainSwiperRef.current.destroy(true, true);

      // Initialize thumbnail swiper
      thumbsSwiperRef.current = new Swiper(".tf-product-media-thumbs", {
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: ".thumbs-next",
          prevEl: ".thumbs-prev",
        },
      });

      // Initialize main image swiper
      mainSwiperRef.current = new Swiper(".tf-product-media-main", {
        thumbs: {
          swiper: thumbsSwiperRef.current,
        },
      });
    };

    const timer = setTimeout(initSwipers, 100);
    return () => {
      clearTimeout(timer);
      if (thumbsSwiperRef.current) thumbsSwiperRef.current.destroy(true, true);
      if (mainSwiperRef.current) mainSwiperRef.current.destroy(true, true);
    };
  }, [filteredImages]);

  const handleQuantityChange = (type) => {
    setQuantity(prev => type === "increase" ? prev + 1 : Math.max(1, prev - 1));
  };

  if (!id) return <div className="error">Error: No product ID in URL</div>;
  if (isLoading) return <div className="loading">Loading product details...</div>;
  if (isError) return <div className="error">Error: {error.message || 'Failed to load product'}</div>;
  if (!productData) return <div className="error">Product not found</div>;

// add cart api call  ******************



const handleAddToCart = async () => {
  if (!productData) return;

  if (!selectedSize) {
    toast.error("Please select a size");
    return;
  }

  if (!user || !user.id) {
    toast.error("Please log in to add items to your cart");
    return;
  }

  try {
    const { id: productId } = productData;

    await addToCart({
      customerId: user.id,  // ✅ No fallback, safe value
      productId,
      quantity,
      size: selectedSize
    }).unwrap();

    toast.success("Product added to cart");
  } catch (error) {
    console.error("Cart error:", error);
    toast.error("Failed to add product to cart");
  }
};



  return (
    <>
      <BreadcrumbP />
      <section className="flat-single-product">
        <div className="tf-main-product section-image-zoom">
          <div className="container">
            <div className="row">
              {/* Product Images */}
              <div className="col-md-6">
                <div className="tf-product-media-wrap sticky-top">
                  <div className="product-thumbs-slider">
                    <div className="swiper tf-product-media-thumbs other-image-zoom" data-preview={4} data-direction="vertical">
                      <div className="swiper-wrapper stagger-wrap">
                        {filteredImages.map((image) => (
                          <div key={image.id} className="swiper-slide stagger-item">
                            <div className="item">
                              <img 
                                src={image.thumb || null} 
                                alt={`Product ${productData.title}`} 
                                className="lazyload" 
                                onError={(e) => {
                                  e.target.src = '/default-thumb.jpg';
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flat-wrap-media-product">
                      <div className="swiper tf-product-media-main">
                        <div className="swiper-wrapper">
                          {filteredImages.map((image) => (
                            <div key={image.id} className="swiper-slide">
                              <a href={image.main || '#'} className="item">
                                <img 
                                  src={image.main || null} 
                                  alt={`Product ${productData.title}`} 
                                  className="tf-image-zoom lazyload" 
                                  onError={(e) => {
                                    e.target.src = '/default-main.jpg';
                                  }}
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

              {/* Product Info */}
              <div className="col-md-6">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-wrap other-image-zoom">
                  <div className="tf-product-info-list">
                    <div className="tf-product-heading">
                      <span className="brand-product">{productData.brand}</span>
                      <h5 className="product-name fw-medium">
                        {productData.title}
                      </h5>
                      
                     <div className="product-price">
  <div className="display-sm price-new price-on-sale">
    Rs {productData.price?.toFixed(2) || '0.00'}
  </div>
  {productData.originalPrice > productData.price && (
    <>
      <div className="display-sm price-old">Rs {productData.originalPrice.toFixed(2)}</div>
      <span className="badge-sale">
        {productData.discountPercentage}% Off
      </span>
    </>
  )}
</div>

                      <div className="product-stock">
                        <span className="stock in-stock">In Stock ({productData.stock} units)</span>
                      </div>
                    </div>
                    
                    {productData.sizes?.length > 0 && (
                      <div className="tf-product-variant">
                        <div className="variant-picker-item variant-size">
                          <div className="variant-picker-label">
                            <div>
                              Size:
                              <span className="variant-picker-label-value value-currentSize">
                                {selectedSize}
                              </span>
                            </div>
                          </div>
                          <div className="variant-picker-values">
                            {productData.sizes.map(size => (
                              <span
                                key={size}
                                className={`size-btn ${
                                  selectedSize === size ? "active" : ""
                                }`}
                                onClick={() => handleSizeChange(size)}
                              >
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
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
                          onClick={handleAddToCart}
                          disabled={isAdding}
                          data-bs-toggle="offcanvas"
                          className="tf-btn animate-btn btn-add-to-cart"
                        >
                          {isAdding ? "Adding..." : "Add to cart"}
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
            </div>
          </div>
        </div>
      </section>

      {showCompare && <CompareModal products={[]} onClose={() => setShowCompare(false)} />}
    </>
  );
};

export default ProductDetail;