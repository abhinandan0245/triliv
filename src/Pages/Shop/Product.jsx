import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../services/products/productApi";
import { useGetAllCategoriesQuery } from "../../services/category/categoryApi";
import { Link, useParams } from "react-router-dom";
import { useAddToCartMutation } from "../../services/cart/cartApi";
import { addToGuestCart } from "../../utils/guestCart";
import { toast } from "react-toastify";

const Product = () => {
  const [layout, setLayout] = useState("tf-col-4");
  const [sortValue, setSortValue] = useState("best-selling");
  // const [selectedCategory, setSelectedCategory] = useState(null);

   const { categorySlug } = useParams();
  const { data: categories } = useGetAllCategoriesQuery();
  
  // Find the selected category
  const selectedCategory = categories?.find(cat => cat.slug === categorySlug);

 // Fetch products with category filter if a category is selected
  const { data: products, isLoading, error } = useGetAllProductsQuery(
    selectedCategory ? { categoryId: selectedCategory.id } : {}
  );

  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  const handleSortChange = (value) => {
    setSortValue(value);
    // Add sorting logic here
  };

  const handleLayoutChange = (value) => {
    setLayout(value);
  };



// Process products to include images and pricing
const processedProducts = products.map(product => {
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

// add to cart api call

const handleAddToCart = async () => {
  if (!productData) return;

  if (!selectedSize) {
    toast.error("Please select a size");
    return;
  }

  //  Guest user → store in localStorage
  if (!user || !user.id) {
    addToGuestCart({
      productId: productData.id,
      size: selectedSize,
      quantity,
      name: productData.name || productData.title, // handle both naming patterns
      price: productData.price,
      image: productData.image || productData.images?.[0]
    });
    toast.success("Added to cart (Guest)");
    return;
  }

  //  Logged-in user → store in DB
  try {
    await addToCart({
      customerId: user.id,
      productId: productData.id,
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
    <section className="flat-spacing-24 pt-0">
      <div className="container">
        <div className="tf-shop-control">
          <div className="tf-group-filter">
            <a
              href="#filterShop"
              data-bs-toggle="offcanvas"
              aria-controls="filterShop"
              className="tf-btn-filter"
            >
              <span className="icon icon-filter" />
              <span className="text">Filter</span>
            </a>
            <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
              <div className="btn-select">
                <span className="text-sort-value">
                  {sortValue === "best-selling" && "Best selling"}
                  {sortValue === "a-z" && "Alphabetically, A-Z"}
                  {sortValue === "z-a" && "Alphabetically, Z-A"}
                  {sortValue === "price-low-high" && "Price, low to high"}
                  {sortValue === "price-high-low" && "Price, high to low"}
                </span>
                <span className="icon icon-arr-down" />
              </div>
              <div className="dropdown-menu">
                <div
                  className={`select-item ${
                    sortValue === "best-selling" ? "active" : ""
                  }`}
                  data-sort-value="best-selling"
                  onClick={() => handleSortChange("best-selling")}
                >
                  <span className="text-value-item">Best selling</span>
                </div>
                <div
                  className={`select-item ${
                    sortValue === "a-z" ? "active" : ""
                  }`}
                  data-sort-value="a-z"
                  onClick={() => handleSortChange("a-z")}
                >
                  <span className="text-value-item">Alphabetically, A-Z</span>
                </div>
                <div
                  className={`select-item ${
                    sortValue === "z-a" ? "active" : ""
                  }`}
                  data-sort-value="z-a"
                  onClick={() => handleSortChange("z-a")}
                >
                  <span className="text-value-item">Alphabetically, Z-A</span>
                </div>
                <div
                  className={`select-item ${
                    sortValue === "price-low-high" ? "active" : ""
                  }`}
                  data-sort-value="price-low-high"
                  onClick={() => handleSortChange("price-low-high")}
                >
                  <span className="text-value-item">Price, low to high</span>
                </div>
                <div
                  className={`select-item ${
                    sortValue === "price-high-low" ? "active" : ""
                  }`}
                  data-sort-value="price-high-low"
                  onClick={() => handleSortChange("price-high-low")}
                >
                  <span className="text-value-item">Price, high to low</span>
                </div>
              </div>
            </div>
          </div>
          <ul className="tf-control-layout">
            <li
              className={`tf-view-layout-switch sw-layout-list list-layout ${
                layout === "list" ? "active" : ""
              }`}
              data-value-layout="list"
              onClick={() => handleLayoutChange("list")}
            >
              <div className="item icon-list">
                <span />
                <span />
              </div>
            </li>
            <li
              className={`tf-view-layout-switch sw-layout-2 ${
                layout === "tf-col-2" ? "active" : ""
              }`}
              data-value-layout="tf-col-2"
              onClick={() => handleLayoutChange("tf-col-2")}
            >
              <div className="item icon-grid-2">
                <span />
                <span />
              </div>
            </li>
            <li
              className={`tf-view-layout-switch sw-layout-3 ${
                layout === "tf-col-3" ? "active" : ""
              }`}
              data-value-layout="tf-col-3"
              onClick={() => handleLayoutChange("tf-col-3")}
            >
              <div className="item icon-grid-3">
                <span />
                <span />
                <span />
              </div>
            </li>
            <li
              className={`tf-view-layout-switch sw-layout-4 ${
                layout === "tf-col-4" ? "active" : ""
              }`}
              data-value-layout="tf-col-4"
              onClick={() => handleLayoutChange("tf-col-4")}
            >
              <div className="item icon-grid-4">
                <span />
                <span />
                <span />
                <span />
              </div>
            </li>
          </ul>
        </div>
        <div className="wrapper-control-shop">
          <div className="meta-filter-shop">
            <div id="product-count-grid" className="count-text" />
            <div id="product-count-list" className="count-text" />
            <div id="applied-filters" />
            <button
              id="remove-all"
              className="remove-all-filters"
              style={{ display: "none" }}
            >
              <i className="icon icon-close" /> Clear all filter
            </button>
          </div>

          {/* List Layout */}
          <div
            className="tf-list-layout wrapper-shop"
            id="listLayout"
            style={{ display: layout === "list" ? "block" : "none" }}
          >
            {processedProducts.map((product) => (
              <div
                key={product.productId}
                className={`card-product style-list ${
                  product.stock === 0 ? "out-of-stock" : ""
                }`}
                data-availability={product.stock === 0 ? "Out of stock" : "In stock"}
                data-brand={product.brand}
              >
                <div className="card-product-wrapper">
                  <a href="/productdetail" className="product-img">
                    <img
                      className="img-product lazyload"
                      data-src={product.mainImage}
                      src={product.mainImage}
                      alt={product.title}
                    />
                    <img
                      className="img-hover lazyload"
                      data-src={product.hoverImage}
                      src={product.hoverImage}
                      alt={product.title}
                    />
                  </a>
                  {product.discount && (
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">{product.discount}</span>
                    </div>
                  )}
                </div>
                <div className="card-product-info">
                  <div className="info-list">
                    <a
                      href="/productdetails"
                      className="name-product link fw-medium text-md"
                    >
                      {product.title}
                    </a>
                    <p className="price-wrap fw-medium text-md">
                      <span className="price-new">{product.priceNew}</span>
                      {product.priceOld && (
                        <span className="price-old">{product.priceOld}</span>
                      )}
                    </p>
                    <p className="desc text-sm text-main text-line-clamp-2">
                      {product.description}
                    </p>
                    {product.colors && product.colors.length > 0 && (
                      <ul className="list-color-product">
                        {product.colors.map((color, index) => (
                          <li
                            key={index}
                            className={`list-color-item color-swatch hover-tooltip ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <span className="tooltip color-filter">
                              {color}
                            </span>
                            <span className={`swatch-value bg-${color.toLowerCase()}`} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {product.sizes && product.sizes.length > 0 && (
                      <ul className="size-box">
                        {product.sizes.map((size, index) => (
                          <li key={index} className="size-item text-xs">
                            {size}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="list-product-btn">
                    <a
                      onClick={handleAddToCart}
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="tf-btn btn-main-product add-to-cart animate-btn"
                    >
                      Add To cart
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist hover-tooltip"
                    >
                      <span className="icon icon-heart2" />
                      <span className="tooltip">Add to Wishlist</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon hover-tooltip quickview"
                    >
                      <span className="icon icon-view" />
                      <span className="tooltip">Quick View</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare hover-tooltip"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Add to Compare</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <ul className="wg-pagination">
              <li className="active">
                <div className="pagination-item">1</div>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  2
                </a>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  <i className="icon-arr-right2" />
                </a>
              </li>
            </ul>
          </div>

          {/* Grid Layout */}
          <div
            className={`wrapper-shop tf-grid-layout ${layout}`}
            id="gridLayout"
            style={{ display: layout !== "list" ? "grid" : "none" }}
          >
            {processedProducts.map((product) => (
              <div
                key={product.productId}
                className={`card-product grid style-1 ${
                  product.sizes?.length > 0 ? "card-product-size" : ""
                } ${product.stock === 0 ? "out-of-stock" : ""}`}
                data-availability={product.stock === 0 ? "Out of stock" : "In stock"}
                data-brand={product.brand}
              >
                <div className="card-product-wrapper">
                  <Link to={`/productdetail/${product.id}`} className="product-img">
                    <img
                      className="img-product lazyload"
                      data-src={product.mainImage}
                      src={product.mainImage}
                      alt={product.title}
                    />
                    <img
                      className="img-hover lazyload"
                      data-src={product.hoverImage}
                      src={product.hoverImage}
                      alt={product.title}
                    />
                  </Link>
                  {product.discount && (
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">{product.discount}</span>
                    </div>
                  )}
                  <ul className="list-product-btn">
                    <li>
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="offcanvas"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-cart2" />
                        <span className="tooltip">Add to Cart</span>
                      </a>
                    </li>
                    <li className="wishlist">
                      <a
                        href="javascript:void(0);"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-heart2" />
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#quickView"
                        data-bs-toggle="modal"
                        className="hover-tooltip tooltip-left box-icon quickview"
                      >
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </li>
                    <li className="compare">
                      <a
                        href="#compare"
                        data-bs-toggle="modal"
                        aria-controls="compare"
                        className="hover-tooltip tooltip-left box-icon"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                      </a>
                    </li>
                  </ul>
                  {product.sizes?.length > 0 && (
                    <ul className="size-box">
                      {product.sizes.map((size, index) => (
                        <li
                          key={index}
                          className="size-item text-xs text-white"
                        >
                          {size}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="card-product-info">
                  <a
                    href="/productdetail"
                    className="name-product link fw-medium text-md"
                  >
                    {product.title}
                  </a>
                  <p className="price-wrap fw-medium">
                    <span className="price-new">{product.priceNew}</span>
                    {product.priceOld && (
                      <span className="price-old">{product.priceOld}</span>
                    )}
                  </p>
                  {product.colors && product.colors.length > 0 && (
                    <ul className="list-color-product">
                      {product.colors.map((color, index) => (
                        <li
                          key={index}
                          className={`list-color-item color-swatch hover-tooltip tooltip-bot ${
                            index === 0 ? "active" : ""
                          }`}
                        >
                          <span className="tooltip color-filter">
                            {color}
                          </span>
                          <span className={`swatch-value bg-${color.toLowerCase()}`} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            <ul className="wg-pagination">
              <li className="active">
                <div className="pagination-item">1</div>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  2
                </a>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="pagination-item">
                  <i className="icon-arr-right2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;