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
    console.log("Added to cart");
  };

  // Handle quick view
  const handleQuickView = (e) => {
    e.preventDefault();
    console.log("Quick view");
  };

  // Handle compare
  const handleCompare = (e) => {
    e.preventDefault();
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
              <a className="breadcrumb-item" href="index">Home</a>
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
                <a href="productdetail" className="product-img">
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
                <a href="productdetail" className="name-product link fw-medium text-md">Loose Fit Tee</a>
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
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-2.jpg" src="images/product/product-2.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-2.jpg" src="images/product/product-2.jpg" alt="image-product" />
                </a>
              </div>
              <div className="card-product-info">
                <a href="productdetail" className="name-product link fw-medium text-md">Regular Fit Pima Cotton Polo Shirt</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$130.00</span>
                </p>
              </div>
            </div>

            {/* Card Product 3 */}
            <div className="card-product style-wishlist style-3 card-product-size">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
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
                <a href="productdetail" className="name-product link fw-medium text-md">Long Regular Fit Tee</a>
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

            {/* Card Product 4 */}
            <div className="card-product style-wishlist style-3 card-product-size">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-17.jpg" src="images/product/product-17.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-1.jpg" src="images/product/product-1.jpg" alt="image-product" />
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
                <a href="productdetail" className="name-product link fw-medium text-md">Regular Fit Pima Cotton Polo Shirt</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$80.00</span>
                  <span className="price-old">$100.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active hover-tooltip tooltip-bot line">
                    <span className="tooltip color-filter">White</span>
                    <span className="swatch-value bg-white" />
                    <img className="lazyload" data-src="images/product/product-17.jpg" src="images/product/product-17.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Light Orange</span>
                    <span className="swatch-value bg-light-orange" />
                    <img className="lazyload" data-src="images/product/product-16.jpg" src="images/product/product-16.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Light Grey</span>
                    <span className="swatch-value bg-grey-4" />
                    <img className="lazyload" data-src="images/product/product-5.jpg" src="images/product/product-5.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Product 5 */}
            <div className="card-product style-wishlist style-3 card-product-size">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-25.jpg" src="images/product/product-25.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-24.jpg" src="images/product/product-24.jpg" alt="image-product" />
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
                <a href="productdetail" className="name-product link fw-medium text-md">Midi Knit Dress</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$40.00</span>
                  <span className="price-old">$60.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Beige</span>
                    <span className="swatch-value bg-beige" />
                    <img className="lazyload" data-src="images/product/product-25.jpg" src="images/product/product-25.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Black</span>
                    <span className="swatch-value bg-dark" />
                    <img className="lazyload" data-src="images/product/product-22.jpg" src="images/product/product-22.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Grey</span>
                    <span className="swatch-value bg-grey-4" />
                    <img className="lazyload" data-src="images/women-grey-2.jpg" src="images/women-grey-2.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Product 6 */}
            <div className="card-product style-wishlist style-3 card-product-size">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-6.jpg" src="images/product/product-6.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-21.jpg" src="images/product/product-21.jpg" alt="image-product" />
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
                <a href="productdetail" className="name-product link fw-medium text-md">Oversized Fit Tee</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$60.00</span>
                  <span className="price-old">$180.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot line active">
                    <span className="tooltip color-filter">White</span>
                    <span className="swatch-value bg-white" />
                    <img className="lazyload" data-src="images/product/product-6.jpg" src="images/product/product-6.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Dark Green</span>
                    <span className="swatch-value bg-dark-green" />
                    <img className="lazyload" data-src="images/product/product-21.jpg" src="images/product/product-21.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Product 7 */}
            <div className="card-product style-wishlist style-3">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/women-yellow-2.jpg" src="images/women-yellow-2.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-28.jpg" src="images/product/product-28.jpg" alt="image-product" />
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
                <a href="productdetail" className="name-product link fw-medium text-md">Puff Sleeve Shirred Blouse</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$57.00</span>
                  <span className="price-old">$60.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                    <span className="tooltip color-filter">Yellow</span>
                    <span className="swatch-value bg-yellow-2" />
                    <img className="lazyload" data-src="images/women-yellow-2.jpg" src="images/women-yellow-2.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Light Orange</span>
                    <span className="swatch-value bg-light-orange-2" />
                    <img className="lazyload" data-src="images/product/product-28.jpg" src="images/product/product-28.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Beige</span>
                    <span className="swatch-value bg-beige" />
                    <img className="lazyload" data-src="images/product/product-7.jpg" src="images/product/product-7.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Product 8 */}
            <div className="card-product style-wishlist style-3 card-product-size">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-26.jpg" src="images/product/product-26.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-26.jpg" src="images/product/product-26.jpg" alt="image-product" />
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
                <a href="productdetail" className="name-product link fw-medium text-md">Printed T-shirt</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$120.00</span>
                  <span className="price-old">$140.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch line hover-tooltip tooltip-bot active">
                    <span className="tooltip color-filter">White</span>
                    <span className="swatch-value bg-white" />
                    <img className="lazyload" data-src="images/product/product-26.jpg" src="images/product/product-26.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Grey</span>
                    <span className="swatch-value bg-grey-4" />
                    <img className="lazyload" data-src="images/women-grey-1.jpg" src="images/women-grey-1.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Black</span>
                    <span className="swatch-value bg-dark" />
                    <img className="lazyload" data-src="images/women-black-6.jpg" src="images/women-black-6.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Product 9 */}
            <div className="card-product style-wishlist style-3 card-product-size">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-27.jpg" src="images/product/product-27.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-23.jpg" src="images/product/product-23.jpg" alt="image-product" />
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
                <a href="productdetail" className="name-product link fw-medium text-md">Basic Sports T-Shirt Crew Neck Ribbed</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">80.00</span>
                  <span className="price-old">$100.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                    <span className="tooltip color-filter">Light Purple</span>
                    <span className="swatch-value bg-light-purple-3" />
                    <img className="lazyload" data-src="images/product/product-27.jpg" src="images/product/product-27.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Light Grey</span>
                    <span className="swatch-value bg-grey-4" />
                    <img className="lazyload" data-src="images/product/product-11.jpg" src="images/product/product-11.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Light Orange</span>
                    <span className="swatch-value bg-light-orange" />
                    <img className="lazyload" data-src="images/product/product-12.jpg" src="images/product/product-12.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Product 10 */}
            <div className="card-product style-wishlist style-3">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-10.jpg" src="images/product/product-10.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-20.jpg" src="images/product/product-20.jpg" alt="image-product" />
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
                <a href="productdetail" className="name-product link fw-medium text-md">Regular Fit Fine Knit Polo Shirt</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$130.00</span>
                  <span className="price-old">$130.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                    <span className="tooltip color-filter">Light Blue</span>
                    <span className="swatch-value bg-light-blue-2" />
                    <img className="lazyload" data-src="images/product/product-10.jpg" src="images/product/product-10.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Black</span>
                    <span className="swatch-value bg-dark" />
                    <img className="lazyload" data-src="images/product/product-13.jpg" src="images/product/product-13.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Purple</span>
                    <span className="swatch-value bg-light-purple" />
                    <img className="lazyload" data-src="images/product/product-14.jpg" src="images/product/product-14.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Product 11 */}
            <div className="card-product style-wishlist style-3">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-21.jpg" src="images/product/product-21.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/women-black-3.jpg" src="images/women-black-3.jpg" alt="image-product" />
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
                <a href="productdetail" className="name-product link fw-medium text-md">Crop College T-Shirt</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$80.00</span>
                  <span className="price-old">$100.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                    <span className="tooltip color-filter">Dark Green</span>
                    <span className="swatch-value bg-dark-green" />
                    <img className="lazyload" data-src="images/product/product-21.jpg" src="images/product/product-21.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Black</span>
                    <span className="swatch-value bg-dark" />
                    <img className="lazyload" data-src="images/women-black-3.jpg" src="images/women-black-3.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Light Purple</span>
                    <span className="swatch-value bg-light-purple-3" />
                    <img className="lazyload" data-src="images/product/product-23.jpg" src="images/product/product-23.jpg" alt="image-product" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Product 12 */}
            <div className="card-product style-wishlist style-3 card-product-size">
              <i className="icon icon-close remove" onClick={handleRemoveItem} />
              <div className="card-product-wrapper">
                <a href="productdetail" className="product-img">
                  <img className="img-product lazyload" data-src="images/product/product-22.jpg" src="images/product/product-22.jpg" alt="image-product" />
                  <img className="img-hover lazyload" data-src="images/product/product-5.jpg" src="images/product/product-5.jpg" alt="image-product" />
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
                <a href="productdetail" className="name-product link fw-medium text-md">Bow-Tie T-Shirt</a>
                <p className="price-wrap fw-medium">
                  <span className="price-new">$120.00</span>
                  <span className="price-old">$140.00</span>
                </p>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot active">
                    <span className="tooltip color-filter">Black</span>
                    <span className="swatch-value bg-dark" />
                    <img className="lazyload" data-src="images/product/product-22.jpg" src="images/product/product-22.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip tooltip-bot">
                    <span className="tooltip color-filter">Beige</span>
                    <span className="swatch-value bg-beige" />
                    <img className="lazyload" data-src="images/product/product-5.jpg" src="images/product/product-5.jpg" alt="image-product" />
                  </li>
                  <li className="list-color-item color-swatch hover-tooltip line tooltip-bot">
                    <span className="tooltip color-filter">White</span>
                    <span className="swatch-value bg-white" />
                    <img className="lazyload" data-src="images/product/product-1.jpg" src="images/product/product-1.jpg" alt="image-product" />
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

      
    </div>
  );
};

export default WishlistPage;