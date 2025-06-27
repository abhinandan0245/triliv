import React, { useState } from 'react';

const QuickAddModal = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('White');

  const handleQuantityChange = (type) => {
    if (type === 'minus' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'plus') {
      setQuantity(quantity + 1);
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="modal fade modalCentered popup-quickadd" id="quickAdd">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span 
            className="icon-close icon-close-popup" 
            data-bs-dismiss="modal" 
            onClick={() => document.getElementById('quickAdd').classList.remove('show')}
          />
          <div className="main-product-quickadd card-product">
            <div className="item-product-info">
              <div className="product-img">
                <img 
                  className="img-product lazyload" 
                  data-src="images/product-1.jpg" 
                  src="images/product-1.jpg" 
                  alt="image-product" 
                />
              </div>
              <div className="content-box">
                <a href="product-detail.php" className="name-product link text-lg">Bird of Paradise</a>
                <div className="price-show-badge">
                  <div className="price-wrap">
                    <span className="price-new">$130.00</span>
                    <span className="price-old">$150.00</span>
                  </div>
                  <span className="on-sale-item">20% Off</span>
                </div>
              </div>
            </div>
            <div className="item-product-variant">
              <div className="quickadd-variant-color">
                <div className="variant-label text-md">
                  Color: <span className="variant-value">{selectedColor}</span>
                </div>
                <ul className="list-color-product">
                  <li 
                    className={`list-color-item color-swatch hover-tooltip tooltip-bot line ${selectedColor === 'White' ? 'active' : ''}`}
                    onClick={() => handleColorSelect('White')}
                  >
                    <span className="tooltip color-label">White</span>
                    <span className="swatch-value bg-white" />
                    <img 
                      className="lazyload" 
                      data-src="images/product-1.jpg" 
                      src="images/product-1.jpg" 
                      alt="image-product" 
                    />
                  </li>
                  <li 
                    className={`list-color-item color-swatch hover-tooltip tooltip-bot ${selectedColor === 'Brown' ? 'active' : ''}`}
                    onClick={() => handleColorSelect('Brown')}
                  >
                    <span className="tooltip color-label">Brown</span>
                    <span className="swatch-value bg-brown-9" />
                    <img 
                      className="lazyload" 
                      data-src="images/product-2.jpg" 
                      src="images/product-2.jpg" 
                      alt="image-product" 
                    />
                  </li>
                  <li 
                    className={`list-color-item color-swatch hover-tooltip tooltip-bot ${selectedColor === 'Black' ? 'active' : ''}`}
                    onClick={() => handleColorSelect('Black')}
                  >
                    <span className="tooltip color-label">Black</span>
                    <span className="swatch-value bg-dark" />
                    <img 
                      className="lazyload" 
                      data-src="images/product-3.jpg" 
                      src="images/product-3.jpg" 
                      alt="image-product" 
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="item-product-quantity">
              <div className="label text-md">Quantity</div>
              <div className="wg-quantity">
                <button 
                  className="btn-quantity minus-btn" 
                  onClick={() => handleQuantityChange('minus')}
                >
                  -
                </button>
                <input 
                  className="quantity-product font-4" 
                  type="text" 
                  name="number" 
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value) && value > 0) {
                      setQuantity(value);
                    }
                  }}
                />
                <button 
                  className="btn-quantity plus-btn" 
                  onClick={() => handleQuantityChange('plus')}
                >
                  +
                </button>
              </div>
            </div>
            <div className="item-product-group-btn">
              <a 
                href="#shoppingCart" 
                data-bs-toggle="offcanvas" 
                className="tf-btn animate-btn atc"
                onClick={(e) => {
                  e.preventDefault();
                  // Add to cart logic here
                  console.log(`Added ${quantity} ${selectedColor} items to cart`);
                }}
              >
                Add to cart
              </a>
              <a href="wish-list.php" className="box-icon">
                <i className="icon icon-heart" />
              </a>
              <a href="javascript:void(0);" className="box-icon btn-compare">
                <i className="icon icon-compare" />
              </a>
              <a 
                href="checkout.php" 
                className="tf-btn btn-primary animate-btn w-100"
                onClick={(e) => {
                  // Buy now logic here
                  console.log(`Proceeding to checkout with ${quantity} ${selectedColor} items`);
                }}
              >
                Buy It Now
              </a>
            </div>
            <a href="checkout.php" className="tf-btn btn-line-dark payment-link">
              More payment options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAddModal;