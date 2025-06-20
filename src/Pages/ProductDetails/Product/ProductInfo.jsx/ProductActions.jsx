import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductActions = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="tf-product-total-quantity">
      <div className="group-btn">
        <div className="wg-quantity">
          <button className="btn-quantity btn-decrease" onClick={decreaseQuantity}>-</button>
          <input 
            className="quantity-product" 
            type="text" 
            name="number" 
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button className="btn-quantity btn-increase" onClick={increaseQuantity}>+</button>
        </div>
        <button 
          className="tf-btn animate-btn btn-add-to-cart"
          onClick={() => onAddToCart(quantity)}
        >
          Add to cart
        </button>
      </div>
      <a href="checkout.php" className="tf-btn btn-primary w-100 animate-btn">Buy it now</a>
      <a href="checkout.php" className="more-choose-payment link">More payment options</a>
    </div>
  );
};

ProductActions.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

export default ProductActions;