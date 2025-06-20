import React from 'react';

const TrustSeal = () => {
  const paymentMethods = [
    'Visa', 'DinersClub', 'Mastercard', 'Stripe', 
    'PayPal', 'GooglePay', 'ApplePay'
  ];

  return (
    <div className="tf-product-trust-seal text-center">
      <p className="text-md text-dark-2 text-seal fw-medium">
        Guarantee Safe Checkout:
      </p>
      <ul className="list-card">
        {paymentMethods.map(method => (
          <li key={method} className="card-item">
            <img 
              src={`images/${method}.png`} 
              alt={method} 
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrustSeal;