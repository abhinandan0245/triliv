import React, { useState } from 'react';

const QuickAddModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product.colors[0].name);

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
      <div className="modal fade modalCentered popup-quickadd show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span 
            className="icon-close icon-close-popup" 
            onClick={onClose}
          />
          <div className="main-product-quickadd card-product">
            <div className="item-product-info">
              <div className="product-img">
                <img 
                  className="img-product lazyload" 
                  src={product.images.main} 
                  alt={product.name} 
                />
              </div>
              <div className="content-box">
                <a href="productdetail" className="name-product link text-lg">
                  {product.name}
                </a>
                <div className="price-show-badge">
                  <div className="price-wrap">
                    <span className="price-new">{product.priceNew}</span>
                    {product.priceOld && (
                      <span className="price-old">{product.priceOld}</span>
                    )}
                  </div>
                  {product.discount && (
                    <span className="on-sale-item">{product.discount}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="item-product-variant">
              <div className="quickadd-variant-color">
                <div className="variant-label text-md">
                  Color: <span className="variant-value">{selectedColor}</span>
                </div>
                <ul className="list-color-product">
                  {product.colors.map((color, index) => (
                    <li 
                      key={index}
                      className={`list-color-item color-swatch hover-tooltip tooltip-bot ${selectedColor === color.name ? 'active' : ''}`}
                      onClick={() => handleColorSelect(color.name)}
                    >
                      <span className="tooltip color-label">{color.name}</span>
                      <span className={`swatch-value ${color.value}`} />
                      <img 
                        className="lazyload" 
                        src={color.image} 
                        alt={color.name} 
                      />
                    </li>
                  ))}
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
              <a href="wish-list" className="box-icon">
                <i className="icon icon-heart" />
              </a>
              <a href="javascript:void(0);" className="box-icon btn-compare">
                <i className="icon icon-compare" />
              </a>
              <a 
                href="/checkout" 
                className="tf-btn btn-primary animate-btn w-100"
                onClick={(e) => {
                  // Buy now logic here
                  console.log(`Proceeding to checkout with ${quantity} ${selectedColor} items`);
                }}
              >
                Buy It Now
              </a>
            </div>
            <a href="/checkout" className="tf-btn btn-line-dark payment-link">
              More payment options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAddModal;