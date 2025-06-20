import React from 'react';
import ProductImage from './ProductImage';
import ProductActions from './ProductActions';
import ProductInfo from './ProductInfo';

const ProductCard = ({ 
  product, 
  onRemove, 
  isOutOfStock,
  hasCountdown,
  className = '' 
}) => {
  return (
    <div className={`card-product style-wishlist style-3 ${isOutOfStock ? 'out-of-stock' : ''} ${className}`}>
      <i className="icon icon-close remove" onClick={onRemove} />
      <div className="card-product-wrapper">
        <ProductImage 
          mainImage={product.mainImage} 
          hoverImage={product.hoverImage} 
          alt={product.name}
        />
        {!isOutOfStock && (
          <ProductActions 
            onAddToCart={product.onAddToCart}
            onQuickView={product.onQuickView}
            onCompare={product.onCompare}
          />
        )}
        {hasCountdown && (
          <div className="countdown-box">
            <div className="js-countdown" data-timer={1007500} data-labels="D  :,H  :,M  :,S" />
          </div>
        )}
      </div>
      <ProductInfo 
        name={product.name}
        priceNew={product.priceNew}
        priceOld={product.priceOld}
        colors={product.colors}
        productUrl={product.url}
      />
    </div>
  );
};

export default ProductCard;