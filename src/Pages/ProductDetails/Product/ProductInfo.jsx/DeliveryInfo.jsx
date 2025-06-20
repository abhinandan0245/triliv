import React from 'react';

const DeliveryInfo = () => {
  return (
    <div className="tf-product-delivery-return">
      <div className="product-delivery">
        <div className="icon icon-car2" />
        <p className="text-md">
          Estimated delivery time: <span className="fw-medium">3-5 days international</span>
        </p>
      </div>
      <div className="product-delivery">
        <div className="icon icon-shipping3" />
        <p className="text-md">
          Free shipping on <span className="fw-medium">all orders over $150</span>
        </p>
      </div>
    </div>
  );
};

export default DeliveryInfo;