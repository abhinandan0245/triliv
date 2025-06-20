// src/components/common/QuantityInput.jsx
import React from 'react';

const QuantityInput = ({ value, onIncrease, onDecrease, onChange }) => {
  return (
    <div className="wg-quantity">
      <button 
        type="button" 
        className="btn-quantity btn-decrease" 
        onClick={onDecrease}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <input 
        className="quantity-product" 
        type="text" 
        name="number" 
        value={value} 
        onChange={onChange}
        aria-label="Product quantity"
      />
      <button 
        type="button" 
        className="btn-quantity btn-increase" 
        onClick={onIncrease}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;