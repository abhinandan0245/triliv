



import React, { useState, useRef, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useAddToCartMutation } from "../../../services/cart/cartApi";
import { addToGuestCart } from "../../../utils/guestCart";

const QuickViewModal = ({ product, onClose }) => {
  const [currentSize, setCurrentSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  // Redux and API hooks
  const user = useSelector((state) => state.auth.user);
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  // Parse product data similar to ProductDetail component
  const productData = useMemo(() => {
    if (!product) return null;

    const sizes = Array.isArray(product.sizes)
      ? product.sizes
      : typeof product.sizes === "string"
      ? product.sizes.split(",").map((s) => s.trim())
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

    return {
      ...product,
      sizes,
      priceVariants,
    };
  }, [product]);

const getCurrentPricing = () => {
  if (!productData || !currentSize) {
    return {
      price: productData?.price || 0,
      originalPrice: productData?.originalPrice || 0,
      discountPercentage: 0,
      discountAmount: 0
    };
  }

  const variant = productData.priceVariants.find((v) => v.size === currentSize);
  
  if (variant) {
    return {
      price: variant.price || 0,
      originalPrice: variant.originalPrice || 0,
      discountPercentage: variant.discountPercentage || 0,
      discountAmount: variant.discountAmount || (variant.originalPrice && variant.price ? variant.originalPrice - variant.price : 0)
    };
  }

  return {
    price: productData.price || 0,
    originalPrice: productData.originalPrice || 0,
    discountPercentage: 0,
    discountAmount: productData.originalPrice && productData.price ? productData.originalPrice - productData.price : 0
  };
};

  const currentPricing = getCurrentPricing();

  // Handle modal visibility with animation
  useEffect(() => {
    if (product) {
      // Show modal with a small delay to allow CSS transitions
      requestAnimationFrame(() => {
        setIsVisible(true);
        document.body.style.overflow = "hidden";
      });
      
      // Reset modal state when product changes
      setCurrentSize("");
      setQuantity(1);
    } else {
      setIsVisible(false);
      document.body.style.overflow = "";
    }
  }, [product]);

  // Set initial size when product changes
  useEffect(() => {
    if (product && productData?.sizes && productData.sizes.length > 0 && !currentSize) {
      setCurrentSize(productData.sizes[0]);
    }
  }, [product, productData, currentSize]);

  const handleClose = () => {
    setIsVisible(false);
    // Allow time for the fade-out animation before completely closing
    setTimeout(() => {
      onClose();
      document.body.style.overflow = "";
    }, 300);
  };

  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Add to cart function - same as ProductDetail
  const handleAddToCart = async () => {
    if (!productData) return;

    if (!currentSize) {
      toast.error("Please select a size");
      return;
    }
   

      // 🚫 Not logged in → toast + open login popup
      if (!user || !user?.id) {
        toast.info("Please log in to add items to your cart");
        // openLogin(); // 🔥 same as Header
        return;
      }
    

    // Guest user → store in localStorage
    // if (!user || !user.id) {
    //   addToGuestCart({
    //     productId: productData._id ?? productData.id,
    //     title: productData.title ?? productData.name,
    //     size: currentSize,
    //     quantity,
    //     priceVariants: productData.priceVariants ?? [],
    //     imageVariants: productData.imageVariants ?? [],
    //     images: productData.images ?? [],
    //     image:
    //       typeof productData.image === "string"
    //         ? productData.image
    //         : productData.image?.url ?? undefined,
    //     originalPrice: productData.originalPrice,
    //     price: productData.price,
    //   });

    //   toast.success("Added to cart (Guest)");
    //   return;
    // }

    // Logged-in user flow
    try {
      await addToCart({
        customerId: user.id,
        productId: productData._id ?? productData.id,
        quantity,
        size: currentSize,
      }).unwrap();

      toast.success("Product added to cart");
    } catch (error) {
      console.error("Cart error:", error);
      toast.error(error?.data?.message || "Failed to add product to cart");
    }
  };

  // Function to safely render HTML content
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  if (!product || !productData) return null;

  // Get all product images
  const getAllProductImages = () => {
    // If imageVariants exist, use them
    if (product.imageVariants && product.imageVariants.length > 0) {
      return product.imageVariants.map(iv => iv.imageUrl);
    }
    
    // Otherwise use mainImage and hoverImage if available
    const images = [];
    if (product.mainImage) images.push(product.mainImage);
    if (product.hoverImage && product.hoverImage !== product.mainImage) {
      images.push(product.hoverImage);
    }
    
    return images;
  };

  const productImages = getAllProductImages();

  return (
    <div 
      className={`modal fade modalCentered modal-quick-view ${isVisible ? 'show' : ''}`} 
      style={{ display: isVisible ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={handleClose}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <span className="icon-close icon-close-popup" onClick={handleClose} />
          <div className="tf-product-media-wrap">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              loop={productImages.length > 1}
              onInit={(swiper) => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="tf-single-slide"
            >
              {productImages.length > 0 ? (
                productImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={image} 
                      alt={product.title || product.name} 
                      className="quickview-product-image"
                      style={{ 
                        width: "100%", 
                        height: "auto", 
                        maxHeight: "500px", 
                        objectFit: "contain" 
                      }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/500x500/f8f9fa/333?text=Image+Not+Found';
                      }}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <img 
                    src="https://via.placeholder.com/500x500/f8f9fa/333?text=No+Image+Available" 
                    alt="No image available" 
                    className="quickview-product-image"
                    style={{ 
                      width: "100%", 
                      height: "auto", 
                      maxHeight: "500px", 
                      objectFit: "contain" 
                    }}
                  />
                </SwiperSlide>
              )}
              
             
            </Swiper>
          </div>
          <div className="tf-product-info-wrap">
            <div className="tf-product-info-inner">
              <div className="tf-product-heading">
                <h6 className="product-name">
                  <a href="productdetail" className="link">
                    {productData.title || productData.name}
                  </a>
                </h6>
                <div className="product-price">
                  <h6 className="price-new price-on-sale">
                    Rs {currentPricing.price?.toFixed(2) || "0.00"}
                  </h6>
                  {currentPricing.originalPrice > currentPricing.price && (
  <>
    <h6 className="price-old">
      Rs {currentPricing.originalPrice.toFixed(2)}
    </h6>
    <span className="badge-sale">
      {currentPricing.discountPercentage
        ? `${currentPricing.discountPercentage}% Off`
        : null}
      {currentPricing.discountAmount
        ? ` | Rs ${currentPricing.discountAmount.toFixed(2)} Off`
        : null}
    </span>
  </>
)}

                </div>
                <div className="text">
                  {product.description ? (
                    <div dangerouslySetInnerHTML={createMarkup(product.description)} />
                  ) : (
                    "Product description not available."
                  )}
                </div>
              </div>
              
              {productData.sizes && productData.sizes.length > 0 && (
                <div className="tf-product-variant">
                  <div className="variant-picker-item variant-size">
                    <div className="variant-picker-label">
                      <div>
                        Size:{" "}
                        <span className="variant-picker-label-value value-currentSize">
                          {currentSize}
                        </span>
                      </div>
                    </div>
                    <div className="variant-picker-values">
                      {productData.sizes.map((size, index) => (
                        <span
                          key={index}
                          className={`size-btn ${currentSize === size ? "active" : ""}`}
                          data-size={size}
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
                      className="btn-quantity minus-btn"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <input
                      className="quantity-product font-4"
                      type="text"
                      name="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value) || 1)
                      }
                    />
                    <button
                      className="btn-quantity plus-btn"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                 <a
  onClick={(e) => {
    e.preventDefault();
    handleAddToCart();
  }}
  disabled={isAdding}
  className="tf-btn animate-btn btn-add-to-cart"
  {...(user?.id
    ? { "data-bs-toggle": "offcanvas", href: "#shoppingCart" } // ✅ only if logged in
    : {})} // ❌ remove attributes when not logged in
>
  {isAdding ? "Adding..." : "Add to cart"}
</a>
                </div>
               
              </div>
              <a href={`/productdetail/${product.id}`} className="view-details link">
                View full details <i className="icon icon-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;