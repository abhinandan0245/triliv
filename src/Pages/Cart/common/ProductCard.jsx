// src/components/common/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card-product style-2">
      <div className="card-product-wrapper">
        <a href={`product-detail.php?id=${product.id}`} className="product-img">
          <img 
            className="img-product lazyload" 
            src={product.images[0]} 
            alt={product.name} 
            loading="lazy"
          />
          <img 
            className="img-hover lazyload" 
            src={product.images[1] || product.images[0]} 
            alt={product.name} 
            loading="lazy"
          />
        </a>
        <ul className="list-product-btn">
          <li>
            <a href="view-cart.php" className="hover-tooltip box-icon" aria-label="Add to cart">
              <span className="icon icon-cart2" aria-hidden="true" />
              <span className="tooltip">Add to Cart</span>
            </a>
          </li>
          <li className="wishlist">
            <button className="hover-tooltip box-icon" aria-label="Add to wishlist">
              <span className="icon icon-heart2" aria-hidden="true" />
              <span className="tooltip">Add to Wishlist</span>
            </button>
          </li>
          <li>
            <button className="hover-tooltip box-icon quickview" aria-label="Quick view">
              <span className="icon icon-view" aria-hidden="true" />
              <span className="tooltip">Quick View</span>
            </button>
          </li>
          <li className="compare">
            <button className="hover-tooltip box-icon" aria-label="Add to compare">
              <span className="icon icon-compare" aria-hidden="true" />
              <span className="tooltip">Add to Compare</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="card-product-info">
        <a href={`product-detail.php?id=${product.id}`} className="name-product link fw-medium text-md">
          {product.name}
        </a>
        <p className="price-wrap fw-medium">
          <span className="price-new">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="price-old">${product.originalPrice.toFixed(2)}</span>
          )}
        </p>
        <ul className="list-color-product">
          {product.colors.map((color, index) => (
            <li 
              key={index} 
              className={`list-color-item hover-tooltip tooltip-bot color-swatch ${index === 0 ? 'active' : ''} ${color.name === 'White' ? 'line' : ''}`}
            >
              <span className="tooltip color-filter">{color.name}</span>
              <span className="swatch-value" style={{ backgroundColor: color.value }} />
              <img 
                className="lazyload" 
                src={color.image} 
                alt={`${product.name} in ${color.name}`} 
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;