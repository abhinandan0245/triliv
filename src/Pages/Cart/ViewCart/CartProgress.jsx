// src/components/cart/CartProgress.jsx
import React from 'react';

const CartProgress = () => {
  return (
    <div className="flat-spacing-24">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-sm-8">
            <div className="tf-cart-head text-center">
              <p className="text-xl-3 title text-dark-4">
                Spend <span className="fw-medium">$100</span> more to get
                <span className="fw-medium"> Free Shipping</span>
              </p>
              <div className="progress-sold tf-progress-ship">
                <div 
                  className="value" 
                  style={{ width: '60%' }} 
                  data-progress={60}
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
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

export default CartProgress;