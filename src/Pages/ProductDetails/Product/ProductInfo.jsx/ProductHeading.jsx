import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../common/Rating/StarRating';
import { formatPrice } from '../../utils/helpers';

const ProductHeading = ({ 
  brand, 
  name, 
  rating, 
  reviewsCount, 
  price, 
  salePrice, 
  discount,
  stockStatus,
  soldCount,
  stockQuantity
}) => {
  const isOnSale = salePrice < price;
  const stockPercentage = Math.min(100, Math.round((stockQuantity / (stockQuantity + soldCount)) * 100));

  return (
    <div className="product-heading">
      <span className="brand-name">{brand}</span>
      <h1 className="product-title">{name}</h1>
      
      <div className="product-rating">
        <StarRating rating={rating} />
        <span className="reviews-count">({reviewsCount} reviews)</span>
      </div>
      
      <div className={`product-pricing ${isOnSale ? 'on-sale' : ''}`}>
        {isOnSale && (
          <>
            <span className="original-price">{formatPrice(price)}</span>
            <span className="discount-badge">{discount}% OFF</span>
          </>
        )}
        <span className="current-price">{formatPrice(salePrice)}</span>
      </div>
      
      <div className="product-availability">
        <span className={`stock-status ${stockStatus}`}>
          {stockStatus === 'in_stock' ? 'In Stock' : 'Out of Stock'}
        </span>
        {stockStatus === 'in_stock' && (
          <>
            <span className="sold-count">{soldCount} sold in last 24 hours</span>
            <div className="stock-progress">
              <div 
                className="progress-bar" 
                style={{ width: `${stockPercentage}%` }}
                aria-valuenow={stockPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="stock-warning">
              <span>HURRY! Only {stockQuantity} left!</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ProductHeading.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number.isRequired,
  discount: PropTypes.number,
  stockStatus: PropTypes.oneOf(['in_stock', 'out_of_stock']).isRequired,
  soldCount: PropTypes.number.isRequired,
  stockQuantity: PropTypes.number.isRequired
};

export default ProductHeading;