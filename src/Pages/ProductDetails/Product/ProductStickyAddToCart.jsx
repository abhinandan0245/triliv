import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductStickyAddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const variants = [
    { color: 'Black', size: 'Small', price: product.salePrice },
    { color: 'Black', size: 'Medium', price: product.salePrice },
    // More variants...
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="tf-sticky-btn-atc">
      <div className="container">
        <div className="tf-height-observer w-100 d-flex align-items-center">
          <div className="tf-sticky-atc-product d-flex align-items-center">
            <div className="tf-sticky-atc-img">
              <img 
                className="lazyload" 
                data-src="images/thumb-black2.jpg" 
                src="images/thumb-black2.jpg" 
                alt={product.name} 
              />
            </div>
            <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">{product.name}</div>
          </div>
          
          <div className="tf-sticky-atc-infos">
            <form>
              <div className="tf-sticky-atc-variant-price text-center tf-select">
                <select 
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(Number(e.target.value))}
                >
                  {variants.map((variant, index) => (
                    <option 
                      key={index} 
                      value={index}
                      selected={index === selectedVariant}
                    >
                      {variant.color} / {variant.size} - ${variant.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="tf-sticky-atc-btns">
                <div className="tf-product-info-quantity">
                  <div className="wg-quantity">
                    <button 
                      type="button" 
                      className="btn-quantity minus-btn" 
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <input 
                      className="quantity-product font-4" 
                      type="text" 
                      name="number" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <button 
                      type="button" 
                      className="btn-quantity plus-btn" 
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                <a 
                  href="#shoppingCart" 
                  data-bs-toggle="offcanvas" 
                  className="tf-btn animate-btn d-inline-flex justify-content-center"
                >
                  Add to cart
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductStickyAddToCart.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    salePrice: PropTypes.number.isRequired
  }).isRequired
};

export default ProductStickyAddToCart;