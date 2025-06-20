import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card-product">
      <div className="card-product-wrapper asp-ratio-0">
        <Link to={`/products/${product.id}`} className="product-img">
          <img className="img-product" src={product.images[0]} alt={product.name} />
          <img className="img-hover" src={product.images[1] || product.images[0]} alt={product.name} />
        </Link>
        <ul className="list-product-btn">
          <li>
            <a href="#quickAdd" data-bs-toggle="modal" className="hover-tooltip tooltip-left box-icon">
              <span className="icon icon-cart2"></span>
              <span className="tooltip">Quick Add</span>
            </a>
          </li>
          <li className="wishlist">
            <button className="hover-tooltip tooltip-left box-icon">
              <span className="icon icon-heart2"></span>
              <span className="tooltip">Add to Wishlist</span>
            </button>
          </li>
          <li>
            <a href="#quickView" data-bs-toggle="modal" className="hover-tooltip tooltip-left box-icon quickview">
              <span className="icon icon-view"></span>
              <span className="tooltip">Quick View</span>
            </a>
          </li>
          <li className="compare">
            <a href="#compare" data-bs-toggle="modal" aria-controls="compare" className="hover-tooltip tooltip-left box-icon">
              <span className="icon icon-compare"></span>
              <span className="tooltip">Add to Compare</span>
            </a>
          </li>
        </ul>
        {product.discount && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">{product.discount}% Off</span>
          </div>
        )}
      </div>
      <div className="card-product-info">
        <Link to={`/products/${product.id}`} className="name-product link fw-medium text-md">{product.name}</Link>
        <p className="price-wrap fw-medium">
          <span className={`price-new text-xl ${product.originalPrice ? 'text-primary' : ''}`}>
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="price-old">${product.originalPrice.toFixed(2)}</span>
          )}
        </p>
        <ul className="list-color-product style-2">
          {product.colors.map((color, index) => (
            <li 
              key={index} 
              className={`list-color-item hover-tooltip tooltip-bot ${index === 0 ? 'active' : ''} color-swatch`}
            >
              <span className="tooltip color-filter">{color.name}</span>
              <span className="swatch-value" style={{ backgroundColor: color.value }}></span>
              <img src={color.image} alt={product.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;