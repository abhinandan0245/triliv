import React from 'react';

const ProductActions = ({ onAddToCart, onQuickView, onCompare }) => {
  return (
    <ul className="list-product-btn">
      <li>
        <a 
          href="#shoppingCart" 
          data-bs-toggle="offcanvas" 
          className="box-icon hover-tooltip"
          onClick={onAddToCart}
          aria-label="Add to cart"
        >
          <span className="icon icon-cart2" />
          <span className="tooltip">Add to Cart</span>
        </a>
      </li>
      <li>
        <a 
          href="#quickView" 
          data-bs-toggle="modal" 
          className="box-icon hover-tooltip quickview"
          onClick={onQuickView}
          aria-label="Quick view"
        >
          <span className="icon icon-view" />
          <span className="tooltip">Quick View</span>
        </a>
      </li>
      <li>
        <a 
          href="#compare" 
          data-bs-toggle="modal" 
          aria-controls="compare" 
          className="box-icon hover-tooltip compare"
          onClick={onCompare}
          aria-label="Add to compare"
        >
          <span className="icon icon-compare" />
          <span className="tooltip">Add to Compare</span>
        </a>
      </li>
    </ul>
  );
};

export default ProductActions;