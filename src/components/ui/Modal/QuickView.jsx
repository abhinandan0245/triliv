import React, { useState, useRef, useEffect } from 'react';

const QuickViewModal = () => {
  const [currentColor, setCurrentColor] = useState('white');
  const [currentSize, setCurrentSize] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const swiperRef = useRef(null);

  // This would be replaced with actual Swiper initialization in a real implementation
  useEffect(() => {
    // Initialize Swiper here if needed
    // This is just a placeholder - you'll need proper Swiper initialization
    if (swiperRef.current) {
      console.log('Swiper would be initialized here');
    }
  }, []);

  const handleColorChange = (color) => {
    setCurrentColor(color);
    // Here you would also update the Swiper slide to show the correct image
  };

  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="modal fade modalCentered modal-quick-view" id="quickView">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span className="icon-close icon-close-popup" data-bs-dismiss="modal" />
          <div className="tf-product-media-wrap">
            <div dir="ltr" className="swiper tf-single-slide" ref={swiperRef}>
              <div className="swiper-wrapper">
                <div className="swiper-slide" data-color="white">
                  <div className="item">
                    <img className="lazyload" data-src="images/product-1.jpg" src="images/product-1.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-slide" data-color="brown" data-size="medium">
                  <div className="item">
                    <img className="lazyload" data-src="images/product-2.jpg" src="images/product-2.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-slide" data-color="black">
                  <div className="item">
                    <img className="lazyload" data-src="images/product-3.jpg" src="images/product-3.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-button-prev nav-swiper arrow-1 nav-prev-cls single-slide-prev" />
              <div className="swiper-button-next nav-swiper arrow-1 nav-next-cls single-slide-next" />
            </div>
          </div>
          <div className="tf-product-info-wrap">
            <div className="tf-product-info-inner">
              <div className="tf-product-heading">
                <h6 className="product-name"><a href="product-detail.php" className="link">Bird of Paradise</a></h6>
                <div className="product-price">
                  <h6 className="price-new price-on-sale">$130.00</h6>
                  <h6 className="price-old">$150.00</h6>
                </div>
                <p className="text">
                  A lush, vibrant indoor plant with broad, glossy leaves that add a touch of nature to any space. 
                  Thrives in bright, indirect light and requires minimal maintenance.
                </p>
              </div>
              <div className="tf-product-variant">
                <div className="variant-picker-item variant-color">
                  <div className="variant-picker-label">
                    Color: <span className="variant-picker-label-value value-currentColor">
                      {currentColor.charAt(0).toUpperCase() + currentColor.slice(1)}
                    </span>
                  </div>
                  <div className="variant-picker-values">
                    <div 
                      className={`hover-tooltip color-btn ${currentColor === 'white' ? 'active' : ''}`} 
                      data-color="white"
                      onClick={() => handleColorChange('white')}
                    >
                      <span className="check-color bg-white" />
                      <span className="tooltip">White</span>
                    </div>
                    <div 
                      className={`hover-tooltip color-btn ${currentColor === 'brown' ? 'active' : ''}`} 
                      data-color="brown"
                      onClick={() => handleColorChange('brown')}
                    >
                      <span className="check-color bg-brown-9" />
                      <span className="tooltip">Brown</span>
                    </div>
                    <div 
                      className={`hover-tooltip color-btn ${currentColor === 'black' ? 'active' : ''}`} 
                      data-color="black"
                      onClick={() => handleColorChange('black')}
                    >
                      <span className="check-color bg-dark" />
                      <span className="tooltip">Black</span>
                    </div>
                  </div>
                </div>
                <div className="variant-picker-item variant-size">
                  <div className="variant-picker-label">
                    <div>
                      Size: <span className="variant-picker-label-value value-currentSize">
                        {currentSize.charAt(0).toUpperCase() + currentSize.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="variant-picker-values">
                    <span 
                      className={`size-btn ${currentSize === 'small' ? 'active' : ''}`} 
                      data-size="small"
                      onClick={() => handleSizeChange('small')}
                    >
                      S
                    </span>
                    <span 
                      className={`size-btn ${currentSize === 'medium' ? 'active' : ''}`} 
                      data-size="medium"
                      onClick={() => handleSizeChange('medium')}
                    >
                      M
                    </span>
                    <span 
                      className={`size-btn ${currentSize === 'large' ? 'active' : ''}`} 
                      data-size="large"
                      onClick={() => handleSizeChange('large')}
                    >
                      L
                    </span>
                  </div>
                </div>
              </div>
              <div className="tf-product-total-quantity">
                <div className="group-btn">
                  <div className="wg-quantity">
                    <button className="btn-quantity minus-btn" onClick={decreaseQuantity}>-</button>
                    <input 
                      className="quantity-product font-4" 
                      type="text" 
                      name="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    />
                    <button className="btn-quantity plus-btn" onClick={increaseQuantity}>+</button>
                  </div>
                  <a href="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn hover-primary">
                    Add to cart
                  </a>
                </div>
                <a href="checkout.php" className="tf-btn w-100 animate-btn paypal btn-primary">Buy It Now</a>
                <a href="checkout.php" className="more-choose-payment link">More payment options</a>
              </div>
              <a href="product-detail.php" className="view-details link">
                View full details <i className="icon icon-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;