import React, { useState, useEffect } from 'react';

const MainDetail = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [bundleItems, setBundleItems] = useState([
    { id: 1, name: 'Single Breasted Blazer', price: 60, oldPrice: 80, selected: true, variant: 'Black / S' },
    { id: 2, name: 'Short Sleeve Sweat', price: 75, oldPrice: null, selected: false, variant: 'White / S' },
    { id: 3, name: 'One Shoulder Velvet T-Shirt', price: 85, oldPrice: 100, selected: false, variant: 'Black / S' }
  ]);

  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Handle quantity changes
  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Handle bundle item selection
  const handleBundleSelect = (id) => {
    setBundleItems(prev => prev.map(item => 
      item.id === id ? {...item, selected: !item.selected} : item
    ));
  };

  // Handle bundle variant change
  const handleBundleVariantChange = (id, value) => {
    setBundleItems(prev => prev.map(item => 
      item.id === id ? {...item, variant: value} : item
    ));
  };

  // Calculate total price for bundle
  const calculateBundleTotal = () => {
    return bundleItems.reduce((total, item) => {
      return item.selected ? total + item.price : total;
    }, 0);
  };

  // Calculate old total price for bundle
  const calculateBundleOldTotal = () => {
    return bundleItems.reduce((total, item) => {
      return item.selected && item.oldPrice ? total + item.oldPrice : total;
    }, 0);
  };

  // Initialize Swiper and other JS functionality
  useEffect(() => {
    // This is where you would initialize any external JS libraries
    // For example:
    // new Swiper('.tf-product-media-thumbs', { ...options });
    // new Swiper('.tf-product-media-main', { ...options });
    
    // Note: In a real implementation, you would need to:
    // 1. Import Swiper and other required libraries
    // 2. Initialize them with proper configuration
    // 3. Clean up on component unmount
    
    console.log('Component mounted - initialize JS plugins here');
    
    return () => {
      // Clean up any event listeners or instances
    };
  }, []);

  return (
    <div>
      {/* Product Main */}
      <section className="flat-single-product">
        <div className="tf-main-product section-image-zoom">
          <div className="container">
            <div className="row">
              {/* Product Images */}
              <div className="col-md-6">
                <div className="tf-product-media-wrap sticky-top">
                  <div className="product-thumbs-slider">
                    <div dir="ltr" className="swiper tf-product-media-thumbs other-image-zoom" data-preview={4} data-direction="vertical">
                      <div className="swiper-wrapper stagger-wrap">
                        {/* black */}
                        <div className="swiper-slide stagger-item" data-color="black" data-size="small">
                          <div className="item">
                            <img className="lazyload" data-src="images/women-black-1.jpg" src="images/women-black-1.jpg" alt="img-product" />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item" data-color="black" data-size="medium">
                          <div className="item">
                            <img className="lazyload" data-src="images/women-black-2.jpg" src="images/women-black-2.jpg" alt="img-product" />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item" data-color="black" data-size="large">
                          <div className="item">
                            <img className="lazyload" data-src="images/women-black-3.jpg" src="images/women-black-3.jpg" alt="img-product" />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item" data-color="black" data-size="extra large">
                          <div className="item">
                            <img className="lazyload" data-src="images/women-black-4.jpg" src="images/women-black-4.jpg" alt="img-product" />
                          </div>
                        </div>
                        {/* yellow */}
                        <div className="swiper-slide stagger-item" data-color="orange" data-size="small">
                          <div className="item">
                            <img className="lazyload" data-src="images/fs-orange1.jpg" src="images/fs-orange1.jpg" alt="img-product" />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item" data-color="orange" data-size="medium">
                          <div className="item">
                            <img className="lazyload" data-src="images/fs-orange2.jpg" src="images/fs-orange2.jpg" alt="img-product" />
                          </div>
                        </div>
                        {/* grey */}
                        <div className="swiper-slide stagger-item" data-color="green" data-size="large">
                          <div className="item">
                            <img className="lazyload" data-src="images/fs-green1.jpg" src="images/fs-green1.jpg" alt="img-product" />
                          </div>
                        </div>
                        <div className="swiper-slide stagger-item" data-color="green" data-size="extra large">
                          <div className="item">
                            <img className="lazyload" data-src="images/fs-green2.jpg" src="images/fs-green2.jpg" alt="img-product" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flat-wrap-media-product">
                      <div dir="ltr" className="swiper tf-product-media-main" id="gallery-swiper-started">
                        <div className="swiper-wrapper">
                          {/* black */}
                          <div className="swiper-slide" data-color="black" data-size="small">
                            <a href="images/women-black-1.jpg" target="_blank" className="item" data-pswp-width="552px" data-pswp-height="827px">
                              <img className="tf-image-zoom lazyload" data-zoom="images/women-black-1.jpg" data-src="images/women-black-1.jpg" src="images/women-black-1.jpg" alt="img-product" />
                            </a>
                          </div>
                          <div className="swiper-slide" data-color="black" data-size="medium">
                            <a href="images/women-black-2.jpg" target="_blank" className="item" data-pswp-width="552px" data-pswp-height="827px">
                              <img className="tf-image-zoom lazyload" data-zoom="images/women-black-2.jpg" data-src="images/women-black-2.jpg" src="images/women-black-2.jpg" alt="img-product" />
                            </a>
                          </div>
                          <div className="swiper-slide" data-color="black" data-size="large">
                            <a href="images/women-black-3.jpg" target="_blank" className="item" data-pswp-width="552px" data-pswp-height="827px">
                              <img className="tf-image-zoom lazyload" data-zoom="images/women-black-3.jpg" data-src="images/women-black-3.jpg" src="images/women-black-3.jpg" alt="img-product" />
                            </a>
                          </div>
                          <div className="swiper-slide" data-color="black" data-size="extra large">
                            <a href="images/women-black-4.jpg" target="_blank" className="item" data-pswp-width="552px" data-pswp-height="827px">
                              <img className="tf-image-zoom lazyload" data-zoom="images/women-black-4.jpg" data-src="images/women-black-4.jpg" src="images/women-black-4.jpg" alt="img-product" />
                            </a>
                          </div>
                          {/* yellow */}
                          <div className="swiper-slide" data-color="orange" data-size="small">
                            <a href="images/fs-orange1.jpg" target="_blank" className="item" data-pswp-width="552px" data-pswp-height="827px">
                              <img className="tf-image-zoom lazyload" data-zoom="images/fs-orange1.jpg" data-src="images/fs-orange1.jpg" src="images/fs-orange1.jpg" alt="img-product" />
                            </a>
                          </div>
                          <div className="swiper-slide" data-color="orange" data-size="medium">
                            <a href="images/fs-orange2.jpg" target="_blank" className="item" data-pswp-width="552px" data-pswp-height="827px">
                              <img className="tf-image-zoom lazyload" data-zoom="images/fs-orange2.jpg" data-src="images/fs-orange2.jpg" src="images/fs-orange2.jpg" alt="img-product" />
                            </a>
                          </div>
                          {/* grey */}
                          <div className="swiper-slide" data-color="green" data-size="large">
                            <a href="images/fs-green1.jpg" target="_blank" className="item" data-pswp-width="552px" data-pswp-height="827px">
                              <img className="tf-image-zoom lazyload" data-zoom="images/fs-green1.jpg" data-src="images/fs-green1.jpg" src="images/fs-green1.jpg" alt="img-product" />
                            </a>
                          </div>
                          <div className="swiper-slide" data-color="green" data-size="extra large">
                            <a href="images/fs-green2.jpg" target="_blank" className="item" data-pswp-width="552px" data-pswp-height="827px">
                              <img className="tf-image-zoom lazyload" data-zoom="images/fs-green2.jpg" data-src="images/fs-green2.jpg" src="images/fs-green2.jpg" alt="img-product" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-button-next nav-swiper thumbs-next" />
                      <div className="swiper-button-prev nav-swiper thumbs-prev" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Product Images */}
              {/* Product Info */}
              <div className="col-md-6">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-wrap other-image-zoom">
                  <div className="tf-product-info-list">
                    <div className="tf-product-heading">
                      <span className="brand-product">KOTON</span>
                      <h5 className="product-name fw-medium">Linen Blend Pants</h5>
                      <div className="product-rate">
                        <div className="list-star">
                          <i className="icon icon-star" />
                          <i className="icon icon-star" />
                          <i className="icon icon-star" />
                          <i className="icon icon-star" />
                          <i className="icon icon-star" />
                        </div>
                        <span className="count-review">(5 reviews)</span>
                      </div>
                      <div className="product-price">
                        <div className="display-sm price-new price-on-sale">$60.00</div>
                        <div className="display-sm price-old">$80.00</div>
                        <span className="badge-sale">20% Off</span>
                      </div>
                      <div className="product-stock">
                        <span className="stock in-stock">In Stock</span>
                        <svg className="icon" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.2759 10.9242C15.2556 10.6149 14.9236 10.4281 14.6488 10.5714C14.4098 10.6961 13.6603 11.0196 13.0698 11.0196C12.6156 11.0196 12.3132 10.8694 12.3132 10.1362C12.3132 8.12636 15.0124 6.52078 12.6056 3.51218C12.3295 3.16719 11.773 3.41746 11.8469 3.85238C11.8484 3.86145 11.9887 4.77182 11.5632 5.27582C11.3635 5.51218 11.061 5.62711 10.6384 5.62711C9.17454 5.62711 9.27646 1.94027 11.1223 0.795793C11.5328 0.541367 11.2702 -0.0948905 10.8012 0.0119845C10.683 0.0387033 7.88684 0.701328 6.39105 3.62798C5.28035 5.80099 5.88191 7.29977 6.32116 8.39418C6.71371 9.3722 6.89283 9.81857 6.01364 10.4273C5.68251 10.6566 5.42618 10.6328 5.42618 10.6328C4.60384 10.6328 3.82489 9.42402 3.59437 8.95879C3.40712 8.57837 2.83721 8.67311 2.78314 9.09372C2.75993 9.27457 2.24057 13.5513 4.51026 16.1312C5.76076 17.5525 7.50054 18.0581 9.40742 17.9948C11.1702 17.9357 12.5768 17.3395 13.5883 16.2228C15.4639 14.152 15.2844 11.0549 15.2759 10.9242Z" fill="#F2721C" />
                          <path d="M4.44845 10.1357C4.04521 9.74669 3.72761 9.22817 3.59412 8.95877C3.40688 8.57834 2.83696 8.67309 2.78289 9.0937C2.75969 9.27454 2.24032 13.5513 4.51001 16.1312C5.2812 17.0077 6.27795 17.5784 7.48458 17.8379C4.95987 16.3506 4.24181 13.0162 4.44845 10.1357Z" fill="#EA5513" />
                          <path d="M3.73448 4.51577C3.70506 4.49735 3.66772 4.49735 3.6383 4.51577C2.64745 5.13712 2.64446 6.58633 3.6383 7.20955C3.66723 7.22769 3.70471 7.22825 3.73448 7.20955C4.72533 6.58816 4.72821 5.13898 3.73448 4.51577Z" fill="#F2721C" />
                          <path d="M4.12025 4.85809C4.01204 4.72502 3.88239 4.60855 3.73448 4.51577C3.70506 4.49735 3.66772 4.49735 3.6383 4.51577C2.64745 5.13712 2.64446 6.58633 3.6383 7.20955C3.66723 7.22769 3.70471 7.22825 3.73448 7.20955C3.88242 7.11677 4.01208 7.00026 4.12029 6.8672C3.64157 6.28237 3.64072 5.44386 4.12025 4.85809Z" fill="#EA5513" />
                          <path d="M10.8011 0.0119845C10.6829 0.0387033 7.88676 0.701328 6.39096 3.62798C4.90723 6.53083 6.48163 8.24741 6.63386 9.34639L6.63403 9.34629C6.69 9.74974 6.54569 10.0588 6.01356 10.4272C5.69392 10.6486 5.40494 10.6816 5.10034 10.5723V10.5727C5.10034 10.5727 6.17507 11.6058 7.26087 10.8972C8.33686 10.1951 8.02601 9.11809 7.85986 8.63131L7.86025 8.63103C7.46365 7.57951 7.11673 6.19027 8.09319 4.27988C8.67292 3.14557 9.44797 2.35153 10.1868 1.80263C10.426 1.38835 10.7395 1.0331 11.1223 0.795758C11.5326 0.541367 11.2701 -0.0948905 10.8011 0.0119845Z" fill="#EA5513" />
                        </svg>
                        <span className="text-dark">30 sold in last 24 hours</span>
                      </div>
                      <div className="product-progress-sale">
                        <div className="title-hurry-up"><span className="text-primary fw-medium">HURRY
                            UP!</span> Only <span className="count">4</span> items left!</div>
                        <div className="progress-sold">
                          <div className="value" style={{width: '70%'}} data-progress={70} />
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-variant">
                      <div className="variant-picker-item variant-color">
                        <div className="variant-picker-label">
                          Colors:<span className="variant-picker-label-value value-currentColor">{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</span>
                        </div>
                        <div className="variant-picker-values">
                          <div 
                            className={`hover-tooltip tooltip-bot color-btn ${selectedColor === 'black' ? 'active' : ''}`} 
                            data-color="black"
                            onClick={() => handleColorSelect('black')}
                          >
                            <span className="check-color bg-dark-3" />
                            <span className="tooltip">Black</span>
                          </div>
                          <div 
                            className={`hover-tooltip tooltip-bot color-btn ${selectedColor === 'orange' ? 'active' : ''}`} 
                            data-color="orange"
                            onClick={() => handleColorSelect('orange')}
                          >
                            <span className="check-color bg-light-orange-2" />
                            <span className="tooltip">Orange</span>
                          </div>
                          <div 
                            className={`hover-tooltip tooltip-bot color-btn ${selectedColor === 'green' ? 'active' : ''}`} 
                            data-color="green"
                            onClick={() => handleColorSelect('green')}
                          >
                            <span className="check-color bg-light-green" />
                            <span className="tooltip">Green</span>
                          </div>
                        </div>
                      </div>
                      <div className="variant-picker-item variant-size">
                        <div className="variant-picker-label">
                          <div>Size:<span className="variant-picker-label-value value-currentSize">{selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)}</span>
                          </div>
                          <a href="#sizeGuide" data-bs-toggle="modal" className="size-guide link">Size
                            Guide</a>
                        </div>
                        <div className="variant-picker-values">
                          <span 
                            className={`size-btn ${selectedSize === 'small' ? 'active' : ''}`} 
                            data-size="small"
                            onClick={() => handleSizeSelect('small')}
                          >
                            S
                          </span>
                          <span 
                            className={`size-btn ${selectedSize === 'medium' ? 'active' : ''}`} 
                            data-size="medium"
                            onClick={() => handleSizeSelect('medium')}
                          >
                            M
                          </span>
                          <span 
                            className={`size-btn ${selectedSize === 'large' ? 'active' : ''}`} 
                            data-size="large"
                            onClick={() => handleSizeSelect('large')}
                          >
                            L
                          </span>
                          <span 
                            className={`size-btn ${selectedSize === 'extra large' ? 'active' : ''}`} 
                            data-size="extra large"
                            onClick={() => handleSizeSelect('extra large')}
                          >
                            XL
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-total-quantity">
                      <div className="group-btn">
                        <div className="wg-quantity">
                          <button 
                            className="btn-quantity btn-decrease" 
                            onClick={() => handleQuantityChange('decrease')}
                          >
                            -
                          </button>
                          <input 
                            className="quantity-product" 
                            type="text" 
                            name="number" 
                            value={quantity} 
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                          />
                          <button 
                            className="btn-quantity btn-increase" 
                            onClick={() => handleQuantityChange('increase')}
                          >
                            +
                          </button>
                        </div>
                        <a href="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn animate-btn btn-add-to-cart">Add to cart</a>
                      </div>
                      <a href="checkout.php" className="tf-btn btn-primary w-100 animate-btn">Buy it
                        now</a>
                      <a href="checkout.php" className="more-choose-payment link">More payment
                        options</a>
                    </div>
                    <div className="tf-product-extra-link">
                      <a href="javascript:void(0);" className="product-extra-icon link btn-add-wishlist">
                        <i className="icon add icon-heart" /><span className="add">Add to wishlist</span>
                        <i className="icon added icon-trash" /><span className="added">Remove from
                          wishlist</span>
                      </a>
                      <a href="#compare" data-bs-toggle="modal" className="product-extra-icon link">
                        <i className="icon icon-compare2" />Compare
                      </a>
                      <a href="#askQuestion" data-bs-toggle="modal" className="product-extra-icon link">
                        <i className="icon icon-ask" />Ask a question
                      </a>
                      <a href="#shareSocial" data-bs-toggle="modal" className="product-extra-icon link">
                        <i className="icon icon-share" />Share
                      </a>
                    </div>
                    <ul className="tf-product-cate-sku text-md">
                      <li className="item-cate-sku">
                        <span className="label">SKU:</span>
                        <span className="value">AD1FSSE0YR</span>
                      </li>
                      <li className="item-cate-sku">
                        <span className="label">Categories:</span>
                        <span className="value">Clothes, Top</span>
                      </li>
                    </ul>
                    <div className="tf-product-trust-seal text-center">
                      <p className="text-md text-dark-2 text-seal fw-medium">Guarantee Safe Checkout:</p>
                      <ul className="list-card">
                        <li className="card-item">
                          <img src="images/Visa.png" alt="card" />
                        </li>
                        <li className="card-item">
                          <img src="images/DinersClub.png" alt="card" />
                        </li>
                        <li className="card-item">
                          <img src="images/Mastercard.png" alt="card" />
                        </li>
                        <li className="card-item">
                          <img src="images/Stripe.png" alt="card" />
                        </li>
                        <li className="card-item">
                          <img src="images/PayPal.png" alt="card" />
                        </li>
                        <li className="card-item">
                          <img src="images/GooglePay.png" alt="card" />
                        </li>
                        <li className="card-item">
                          <img src="images/ApplePay.png" alt="card" />
                        </li>
                      </ul>
                    </div>
                    <div className="tf-product-delivery-return">
                      <div className="product-delivery">
                        <div className="icon icon-car2" />
                        <p className="text-md">Estimated delivery time: <span className="fw-medium">3-5 days
                            international</span></p>
                      </div>
                      <div className="product-delivery">
                        <div className="icon icon-shipping3" />
                        <p className="text-md">Free shipping on <span className="fw-medium">all orders over
                            $150</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-fbt">
                    <div className="title text-xl fw-medium">Frequently Bought Together</div>
                    <form className="tf-product-form-bundle">
                      <div className="tf-bundle-products">
                        {bundleItems.map(item => (
                          <div key={item.id} className={`tf-bundle-product-item item-has-checkbox ${item.selected ? 'check' : ''}`}>
                            <div className="bundle-check">
                              <input 
                                type="checkbox" 
                                checked={item.selected}
                                onChange={() => handleBundleSelect(item.id)}
                                className="tf-check" 
                              />
                            </div>
                            <a href="product-detail.php" className="bundle-image">
                              <img src={`images/women-${item.id === 1 ? 'black-1' : item.id === 2 ? 'grey-3' : 'black-6'}.jpg`} alt="img-product" />
                            </a>
                            <div className="bundle-info">
                              <div className="bundle-title text-sm fw-medium">{item.name}</div>
                              <div className="bundle-price text-md fw-medium">
                                <span className="new-price">${item.price.toFixed(2)}</span>
                                {item.oldPrice && <span className="old-price">${item.oldPrice.toFixed(2)}</span>}
                              </div>
                              <div className="bundle-variant tf-select">
                                <select
                                  value={item.variant}
                                  onChange={(e) => handleBundleVariantChange(item.id, e.target.value)}
                                >
                                  {item.id === 1 && (
                                    <>
                                      <option>Black / S</option>
                                      <option>Black / M</option>
                                      <option>Black / L</option>
                                      <option>Blue / S</option>
                                      <option>Blue / M</option>
                                      <option>Blue / L</option>
                                      <option>Blue / XL</option>
                                      <option>White / S</option>
                                      <option>White / M</option>
                                      <option>White / L</option>
                                    </>
                                  )}
                                  {item.id === 2 && (
                                    <>
                                      <option>White / S</option>
                                      <option>White / M</option>
                                      <option>White / L</option>
                                      <option>Black / M</option>
                                      <option>Black / L</option>
                                      <option>Blue / S</option>
                                      <option>Blue / M</option>
                                      <option>Blue / L</option>
                                      <option>Blue / XL</option>
                                    </>
                                  )}
                                  {item.id === 3 && (
                                    <>
                                      <option>Black / S</option>
                                      <option>Black / M</option>
                                      <option>Black / L</option>
                                      <option>Blue / S</option>
                                      <option>Blue / M</option>
                                      <option>Blue / L</option>
                                      <option>Blue / XL</option>
                                      <option>White / S</option>
                                      <option>White / M</option>
                                      <option>White / L</option>
                                    </>
                                  )}
                                </select>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bundle-total-submit">
                        <div className="text">Total price:</div>
                        <span className="total-price">${calculateBundleTotal().toFixed(2)}</span>
                        {calculateBundleOldTotal() > 0 && (
                          <span className="total-price-old">${calculateBundleOldTotal().toFixed(2)}</span>
                        )}
                      </div>
                      <button 
                        data-bs-target="#shoppingCart" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        className="btn-submit-total tf-btn btn-out-line-primary"
                      >
                        Add selected to cart
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Product Info */}
            </div>
          </div>
        </div>
        <div className="tf-sticky-btn-atc">
          <div className="container">
            <div className="tf-height-observer w-100 d-flex align-items-center">
              <div className="tf-sticky-atc-product d-flex align-items-center">
                <div className="tf-sticky-atc-img">
                  <img className="lazyload" data-src="images/thumb-black2.jpg" alt src="images/thumb-black2.jpg" />
                </div>
                <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">Long Sleeve T-Shirt</div>
              </div>
              <div className="tf-sticky-atc-infos">
                <form>
                  <div className="tf-sticky-atc-variant-price text-center tf-select">
                    <select>
                      <option selected>Black / Small - $60.00</option>
                      <option>Black / M - $60.00</option>
                      <option>Black / L - $60.00</option>
                      <option>Blue / S - $60.00</option>
                      <option>Blue / M - $60.00</option>
                      <option>Blue / L - $60.00</option>
                      <option>Blue / XL - $60.00</option>
                      <option>White / S - $60.00</option>
                      <option>White / M - $60.00</option>
                      <option>White / L - $60.00</option>
                    </select>
                  </div>
                  <div className="tf-sticky-atc-btns">
                    <div className="tf-product-info-quantity">
                      <div className="wg-quantity">
                        <button 
                          className="btn-quantity minus-btn" 
                          onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
                        >
                          -
                        </button>
                        <input 
                          className="quantity-product font-4" 
                          type="text" 
                          name="number" 
                          value={quantity} 
                          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        />
                        <button 
                          className="btn-quantity plus-btn" 
                          onClick={() => setQuantity(prev => prev + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <a href="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn animate-btn d-inline-flex justify-content-center">Add to cart</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Product Main */}
    </div>
  );
};

export default MainDetail;