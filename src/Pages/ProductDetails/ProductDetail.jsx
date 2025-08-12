import BreadcrumbP from "./Breadcrumb";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Link, useParams } from "react-router-dom";
import CompareModal from "../../components/ui/Modal/CompareModal";
import { useGetProductByIdQuery } from "../../services/products/productApi";
import { useAddToCartMutation } from "../../services/cart/cartApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToGuestCart } from "../../utils/guestCart";
import { useAddToWishlistMutation, useDeleteFromWishlistMutation, useLazyCheckWishlistQuery } from "../../services/wishlist/wishlistApi";
import ProductDescription from "./ProductDescription";
import PeopleAlsoBought from "./PeopleAlso";

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
    const [checkWishlist] = useLazyCheckWishlistQuery();
  const [addToWishlist] = useAddToWishlistMutation();
  const [deleteFromWishlist] = useDeleteFromWishlistMutation();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistId, setWishlistId] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
  
    const toggleAccordion = (id) => {
      setActiveAccordion(activeAccordion === id ? null : id);
    };

  const user = useSelector(state => state.auth.user);

  
  useEffect(() => {
    console.log("Current wishlist status:", {
      isInWishlist,
      wishlistId,
    });
  }, [isInWishlist, wishlistId]);

    // Check wishlist status when product or user changes
  useEffect(() => {
    const checkWishlistStatus = async () => {
      if (user?.id && id) {
        try {
          const { data } = await checkWishlist({
            customerId: user.id,
            productId: id,
          });
          setIsInWishlist(data?.inWishlist || false);
          setWishlistId(data?.wishlistId || null);
        } catch (error) {
          console.error("Failed to check wishlist:", error);
        }
      }
    };

    checkWishlistStatus();
  }, [user, id, checkWishlist]);


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
      .filter((img) => img?.imageUrl) // Filter out invalid images
      .map((img, index) => ({
        id: img.id || `img-${index}`,
        thumb: img.imageUrl,
        main: img.imageUrl,
        alt: `Product ${productData.title} - Image ${index + 1}`,
      }));
  }, [productData]);
  // Initialize Swiper

  
  // Update your Swiper initialization useEffect
  useEffect(() => {
    if (filteredImages.length === 0) return;

    let thumbsSwiper = null;
    let mainSwiper = null;

    const initSwipers = () => {
      // Initialize thumbnail swiper first
      thumbsSwiper = new Swiper(".tf-product-media-thumbs", {
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 10,
        watchSlidesProgress: true,
        slideToClickedSlide: true, // Add this line
        navigation: {
          nextEl: ".thumbs-next",
          prevEl: ".thumbs-prev",
        },
        breakpoints: {
          768: {
            direction: "vertical",
            slidesPerView: 4,
          },
          0: {
            direction: "horizontal",
            slidesPerView: 4,
          },
        },
      });

      // Then initialize main swiper with thumbs control
      mainSwiper = new Swiper(".tf-product-media-main", {
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        thumbs: {
          swiper: thumbsSwiper,
        },
        navigation: {
          // Add navigation for main swiper
          nextEl: ".main-next",
          prevEl: ".main-prev",
        },
      });

      // Sync the swipers
      thumbsSwiper.controller.control = mainSwiper;
      mainSwiper.controller.control = thumbsSwiper;

      thumbsSwiperRef.current = thumbsSwiper;
      mainSwiperRef.current = mainSwiper;
    };

    const timer = setTimeout(initSwipers, 100);

    return () => {
      clearTimeout(timer);
      if (thumbsSwiper) thumbsSwiper.destroy(true, true);
      if (mainSwiper) mainSwiper.destroy(true, true);
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



// const handleAddToCart = async () => {
//   if (!productData) return;

//   if (!selectedSize) {
//     toast.error("Please select a size");
//     return;
//   }

//   if (!user || !user.id) {
//     toast.error("Please log in to add items to your cart");
//     return;
//   }

//   try {
//     const { id: productId } = productData;

//     await addToCart({
//       customerId: user.id,  // ✅ No fallback, safe value
//       productId,
//       quantity,
//       size: selectedSize
//     }).unwrap();

//     toast.success("Product added to cart");
//   } catch (error) {
//     console.error("Cart error:", error);
//     toast.error("Failed to add product to cart");
//   }
// };

const handleAddToCart = async () => {
  if (!productData) return;

  if (!selectedSize) {
    toast.error("Please select a size");
    return;
  }

  // Guest user → store in localStorage (pass full variant arrays + fallback fields)
  if (!user || !user.id) {
    addToGuestCart({
      productId: productData._id ?? productData.id,
      title: productData.title ?? productData.name,
      size: selectedSize,
      quantity,
      // pass variant arrays (may be undefined but that's fine)
      priceVariants: productData.priceVariants ?? [],
      imageVariants: productData.imageVariants ?? [],
      images: productData.images ?? [],
      // fallback single-image fields
      image: typeof productData.image === "string" ? productData.image : productData.image?.url ?? undefined,
      // optionally include other fields used by addToGuestCart
      originalPrice: productData.originalPrice,
      price: productData.price,
      // you can include the whole product if you want a snapshot
      // fullProduct: productData
    });

    toast.success("Added to cart (Guest)");
    return;
  }

  // Logged-in user flow (unchanged)...
  try {
    await addToCart({
      customerId: user.id,
      productId: productData._id ?? productData.id,
      quantity,
      size: selectedSize
    }).unwrap();

    toast.success("Product added to cart");
  } catch (error) {
    console.error("Cart error:", error);
    toast.error(error?.data?.message || "Failed to add product to cart");
  }
};


//  wishlistt api 

const handleWishlistToggle = async () => {
    if (!user?.id) {
      toast.error("Please log in to manage your wishlist");
      return;
    }

    try {
      if (isInWishlist) {
        // Ensure we have the wishlistId before attempting deletion
        if (!wishlistId) {
          // If we don't have the ID, check again
          const { data } = await checkWishlist({
            customerId: user.id,
            productId: id,
          });

          if (!data?.wishlistId) {
            toast.error("Cannot remove item from wishlist");
            return;
          }

          await deleteFromWishlist(data.wishlistId).unwrap();
        } else {
          await deleteFromWishlist(wishlistId).unwrap();
        }

        setIsInWishlist(false);
        setWishlistId(null);
        toast.success("Removed from wishlist");
      } else {
        const response = await addToWishlist({
          customerId: user.id,
          productId: id,
        }).unwrap();

        // Handle the response based on your API structure
        const wishlistItem = response.wishlist || response;
        if (wishlistItem?.id) {
          setIsInWishlist(true);
          setWishlistId(wishlistItem.id);
          toast.success("Added to wishlist");
        } else {
          throw new Error("Invalid response from server");
        }
      }
    } catch (error) {
      console.error("Wishlist error:", error);
      toast.error(error.data?.message || "Failed to update wishlist");
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
                                src={image.thumb}
                                alt={`Thumbnail - ${productData.title}`}
                                className="img-thumbnail"
                                onError={(e) => {
                                  e.target.src = "/default-thumb.jpg";
                                  e.target.onerror = null;
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
                                  src={image.main}
                                  alt={`Product - ${productData.title}`}
                                  className="img-main tf-image-zoom"
                                  onError={(e) => {
                                    e.target.src = "/default-main.jpg";
                                    e.target.onerror = null;
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
                      <Link
                        to="/checkout"
                        className="tf-btn btn-primary w-100 animate-btn"
                      >
                        Buy it now
                      </Link>
                    </div>
                    
                    <div className="tf-product-extra-link">
                     <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleWishlistToggle();
                        }}
                        className={`product-extra-icon link ${
                          isInWishlist ? "in-wishlist" : ""
                        }`}
                      >
                        <i
                          className={`icon ${
                            isInWishlist ? "icon-trash" : "icon-heart"
                          }`}
                        />
                        <span>
                          {isInWishlist
                            ? "Remove from wishlist"
                            : "Add to wishlist"}
                        </span>
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
      {/* description  */}
       <section className="flat-spacing pt-0">
      <div className="container">
        {/* Descriptions Accordion */}
        <div className="widget-accordion wd-product-descriptions">
          <div
            className={`accordion-title ${
              activeAccordion === "description" ? "" : "collapsed"
            }`}
            onClick={() => toggleAccordion("description")}
            aria-expanded={activeAccordion === "description"}
            aria-controls="description"
            role="button"
          >
            <span>Descriptions</span>
            <span className="icon icon-arrow-down" />
          </div>
          <div
            id="description"
            className={`collapse ${
              activeAccordion === "description" ? "show" : ""
            }`}
          >
             <div 
      className="accordion-body widget-material"
      dangerouslySetInnerHTML={{ __html: productData.ingredients || 'No ingredients information available' }}
    />
          </div>
        </div>

        {/* Materials Accordion */}
        <div className="widget-accordion wd-product-descriptions">
          <div
            className={`accordion-title ${
              activeAccordion === "material" ? "" : "collapsed"
            }`}
            onClick={() => toggleAccordion("material")}
            aria-expanded={activeAccordion === "material"}
            aria-controls="material"
            role="button"
          >
            <span>Ingridiance</span>
            <span className="icon icon-arrow-down" />
          </div>
          <div
            id="material"
            className={`collapse ${
              activeAccordion === "material" ? "show" : ""
            }`}
          >
            <div 
      className="accordion-body widget-material"
      dangerouslySetInnerHTML={{ __html: productData.ingredients || 'No ingredients information available' }}
    />
          </div>
        </div>

       

        {/* Additional Information Accordion */}
        <div className="widget-accordion wd-product-descriptions">
          <div
            className={`accordion-title ${
              activeAccordion === "addInformation" ? "" : "collapsed"
            }`}
            onClick={() => toggleAccordion("addInformation")}
            aria-expanded={activeAccordion === "addInformation"}
            aria-controls="addInformation"
            role="button"
          >
            <span>Additional Information</span>
            <span className="icon icon-arrow-down" />
          </div>
          <div
            id="addInformation"
            className={`collapse ${
              activeAccordion === "addInformation" ? "show" : ""
            }`}
          >
            <div 
      className="accordion-body"
      dangerouslySetInnerHTML={{ __html: productData.additionalInfo || 'No additional information available' }}
    />
          </div>
        </div>

      </div>
    </section>
      <PeopleAlsoBought />

      {showCompare && <CompareModal products={[]} onClose={() => setShowCompare(false)} />}
    </>
  );
};

export default ProductDetail;