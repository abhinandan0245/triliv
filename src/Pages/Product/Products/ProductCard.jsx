// components/products/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, layout = 'grid' }) => {
  if (layout === 'list') {
    return (
      <div
        className={`card-product style-list ${
          product.availability === 'Out of stock' ? 'out-of-stock' : ''
        }`}
        data-availability={product.availability}
        data-brand={product.brand}
      >
        <div className="card-product-wrapper">
          <a href={product.link} className="product-img">
            <img
              className="img-product lazyload"
              data-src={product.image}
              src={product.image}
              alt={product.name}
            />
            <img
              className="img-hover lazyload"
              data-src={product.hoverImage}
              src={product.hoverImage}
              alt={product.name}
            />
          </a>
          {product.onSale && (
            <div className="on-sale-wrap">
              <span className="on-sale-item">{product.discount}% Off</span>
            </div>
          )}
        </div>
        <div className="card-product-info">
          <div className="info-list">
            <a href={product.link} className="name-product link fw-medium text-md">
              {product.name}
            </a>
            <p className="price-wrap fw-medium text-md">
              <span className="price-new">${product.price}</span>
              {product.oldPrice && (
                <span className="price-old">${product.oldPrice}</span>
              )}
            </p>
            <p className="desc text-sm text-main text-line-clamp-2">
              {product.description}
            </p>
            {product.colors && (
              <ul className="list-color-product">
                {product.colors.map((color, index) => (
                  <li
                    key={index}
                    className={`list-color-item color-swatch hover-tooltip ${
                      index === 0 ? 'active' : ''
                    } ${color.line ? 'line' : ''}`}
                  >
                    <span className="tooltip color-filter">{color.name}</span>
                    <span className={`swatch-value bg-${color.class}`} />
                    <img
                      className="lazyload"
                      data-src={color.image}
                      src={color.image}
                      alt={product.name}
                    />
                  </li>
                ))}
              </ul>
            )}
            {product.sizes && (
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
    );
  }

  // Grid layout
  return (
    <div
      className={`card-product grid style-1 ${
        product.sizes ? 'card-product-size' : ''
      } ${
        product.availability === 'Out of stock' ? 'out-of-stock' : ''
      }`}
      data-availability={product.availability}
      data-brand={product.brand}
    >
      <div className="card-product-wrapper">
        <a href={product.link} className="product-img">
          <img
            className="img-product lazyload"
            data-src={product.image}
            src={product.image}
            alt={product.name}
          />
          <img
            className="img-hover lazyload"
            data-src={product.hoverImage}
            src={product.hoverImage}
            alt={product.name}
          />
        </a>
        {product.onSale && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">{product.discount}% Off</span>
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
        {product.sizes && (
          <ul className="size-box">
            {product.sizes.map((size, index) => (
              <li key={index} className="size-item text-xs text-white">
                {size}
              </li>
            ))}
          </ul>
        )}
        {product.countdown && (
          <div className="countdown-box">
            <div
              className="js-countdown"
              data-timer={product.countdown}
              data-labels="D  :,H  :,M  :,S"
            />
          </div>
        )}
      </div>
      <div className="card-product-info">
        <a href={product.link} className="name-product link fw-medium text-md">
          {product.name}
        </a>
        <p className="price-wrap fw-medium">
          <span className="price-new">${product.price}</span>
          {product.oldPrice && (
            <span className="price-old">${product.oldPrice}</span>
          )}
        </p>
        {product.colors && (
          <ul className="list-color-product">
            {product.colors.map((color, index) => (
              <li
                key={index}
                className={`list-color-item color-swatch hover-tooltip tooltip-bot ${
                  index === 0 ? 'active' : ''
                } ${color.line ? 'line' : ''}`}
              >
                <span className="tooltip color-filter">{color.name}</span>
                <span className={`swatch-value bg-${color.class}`} />
                <img
                  className="lazyload"
                  data-src={color.image}
                  src={color.image}
                  alt={product.name}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductCard;