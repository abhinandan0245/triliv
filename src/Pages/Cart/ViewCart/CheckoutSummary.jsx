// src/components/cart/CheckoutSummary.jsx
import React, { useState } from 'react';

const CheckoutSummary = ({ total = 130.00 }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <form action="checkout.php" className="cart-box checkout-cart-box">
      <div className="cart-head">
        <div className="total-discount text-xl fw-medium">
          <span>Total:</span>
          <span className="total">${total.toFixed(2)} USD</span>
        </div>
        <p className="text-sm text-dark-4">Taxes and shipping calculated at checkout</p>
      </div>
      <div className="check-agree">
        <input 
          type="checkbox" 
          className="tf-check" 
          id="check-agree" 
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          aria-required="true"
        />
        <label htmlFor="check-agree" className="label text-dark-4">
          I agree with <a href="term-and-condition.php" className="text-dark-4 fw-medium text-underline link">term and conditions</a>
        </label>
      </div>
      <div className="checkout-btn">
        <button 
          type="submit" 
          className="tf-btn btn-dark2 animate-btn w-100"
          disabled={!agreed}
          aria-disabled={!agreed}
        >
          Checkout
        </button>
      </div>
      <div className="cart-imgtrust">
        <p className="text-center text-sm text-dark-1">We accept</p>
        <div className="cart-list-social">
          {['Visa', 'DinersClub', 'Mastercard', 'Stripe'].map((card) => (
            <div key={card} className="payment-card">
              <img src={`images/${card}.png`} alt={card} />
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default CheckoutSummary;