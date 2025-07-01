import React, { useState, useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const QuickViewModal = ({ product, onClose }) => {
  const [currentColor, setCurrentColor] = useState('white');
  const [currentSize, setCurrentSize] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  // Initialize Swiper
  useEffect(() => {
    if (swiperRef.current && !swiperInstance.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.single-slide-next',
          prevEl: '.single-slide-prev',
        },
      });
    }

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
        swiperInstance.current = null;
      }
    };
  }, []);

  // Update Swiper when color changes
  useEffect(() => {
    if (swiperInstance.current && product) {
      const slideIndex = product.colors.findIndex(
        color => color.name.toLowerCase() === currentColor.toLowerCase()
      );
      if (slideIndex !== -1) {
        swiperInstance.current.slideTo(slideIndex);
      }
    }
  }, [currentColor, product]);

  const handleColorChange = (color) => {
    setCurrentColor(color);
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

  if (!product) return null;

  return (
    <div className="modal fade modalCentered modal-quick-view show modal-backdrop fade show" style={{ display: 'block', paddingRight: '17px' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span 
            className="icon-close icon-close-popup" 
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          />
          <div className="tf-product-media-wrap">
            <div dir="ltr" className="swiper tf-single-slide" ref={swiperRef}>
              <div className="swiper-wrapper">
                {product.colors.map((color, index) => (
                  <div 
                    className="swiper-slide" 
                    key={index}
                    data-color={color.name.toLowerCase()}
                  >
                    <div className="item">
                      <img 
                        className="lazyload" 
                        data-src={color.image} 
                        src={color.image} 
                        alt="" 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-button-prev nav-swiper arrow-1 nav-prev-cls single-slide-prev" />
              <div className="swiper-button-next nav-swiper arrow-1 nav-next-cls single-slide-next" />
            </div>
          </div>
          <div className="tf-product-info-wrap">
            <div className="tf-product-info-inner">
              <div className="tf-product-heading">
                <h6 className="product-name"><a href="productdetail" className="link">{product.name}</a></h6>
                <div className="product-price">
                  <h6 className="price-new price-on-sale">{product.priceNew}</h6>
                  {product.priceOld && <h6 className="price-old">{product.priceOld}</h6>}
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
                    {product.colors.map((color, index) => (
                      <div 
                        key={index}
                        className={`hover-tooltip color-btn ${currentColor === color.name.toLowerCase() ? 'active' : ''}`}
                        data-color={color.name.toLowerCase()}
                        onClick={() => handleColorChange(color.name.toLowerCase())}
                      >
                        <span className={`check-color ${color.value}`} />
                        <span className="tooltip">{color.name}</span>
                      </div>
                    ))}
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
                <a href="checkout" className="tf-btn w-100 animate-btn paypal btn-primary">Buy It Now</a>
                <a href="checkout" className="more-choose-payment link">More payment options</a>
              </div>
              <a href="productdetail" className="view-details link">
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