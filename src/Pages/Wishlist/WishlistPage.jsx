import React, { useState } from "react";
import { useDeleteFromWishlistMutation, useGetWishlistQuery } from "../../services/wishlist/wishlistApi";
import { useAddToCartMutation } from "../../services/cart/cartApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import QuickViewModal from "../../components/ui/Modal/QuickView";

const WishlistPage = () => {
  const user = useSelector((state) => state.auth.user);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const {
    data: wishlistData,
    isLoading,
    isError,
    refetch,
  } = useGetWishlistQuery(user?.id, {
    skip: !user?.id,
  });
  console.log("wishlist" ,wishlistData)
  const [deleteFromWishlist] = useDeleteFromWishlistMutation();
  // const [addToCart] = useAddToCartMutation();

  // Handle remove item from wishlist
  const handleRemoveItem = async (e, wishlistItemId) => {
    e.preventDefault();
    try {
      await deleteFromWishlist(wishlistItemId).unwrap();
      toast.success("Removed from wishlist");
      refetch();
    } catch (error) {
      console.error("Failed to remove from wishlist:", error);
      toast.error(error.data?.message || "Failed to remove item");
    }
  };

  
  if (!user)
    return <div className="error">Please login to view your wishlist</div>;

 



  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Wishlist</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="index">
                Home
              </a>
              <div className="breadcrumb-item dot">
                <span />
              </div>
              <div className="breadcrumb-item current">Wishlist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wish list */}
      <section className="flat-spacing-13">
        <div className="container">
          {wishlistData?.wishlist?.length === 0 ? (
            <div className="empty-wishlist text-center">
              <h5>Your wishlist is empty</h5>
              <a href="/shop" className="tf-btn">
                Browse Products
              </a>
            </div>
          ) : (
            <div className="wrapper-wishlist tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
              {/* Card Product 1 */}
              {wishlistData?.wishlist?.map((item) => (
                <div
                  key={item.id}
                  className="card-product style-wishlist style-3 card-product-size"
                >
                  <i
                    className="icon icon-close remove"
                    onClick={(e) => handleRemoveItem(e, item.id)}
                  />
                  <div className="card-product-wrapper">
                    <a
                      href={`/productdetail/${item.product.id}`}
                      className="product-img"
                    >
                      <img
                        className="img-product lazyload"
                        data-src={
                          item.product.imageVariants?.[0]?.imageUrl ||
                          "/default-product.jpg"
                        }
                        src={
                          item.product.imageVariants?.[0]?.imageUrl ||
                          "/default-product.jpg"
                        }
                        alt={item.product.title}
                      />
                      {item.product.imageVariants?.[1]?.imageUrl && (
                        <img
                          className="img-hover lazyload"
                          data-src={item.product.imageVariants[1].imageUrl}
                          src={item.product.imageVariants[1].imageUrl}
                          alt={item.product.title}
                        />
                      )}
                    </a>
                    <ul className="list-product-btn">
                      {/* <li>
                        <a
                          href="#shoppingCart"
                          className="box-icon hover-tooltip"
                          // onClick={(e) => handleAddToCart(e, item.product)}
                        >
                          <span className="icon icon-cart2" />
                          <span className="tooltip">Add to Cart</span>
                        </a>
                      </li> */}
                      <li>
                        <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setQuickViewProduct(item.product);
                        }}
                        className="box-icon hover-tooltip quickview"
                      >
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                      </li>
                      {/* <li>
                        <a
                          href="#compare"
                          className="box-icon hover-tooltip compare"
                          onClick={handleCompare}
                        >
                          <span className="icon icon-compare" />
                          <span className="tooltip">Add to Compare</span>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="card-product-info">
                    <a
                       href={`/productdetail/${item.product.id}`}
                      className="name-product link fw-medium text-md"
                    >
                      {item.product.title}
                    </a>
                    <p className="price-wrap fw-medium">
                      <span className="price-new">
                        ₹{item.product.price?.toFixed(2) || "0.00"}
                      </span>
                      {item.product.originalPrice > item.product.price && (
                        <span className="price-old">
                          ₹{item.product.originalPrice?.toFixed(2)}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}

              {/* Pagination */}

              {wishlistData?.pagination?.pages > 1 && (
                <ul className="wg-pagination">
                  {Array.from(
                    { length: wishlistData.pagination.pages },
                    (_, i) => i + 1
                  ).map((page) => (
                    <li
                      key={page}
                      className={
                        wishlistData.pagination.page === page ? "active" : ""
                      }
                    >
                      <div className="pagination-item">{page}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        {quickViewProduct && (
          <QuickViewModal
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
          />
        )}
      </section>
    </div>
  );
};

export default WishlistPage;
