import React, { useState, useEffect } from 'react';
 

// Import images (adjust paths as needed)
import product1 from '../../../public/images/product/product-1.jpg';
import product34 from '../../../public/images/product/product-34.jpg';
import product35 from '../../../public/images/product/product-35.jpg';
import avt1 from '../../../public/images/avt-1.png';
import blogAuthor2 from '../../../public/images/blog-author-2.jpg';
import blogAuthor3 from '../../../public/images/blog-author-3.jpg';
import visa from '../../../public/images/Visa.png';
import dinersClub from '../../../public/images/DinersClub.png';
import mastercard from '../../../public/images/Mastercard.png';
import stripe from '../../../public/images/Stripe.png';

const Shopping = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Oversized Printed T-shirt",
      image: product1,
      variant: "White / L",
      price: 130.00,
      quantity: 1
    },
    {
      id: 2,
      name: "Loose Fit Tee",
      image: product34,
      variant: "White / L",
      price: 130.00,
      quantity: 1
    },
    {
      id: 3,
      name: "Crop T-shirt",
      image: product35,
      variant: "White / L",
      price: 130.00,
      quantity: 1
    }
  ]);

  // State for form inputs
  const [giftWrap, setGiftWrap] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    country: "",
    state: "",
    zipcode: ""
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + (giftWrap ? 10 : 0);

  // Initialize Swiper and 
  useEffect(() => {

    // Initialize all Swiper instances
    const swipers = document.querySelectorAll('.tf-swiper');
    swipers.forEach(el => {
      try {
        const config = JSON.parse(el.getAttribute('data-swiper').replace(/'/g, '"'));
        new Swiper(el, {
          ...config,
          // Add modules if needed (for navigation, pagination, etc.)
          // modules: [Navigation, Pagination]
        });
      } catch (error) {
        console.error('Error initializing Swiper:', error);
      }
    });

    // Cleanup function
    return () => {
      // Cleanup Swiper instances if needed
    };
  }, []);

  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle shipping info changes
  const handleShippingChange = (e) => {
    const { id, value } = e.target;
    setShippingInfo(prev => ({...prev, [id]: value}));
  };

  // Handle discount code application
  const applyDiscount = (e) => {
    e.preventDefault();
    // Add your discount logic here
    console.log("Applying discount code:", discountCode);
  };

  // Handle shipping estimate
  const handleShippingEstimate = (e) => {
    e.preventDefault();
    console.log("Estimating shipping with:", shippingInfo);
  };

  // Handle checkout
  const handleCheckout = (e) => {
    e.preventDefault();
    if (!agreeTerms) return;
    console.log("Proceeding to checkout with:", { cartItems, total, shippingInfo });
  };

  return (
    <>
      {/* Title Page */}
      <div className="flat-spacing-24">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-sm-8">
              <div className="tf-cart-head text-center">
                <p className="text-xl-3 title text-dark-4">
                  Spend <span className="fw-medium">$100</span> more to get
                  <span className="fw-medium"> Free Shipping</span>
                </p>
                <div className="progress-sold tf-progress-ship">
                  <div className="value" style={{width: '0%'}} data-progress={60}>
                    <i className="icon icon-car" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="flat-spacing-2 pt-0 mt_15">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="tf-page-cart-main">
                <form className="form-cart">
                  <table className="table-page-cart">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id} className="tf-cart-item file-delete">
                          <td className="tf-cart-item_product">
                            <a href="productdetail" className="img-box">
                              <img src={item.image} alt="img-product" />
                            </a>
                            <div className="cart-info">
                              <a href="productdetail" className="name text-md link fw-medium">{item.name}</a>
                              <div className="variants">{item.variant}</div>
                              <span 
                                className="remove-cart link remove" 
                                onClick={() => removeItem(item.id)}
                              >
                                Remove
                              </span>
                            </div>
                          </td>
                          <td className="tf-cart-item_price text-center" data-cart-title="Price">
                            <span className="cart-price price-on-sale text-md fw-medium">${item.price.toFixed(2)}</span>
                          </td>
                          <td className="tf-cart-item_quantity" data-cart-title="Quantity">
                            <div className="wg-quantity">
                              <span 
                                className="btn-quantity btn-decrease" 
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                -
                              </span>
                              <input 
                                className="quantity-product" 
                                type="text" 
                                name="number" 
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                              />
                              <span 
                                className="btn-quantity btn-increase" 
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td className="tf-cart-item_total text-center" data-cart-title="Total">
                            <div className="cart-total total-price text-md fw-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="check-gift">
                    <input 
                      type="checkbox" 
                      className="tf-check" 
                      id="checkGift" 
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                    />
                    <label htmlFor="checkGift" className="label text-dark-4">
                      Add gift wrap. Only <span className="fw-medium">$10.00.</span> (You can choose or not)
                    </label>
                  </div>
                  <div className="box-ip-discount">
                    <div className="discount-ip">
                      <input 
                        className="value-discount" 
                        type="text" 
                        placeholder="Discount code" 
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                      />
                      <button 
                        type="button" 
                        className="tf-btn radius-6 btn-out-line-dark-2"
                        onClick={applyDiscount}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="cart-note">
                    <label htmlFor="note" className="text-md fw-medium">Special instructions for seller</label>
                    <textarea 
                      id="note" 
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                    />
                  </div>
                </form>
                <div className="fl-iconbox " data-aos="fade-up">
                  <div dir="ltr" className="swiper tf-swiper sw-auto" data-swiper='{
                    "slidesPerView": 1,
                    "spaceBetween": 12,
                    "speed": 800,
                    "preventInteractionOnTransition": false, 
                    "touchStartPreventDefault": false,
                    "slidesPerGroup": 1,
                    "pagination": { "el": ".sw-pagination-iconbox", "clickable": true },
                    "breakpoints": {
                        "575": { "slidesPerView": 2, "spaceBetween": 12, "slidesPerGroup": 2}, 
                        "768": { "slidesPerView": 3, "spaceBetween": 24, "slidesPerGroup": 3},
                        "1200": { "slidesPerView": "auto", "spaceBetween": 24}
                    }
                  }'>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                          <div className="box-icon">
                            <i className="icon icon-shipping" />
                          </div>
                          <div className="content">
                            <div className="title text-uppercase">Free Shipping</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                          <div className="box-icon">
                            <i className="icon icon-gift" />
                          </div>
                          <div className="content">
                            <div className="title text-uppercase">Gift Package</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                          <div className="box-icon">
                            <i className="icon icon-return" />
                          </div>
                          <div className="content">
                            <div className="title text-uppercase">Ease Returns</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="tf-icon-box justify-content-center justify-content-sm-start style-3">
                          <div className="box-icon">
                            <i className="icon icon-support" />
                          </div>
                          <div className="content">
                            <div className="title text-uppercase text-nowrap">ONE YEAR WARRANTY</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex d-xl-none sw-dot-default sw-pagination-iconbox justify-content-center"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tf-page-cart-sidebar">
                <form className="cart-box shipping-cart-box" onSubmit={handleShippingEstimate}>
                  <div className="text-lg title fw-medium">Shipping estimates</div>
                  <fieldset className="field">
                    <label htmlFor="country" className="text-sm">Country</label>
                    <input 
                      type="text" 
                      id="country" 
                      placeholder="United State" 
                      value={shippingInfo.country}
                      onChange={handleShippingChange}
                    />
                  </fieldset>
                  <fieldset className="field">
                    <label htmlFor="state" className="text-sm">State/Province</label>
                    <input 
                      type="text" 
                      id="state" 
                      placeholder="State/Province" 
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                    />
                  </fieldset>
                  <fieldset className="field">
                    <label htmlFor="code" className="text-sm">Zipcode</label>
                    <input 
                      type="text" 
                      id="code" 
                      placeholder="41000" 
                      value={shippingInfo.zipcode}
                      onChange={handleShippingChange}
                    />
                  </fieldset>
                  <button type="submit" className="tf-btn btn-dark2 animate-btn w-100">Estimate</button>
                </form>
                <form className="cart-box checkout-cart-box" onSubmit={handleCheckout}>
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
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    <label htmlFor="check-agree" className="label text-dark-4">
                      I agree with <a href="term-condition" className="text-dark-4 fw-medium text-underline link">term and conditions</a>
                    </label>
                  </div>
                  <div className="checkout-btn">
                    <button 
                      type="submit" 
                      className="tf-btn btn-dark2 animate-btn w-100"
                      disabled={!agreeTerms}
                    >
                      Checkout
                    </button>
                  </div>
                  <div className="cart-imgtrust">
                    <p className="text-center text-sm text-dark-1">We accept</p>
                    <div className="cart-list-social">
                      <div className="payment-card">
                        <img src={visa} alt="Visa" />
                      </div>
                      <div className="payment-card">
                        <img src={dinersClub} alt="Diners Club" />
                      </div>
                      <div className="payment-card">
                        <img src={mastercard} alt="Mastercard" />
                      </div>
                      <div className="payment-card">
                        <img src={stripe} alt="Stripe" />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="cart-box testimonial-cart-box">
                  <div dir="ltr" className="swiper tf-swiper" data-swiper='{
                    "slidesPerView": 1,
                    "spaceBetween": 12,
                    "speed": 800,
                    "preventInteractionOnTransition": false, 
                    "touchStartPreventDefault": false,
                    "pagination": { "el": ".sw-pagination-tes", "clickable": true },
                    "navigation": {
                        "clickable": true,
                        "nextEl": ".nav-next-tes",
                        "prevEl": ".nav-prev-tes"
                    }
                  }'>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="box-testimonial-main">
                          <span className="quote icon-quote5" />
                          <div className="content">
                            <div className="list-star-default">
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                            </div>
                            <p className="text-review text-md text-main">
                              "Stylish, comfortable, and perfect for any occasion! My new favorite fashion destination."
                            </p>
                            <div className="box-author">
                              <div className="img">
                                <img src={avt1} alt="author" />
                              </div>
                              <span className="name text-sm fw-medium">Vineta P.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="box-testimonial-main">
                          <span className="quote icon-quote5" />
                          <div className="content">
                            <div className="list-star-default">
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                            </div>
                            <p className="text-review text-md text-main">
                              "Trendy, versatile, and fits perfectly! My go-to place for stylish outfits."
                            </p>
                            <div className="box-author">
                              <div className="img">
                                <img src={blogAuthor3} alt="author" />
                              </div>
                              <span className="name text-sm fw-medium">Themesflat</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="box-testimonial-main">
                          <span className="quote icon-quote5" />
                          <div className="content">
                            <div className="list-star-default">
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                              <i className="icon-star" />
                            </div>
                            <p className="text-review text-md text-main">
                              "Chic, affordable, and always on point! I'm obsessed with their collections!"
                            </p>
                            <div className="box-author">
                              <div className="img">
                                <img src={blogAuthor2} alt="author" />
                              </div>
                              <span className="name text-sm fw-medium">Henry P.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-nav-swiper">
                      <div className="swiper-button-prev nav-swiper nav-prev-tes" />
                      <div className="swiper-button-next nav-swiper nav-next-tes" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;