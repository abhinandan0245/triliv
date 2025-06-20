// src/components/cart/CartHeader.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CartHeader = ({ currentAmount = 40, freeShippingThreshold = 100 }) => {
  const amountNeeded = Math.max(0, freeShippingThreshold - currentAmount);
  const progressPercentage = Math.min(100, (currentAmount / freeShippingThreshold) * 100);

  return (
    <div className="flat-spacing-24">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-sm-8">
            <div className="tf-cart-head text-center">
              {currentAmount < freeShippingThreshold ? (
                <p className="text-xl-3 title text-dark-4">
                  Spend <span className="fw-medium">${amountNeeded.toFixed(2)}</span> more to get
                  <span className="fw-medium"> Free Shipping</span>
                </p>
              ) : (
                <p className="text-xl-3 title text-dark-4">
                  <span className="fw-medium">Congratulations!</span> You've qualified for Free Shipping
                </p>
              )}
              
              <div 
                className="progress-sold tf-progress-ship" 
                role="progressbar" 
                aria-valuenow={progressPercentage} 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                <div 
                  className="value" 
                  style={{ width: `${progressPercentage}%` }} 
                  data-progress={progressPercentage}
                >
                  <i className="icon icon-car" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartHeader.propTypes = {
  currentAmount: PropTypes.number,
  freeShippingThreshold: PropTypes.number
};

export default CartHeader;