import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="card-product style-2">
      <div className="card-product-wrapper">
        <a href={`product-detail.php?id=${product.id}`} className="product-img">
          <img 
            className="img-product lazyload" 
            data-src={product.images.main} 
            src={product.images.main} 
            alt={product.name} 
          />
          <img 
            className="img-hover lazyload" 
            data-src={product.images.hover} 
            src={product.images.hover} 
            alt={product.name} 
          />
        </a>
        
        <ul className="list-product-btn">
          <li>
            <a href="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
              <span className="icon icon-cart2" />
              <span className="tooltip">Add to Cart</span>
            </a>
          </li>
          <li className="wishlist">
            <a href="javascript:void(0);" className="box-icon hover-tooltip">
              <span className="icon icon-heart2" />
              <span className="tooltip">Add to Wishlist</span>
            </a>
          </li>
          <li>
            <a href="#quickView" data-bs-toggle="modal" className="box-icon quickview hover-tooltip">
              <span className="icon icon-view" />
              <span className="tooltip">Quick View</span>
            </a>
          </li>
          <li className="compare">
            <a href="#compare" data-bs-toggle="modal" className="box-icon hover-tooltip">
              <span className="icon icon-compare" />
              <span className="tooltip">Add to Compare</span>
            </a>
          </li>
        </ul>
        
        {product.sizes && (
          <ul className="size-box">
            {product.sizes.map(size => (
              <li key={size} className="size-item text-xs text-white">{size}</li>
            ))}
          </ul>
        )}
        
        {product.tags && (
          <div className="on-sale-wrap">
            {product.tags.map(tag => (
              <span key={tag} className={`on-sale-item ${tag.toLowerCase().replace(' ', '-')}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="card-product-info">
        <a href={`product-detail.php?id=${product.id}`} className="name-product link fw-medium text-md">
          {product.name}
        </a>
        <p className="price-wrap fw-medium">
          <span className="price-new">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="price-old">${product.oldPrice.toFixed(2)}</span>
          )}
        </p>
        
        {product.colors && (
          <ul className="list-color-product">
            {product.colors.map((color, index) => (
              <li 
                key={index} 
                className={`list-color-item color-swatch hover-tooltip tooltip-bot ${index === 0 ? 'active' : ''}`}
              >
                <span className="tooltip color-filter">{color.value}</span>
                <span className={`swatch-value bg-${color.class}`} />
                <img className="lazyload" data-src={color.image} src={color.image} alt={product.name} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    discount: PropTypes.number,
    images: PropTypes.shape({
      main: PropTypes.string.isRequired,
      hover: PropTypes.string.isRequired
    }).isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        class: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
    ),
    sizes: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default ProductCard;