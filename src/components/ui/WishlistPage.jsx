import React from 'react';

const WishlistPage = () => {
  // Handle remove item from wishlist
  const handleRemoveItem = (e) => {
    e.preventDefault();
    e.currentTarget.closest('.card-product').remove();
  };

  // Handle add to cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    // Add your cart logic here
    console.log("Added to cart");
  };

  // Handle quick view
  const handleQuickView = (e) => {
    e.preventDefault();
    // Add your quick view logic here
    console.log("Quick view");
  };

  // Handle compare
  const handleCompare = (e) => {
    e.preventDefault();
    // Add your compare logic here
    console.log("Compare");
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

      {/* Wish list */}
      <section className="flat-spacing-13">
        <div className="container">
          <div className="wrapper-wishlist tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
            {/* Card Product 1 */}
            <div className="card-product style-wishlist style-3 card-product-size">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="product-detail.php" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-19.jpg" src="images/product/product-19.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/women-grey-2.jpg" src="images/women-grey-2.jpg" alt="image-product" />
                </a>
                <ul className="list-product-btn">
                  <li>
                    <a href="#shoppingCart" className="box-icon hover-tooltip" onClick={handleAddToCart}>
                      <span className="icon icon-cart2" />
                      <span className="tooltip">Add to Cart</span>
                    </a>
                  </li>
                  <li>
                    <a href="#quickView" className="box-icon hover-tooltip quickview" onClick={handleQuickView}>
                      <span className="icon icon-view" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#compare" className="box-icon hover-tooltip compare" onClick={handleCompare}>
                      <span className="icon icon-compare" />
                      <span className="tooltip">Add to Compare</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-product-info">
                <a href="product-detail.php" className="name-product link fw-medium text-md">Loose Fit Tee</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$120.00</span>
                  <span className="price-old">$150.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item hover-tooltip tooltip-bot color-swatch active">
                    <span className="tooltip color-filter">Grey</span>
                    <span className="swatch-value bg-grey-4" />
                    <img className="lazyload" data-src="images/product/product-19.jpg" src="images/product/product-19.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Black</span>
                    <span className="swatch-value bg-dark" />
                    <img className="lazyload" data-src="images/product/product-9.jpg" src="images/product/product-9.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot line">
                    <span className="tooltip color-filter">White</span>
                    <span className="swatch-value bg-white" />
                    <img className="lazyload" data-src="images/product/product-4.jpg" src="images/product/product-4.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Product 2 */}
            <div className="card-product style-wishlist style-3 out-of-stock">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="product-detail.php" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-2.jpg" src="images/product/product-2.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-2.jpg" src="images/product/product-2.jpg" alt="image-product" />
                </a>
              </div>
              <div className="card-product-info">
                <a href="product-detail.php" className="name-product link fw-medium text-md">Regular Fit Pima Cotton Polo Shirt</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$130.00</span>
                </p>
              </div>
            </div>

            {/* Card Product 3 */}
            <div className="card-product style-wishlist style-3 card-product-size">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="product-detail.php" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-3.jpg" src="images/product/product-3.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-4.jpg" src="images/product/product-4.jpg" alt="image-product" />
                </a>
                <ul className="list-product-btn">
                  <li>
                    <a href="#shoppingCart" className="box-icon hover-tooltip" onClick={handleAddToCart}>
                      <span className="icon icon-cart2" />
                      <span className="tooltip">Add to Cart</span>
                    </a>
                  </li>
                  <li>
                    <a href="#quickView" className="box-icon hover-tooltip quickview" onClick={handleQuickView}>
                      <span className="icon icon-view" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#compare" className="box-icon hover-tooltip compare" onClick={handleCompare}>
                      <span className="icon icon-compare" />
                      <span className="tooltip">Add to Compare</span>
                    </a>
                  </li>
                </ul>
                <div className="countdown-box">
                  <div className="js-countdown" data-timer={1007500} data-labels="D  :,H  :,M  :,S"></div>
                </div>
              </div>
              <div className="card-product-info">
                <a href="product-detail.php" className="name-product link fw-medium text-md">Long Regular Fit Tee</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$60.00</span>
                  <span className="price-old">$70.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                    <span className="tooltip color-filter">Yellow</span>
                    <span className="swatch-value bg-yellow" />
                    <img className="lazyload" data-src="images/product/product-3.jpg" src="images/product/product-3.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Grey</span>
                    <span className="swatch-value bg-grey-4" />
                    <img className="lazyload" data-src="images/product/product-6.jpg" src="images/product/product-6.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot line">
                    <span className="tooltip color-filter">White</span>
                    <span className="swatch-value bg-white" />
                    <img className="lazyload" data-src="images/product/product-4.jpg" src="images/product/product-4.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

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

      {/* Recently Viewed */}
      <section className="flat-spacing section-viewed pt-0">
        <div className="container">
          <div className="flat-title wow fadeInUp">
            <h4 className="title">Recently Viewed</h4>
          </div>
          <div className="fl-control-sw wrap-pos-nav sw-over-product wow fadeInUp">
            <div className="recently-viewed-grid">
              {/* Item 1 */}
              <div className="card-product style-2 card-product-size">
                <div className="card-product-wrapper">
                  <a href="product-detail.php" className="product-img">
                    <img className="img-product lazyload" data-src="images/product/product-5.jpg" src="images/product/product-5.jpg" alt="image-product" />
                    <img className="img-hover lazyload" data-src="images/product/product-22.jpg" src="images/product/product-22.jpg" alt="image-product" />
                  </a>
                  <ul className="list-product-btn">
                    <li>
                      <a href="#shoppingCart" className="box-icon hover-tooltip" onClick={handleAddToCart}>
                        <span className="icon icon-cart2" />
                        <span className="tooltip">Add to Cart</span>
                      </a>
                    </li>
                    <li className="wishlist">
                      <a href="#wishlist" className="box-icon hover-tooltip" onClick={handleRemoveItem}>
                        <span className="icon icon-heart2" />
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                    </li>
                    <li>
                      <a href="#quickView" className="box-icon quickview hover-tooltip" onClick={handleQuickView}>
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </li>
                    <li className="compare">
                      <a href="#compare" className="box-icon hover-tooltip" onClick={handleCompare}>
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
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">20% Off</span>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.php" className="name-product link fw-medium text-md">Turtleneck T-shirt</a>
                  <p className="price-wrap fw-medium">
                    <span className="price-new">$80.00</span>
                    <span className="price-old">$100.00</span>
                  </p>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                      <span className="tooltip color-filter">Grey</span>
                      <span className="swatch-value bg-grey-4" />
                      <img className="lazyload" data-src="images/product/product-5.jpg" src="images/product/product-5.jpg" alt="image-product" />
                    </li>
                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                      <span className="tooltip color-filter">Black</span>
                      <span className="swatch-value bg-dark" />
                      <img className="lazyload" data-src="images/product/product-22.jpg" src="images/product/product-22.jpg" alt="image-product" />
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 2 */}
              <div className="card-product style-2">
                <div className="card-product-wrapper">
                  <a href="product-detail.php" className="product-img">
                    <img className="img-product lazyload" data-src="images/product/product-12.jpg" src="images/product/product-12.jpg" alt="image-product" />
                    <img className="img-hover lazyload" data-src="images/product/product-39.jpg" src="images/product/product-39.jpg" alt="image-product" />
                  </a>
                  <ul className="list-product-btn">
                    <li>
                      <a href="#shoppingCart" className="box-icon hover-tooltip" onClick={handleAddToCart}>
                        <span className="icon icon-cart2" />
                        <span className="tooltip">Add to Cart</span>
                      </a>
                    </li>
                    <li className="wishlist">
                      <a href="#wishlist" className="box-icon hover-tooltip" onClick={handleRemoveItem}>
                        <span className="icon icon-heart2" />
                        <span className="tooltip">Add to Wishlist</span>
                      </a>
                    </li>
                    <li>
                      <a href="#quickView" className="box-icon quickview hover-tooltip" onClick={handleQuickView}>
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </li>
                    <li className="compare">
                      <a href="#compare" className="box-icon hover-tooltip" onClick={handleCompare}>
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                      </a>
                    </li>
                  </ul>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item trending">Trending</span>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.php" className="name-product link fw-medium text-md">Loose Fit Tee</a>
                  <p className="price-wrap fw-medium">
                    <span className="price-new">$65.00</span>
                  </p>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                      <span className="tooltip color-filter">Orange</span>
                      <span className="swatch-value bg-light-orange-2" />
                      <img className="lazyload" data-src="images/product/product-12.jpg" src="images/product/product-12.jpg" alt="image-product" />
                    </li>
                    <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                      <span className="tooltip color-filter">Blue</span>
                      <span className="swatch-value bg-light-blue" />
                      <img className="lazyload" data-src="images/product/product-39.jpg" src="images/product/product-39.jpg" alt="image-product" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WishlistPage;