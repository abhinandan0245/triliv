// src/components/cart/ShippingEstimate.jsx
import React, { useState } from 'react';

const ShippingEstimate = () => {
  const [formData, setFormData] = useState({
    country: '',
    state: '',
    code: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <form className="cart-box shipping-cart-box">
      <div className="text-lg title fw-medium">Shipping estimates</div>
      <fieldset className="field">
        <label htmlFor="country" className="text-sm">Country</label>
        <input 
          type="text" 
          id="country" 
          placeholder="United State" 
          value={formData.country}
          onChange={handleChange}
          aria-required="true"
        />
      </fieldset>
      <fieldset className="field">
        <label htmlFor="state" className="text-sm">State/Province</label>
        <input 
          type="text" 
          id="state" 
          placeholder="State/Province" 
          value={formData.state}
          onChange={handleChange}
          aria-required="true"
        />
      </fieldset>
      <fieldset className="field">
        <label htmlFor="code" className="text-sm">Zipcode</label>
        <input 
          type="text" 
          id="code" 
          placeholder="41000" 
          value={formData.code}
          onChange={handleChange}
          aria-required="true"
        />
      </fieldset>
      <button 
        type="button" 
        className="tf-btn btn-dark2 animate-btn w-100"
        aria-label="Calculate shipping estimate"
      >
        Estimate
      </button>
    </form>
  );
};

export default ShippingEstimate;