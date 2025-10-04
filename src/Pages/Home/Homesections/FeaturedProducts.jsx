import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import QuickAddModal from "../../../components/ui/Modal/QuickAdd";
import QuickViewModal from "../../../components/ui/Modal/QuickView";
import CompareModal from "../../../components/ui/Modal/CompareModal";

import { useGetAllProductsQuery } from "../../../services/products/productApi";
import { useSelector } from "react-redux";
import {
  useAddToWishlistMutation,
  useDeleteFromWishlistMutation,
  useGetWishlistQuery,
  useLazyCheckWishlistQuery,
} from "../../../services/wishlist/wishlistApi";
import { toast } from "react-toastify";

const FeaturedProducts = () => {
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [showCompare, setShowCompare] = useState(false);
  const [comparedProducts, setComparedProducts] = useState([]);

  // ✅ local wishlist state (server truth mirrored here)
  const [wishlistStates, setWishlistStates] = useState({});
  // ✅ guard double clicks per product
  const [busyIds, setBusyIds] = useState(new Set());

  const { data, isLoading, isError } = useGetAllProductsQuery();
  const { user } = useSelector((state) => state.auth);

  const [addToWishlist] = useAddToWishlistMutation();
  const [deleteFromWishlist] = useDeleteFromWishlistMutation();
  const [triggerCheckWishlist] = useLazyCheckWishlistQuery();

  // Optional: initial fill from first page (nice-to-have)
  const { data: wishlistData } = useGetWishlistQuery(user?.id, { skip: !user });

  // Process products to include images and pricing (same as in Product component)
  const processedProducts = useMemo(() => {
    if (!data) return [];
    
    return data.map(product => {
      // Safely parse priceVariants (handles both string and array formats)
      let priceVariants = [];
      try {
        priceVariants = typeof product.priceVariants === 'string' 
          ? JSON.parse(product.priceVariants) 
          : Array.isArray(product.priceVariants) 
            ? product.priceVariants 
            : [];
      } catch (e) {
        console.error('Error parsing priceVariants:', e);
        priceVariants = [];
      }

      // Safely parse sizes (handles malformed JSON strings)
      let sizes = [];
      try {
        sizes = typeof product.sizes === 'string' 
          ? JSON.parse(product.sizes.replace(/'/g, '"')) 
          : Array.isArray(product.sizes) 
            ? product.sizes 
            : [];
      } catch (e) {
        console.error('Error parsing sizes:', e);
        sizes = [];
      }

      // Get default price variant with proper fallbacks
      const defaultVariant = priceVariants[0] || {
        size: sizes[0] || '',
        originalPrice: product.originalPrice || 0,
        discountPercentage: product.discountPercentage || 0,
        discountAmount: product.discountAmount || 0,
        price: product.price || product.originalPrice || 0
      };

      // Calculate prices with proper number conversion
      const originalPrice = Number(defaultVariant.originalPrice) || 0;
      const finalPrice = Number(defaultVariant.price) || originalPrice;
      const hasDiscount = originalPrice > finalPrice;

      // Calculate discount display
      let discountDisplay = null;
      if (defaultVariant.discountPercentage > 0) {
        discountDisplay = `${defaultVariant.discountPercentage}% OFF`;
      } else if (defaultVariant.discountAmount > 0) {
        discountDisplay = `₹${defaultVariant.discountAmount} OFF`;
      } else if (hasDiscount) {
        const discountValue = Math.round((originalPrice - finalPrice) / originalPrice * 100);
        discountDisplay = `${discountValue}% OFF`;
      }

      // Image handling with fallbacks
      const defaultImage = product.imageVariants?.[0]?.imageUrl || '';
      const hoverImage = product.imageVariants?.[1]?.imageUrl || defaultImage;

      return {
        ...product,
        mainImage: defaultImage,
        hoverImage: hoverImage,
        priceNew: `₹${finalPrice.toFixed(2)}`,
        priceOld: `₹${originalPrice.toFixed(2)}`,
        discount: discountDisplay,
        sizes: sizes,
        priceVariants: priceVariants,
        defaultVariant: defaultVariant
      };
    });
  }, [data]);

  // 👉 Bootstrap local state from getWishlist (first page only)
  useEffect(() => {
    if (wishlistData?.wishlist?.length) {
      const map = {};
      wishlistData.wishlist.forEach((w) => {
        map[w.productId] = { isInWishlist: true, wishlistId: w.id };
      });
      setWishlistStates((prev) => ({ ...prev, ...map }));
    }
  }, [wishlistData]);

  // 👉 Ensure server-truth for visible products (small list)
  useEffect(() => {
    const sync = async () => {
      if (!user?.id || !Array.isArray(processedProducts) || !processedProducts.length) return;
      const checks = await Promise.all(
        processedProducts.map(async (p) => {
          try {
            const { data: res } = await triggerCheckWishlist({
              customerId: user.id,
              productId: p.id,
            });
            return [p.id, { isInWishlist: !!res?.inWishlist, wishlistId: res?.wishlistId || null }];
          } catch {
            return [p.id, { isInWishlist: false, wishlistId: null }];
          }
        })
      );
      const next = { ...wishlistStates };
      checks.forEach(([pid, val]) => (next[pid] = val));
      setWishlistStates(next);
    };
    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, Array.isArray(processedProducts) ? processedProducts.map((p) => p.id).join(",") : ""]);

  const handleWishlist = async (e, product) => {
    e.preventDefault();
    if (!user?.id) {
      toast.warn("Please login first!");
      return;
    }
    if (busyIds.has(product.id)) return; // 🚫 ignore double click
    setBusyIds((s) => new Set(s).add(product.id));

    try {
      // Always re-check server status just before mutate (prevents 400)
      const { data: res } = await triggerCheckWishlist({
        customerId: user.id,
        productId: product.id,
      });

      const isInWishlist = !!res?.inWishlist;
      const wishlistId = res?.wishlistId || wishlistStates[product.id]?.wishlistId || null;

      if (isInWishlist && wishlistId) {
        await deleteFromWishlist(wishlistId).unwrap();
        setWishlistStates((prev) => ({
          ...prev,
          [product.id]: { isInWishlist: false, wishlistId: null },
        }));
        toast.info("Removed from wishlist ❌");
      } else {
        const created = await addToWishlist({
          customerId: user.id,
          productId: product.id,
        }).unwrap();
        const item = created?.wishlist || created; // depends on transformResponse
        setWishlistStates((prev) => ({
          ...prev,
          [product.id]: { isInWishlist: true, wishlistId: item?.id || null },
        }));
        toast.success("Added to wishlist ❤️");
      }
    } catch (err) {
      console.error("Wishlist error:", err);
      // show backend message if present
      const msg =
        err?.data?.message ||
        err?.error ||
        "Failed to update wishlist";
      toast.error(msg);
    } finally {
      setBusyIds((s) => {
        const n = new Set(s);
        n.delete(product.id);
        return n;
      });
    }
  };

  // ✅ Updated handleQuickView with proper cleanup
  const handleQuickView = (e, product) => {
    e.preventDefault();
    
    // First close any existing modal and reset state
    setShowQuickView(false);
    setQuickViewProduct(null);
    document.body.style.overflow = "";
    
    // Small delay to ensure modal is fully closed before opening new one
    setTimeout(() => {
      setQuickViewProduct(product);
      setShowQuickView(true);
      document.body.style.overflow = "hidden";
    }, 100);
  };

  // if (isLoading) return <p>Loading products...</p>;
  // if (isError) return <p>Failed to load products</p>;

  return (
    <section className="flat-spacing-2 bg-gradient-2">
      <div className="container">
        <div className="flat-title" data-aos="fade-up">
          <h3 className="title letter-0 text-start font-7">Featured Products</h3>
        </div>

        <div className="fl-control-sw2 wrap-pos-nav sw-over-product" data-aos="fade-up">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={12}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={800}
            navigation={{ nextEl: ".nav-next-product", prevEl: ".nav-prev-product" }}
            pagination={{ clickable: true, el: ".sw-pagination-product" }}
            breakpoints={{
                 768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 16 },
    1200: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
    1450: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 24 },
            }}
          >
            {processedProducts.map((product) => {
              const ws = wishlistStates[product.id] || {};
              const isBusy = busyIds.has(product.id);

              return (
                <SwiperSlide key={product.id}>
                  <div className="card-product" style={{ height: "567.97px" }}>
                    <div
                      className="card-product-wrapper asp-ratio-0"
                      style={{
                        flex: "1 1 auto",
                        display: "flex",
                        width:"341.99px",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        height: "420px",
                      }}
                    >
                      <a
  href={`/productdetail/${product.id}`}
  className="product-img w-full h-full flex items-center justify-center"
>
  {product.mainImage ? (
    <img
      className="img-product lazyload"
      src={product.mainImage}
      alt={product.title}
      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
    />
  ) : null}

  {product.hoverImage && product.hoverImage !== product.mainImage ? (
    <img
      className="img-hover lazyload"
      src={product.hoverImage}
      alt={product.title}
      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
    />
  ) : null}
</a>


                      <ul className="list-product-btn">
                        <li className="wishlist">
                          <a
                            href="javascript:void(0);"
                            onClick={(e) => handleWishlist(e, product)}
                            className={`hover-tooltip tooltip-left box-icon ${ws.isInWishlist ? "in-wishlist" : ""}`}
                            style={{
                              pointerEvents: isBusy ? "none" : "auto",
                              opacity: isBusy ? 0.6 : 1,
                            }}
                          >
                            {/* filled heart when in wishlist */}
                            <span
                              className={`icon ${ws.isInWishlist ? "icon-heart" : "icon-heart2"}`}
                              style={{
                                color: ws.isInWishlist ? "red" : "inherit",
                                transition: "color 0.2s ease",
                              }}
                            />
                            <span className="tooltip">
                              {ws.isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#quickView"
                            onClick={(e) => handleQuickView(e, product)}
                            className="hover-tooltip tooltip-left box-icon quickview"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </li>
                      </ul>

                      {product.discount && (
                        <div className="on-sale-wrap">
                          <span className="on-sale-item">{product.discount}</span>
                        </div>
                      )}
                    </div>

                    <div className="card-product-info text-center mt-2">
                      <a
                        href={`/productdetail/${product.id}`}
                        className="name-product link fw-medium text-md block truncate"
                      >
                        {product.title}
                      </a>
                      <p className="price-wrap fw-medium">
                        <span className={`price-new text-xl ${product.priceOld ? "text-primary" : ""}`}>
                          {product.priceNew}
                        </span>
                        {product.priceOld && <span className="price-old ml-2">{product.priceOld}</span>}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="d-flex d-xl-none sw-dot-default sw-pagination-product justify-content-center"></div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-product" />
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-product" />
        </div>
      </div>

      {showQuickAdd && selectedProduct && (
        <QuickAddModal product={selectedProduct} onClose={() => setShowQuickAdd(false)} />
      )}

      {/* ✅ Updated QuickViewModal rendering with key prop for proper remounting */}
      {showQuickView && quickViewProduct && (
        <QuickViewModal
          key={`quickview-${quickViewProduct.id}`} // Force remount on product change
          product={quickViewProduct}
          onClose={() => {
            setShowQuickView(false);
            setQuickViewProduct(null);
            document.body.style.overflow = "";
          }}
        />
      )}

      {showCompare && (
        <CompareModal
          products={comparedProducts}
          onClose={() => setShowCompare(false)}
          onClearAll={(updatedProducts) => setComparedProducts(updatedProducts || [])}
        />
      )}
    </section>
  );
};

export default FeaturedProducts;