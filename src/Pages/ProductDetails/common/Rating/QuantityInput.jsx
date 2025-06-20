import React from 'react';
import PropTypes from 'prop-types';

const QuantityInput = ({ value, min = 1, max = 99, onChange }) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="wg-quantity">
      <button 
        type="button" 
        className="btn-quantity btn-decrease" 
        onClick={handleDecrease}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <input 
        className="quantity-product" 
        type="text" 
        name="number" 
        value={value}
        onChange={handleChange}
        aria-label="Quantity"
      />
      <button 
        type="button" 
        className="btn-quantity btn-increase" 
        onClick={handleIncrease}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default QuantityInput;