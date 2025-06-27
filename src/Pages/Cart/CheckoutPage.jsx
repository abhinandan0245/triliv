import React, { useState } from 'react';

const CheckoutPage = () => {
  // Form state management
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    country: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipcode: '',
    phone: '',
    emailPhone: '',
    shippingMethod: 'expship', // Default to express shipping
    paymentMethod: 'credit-card', // Default to credit card
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
    cardName: '',
    useShippingAsBilling: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Checkout</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="index.php">Home</a>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Checkout</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}
      
      {/* Cart Section */}
      <div className="flat-spacing-13">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <form className="tf-checkout-cart-main" onSubmit={handleSubmit}>
                <div className="box-ip-checkout">
                  <div className="title text-lg fw-medium">Checkout</div>
                  <div className="grid-2 mb_16">
                    <div className="tf-field style-2 style-3">
                      <input 
                        className="tf-field-input tf-input" 
                        id="firstname" 
                        placeholder=" " 
                        type="text" 
                        name="firstname" 
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                      />
                      <label className="tf-field-label" htmlFor="firstname">First name</label>
                    </div>
                    <div className="tf-field style-2 style-3">
                      <input 
                        className="tf-field-input tf-input" 
                        id="lastname" 
                        placeholder=" " 
                        type="text" 
                        name="lastname" 
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                      />
                      <label className="tf-field-label" htmlFor="lastname">Last name</label>
                    </div>
                  </div>
                  <fieldset className="tf-field style-2 style-3 mb_16">
                    <input 
                      className="tf-field-input tf-input" 
                      id="country" 
                      type="text" 
                      name="country" 
                      placeholder=" " 
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                    <label className="tf-field-label" htmlFor="country">Country</label>
                  </fieldset>
                  <fieldset className="tf-field style-2 style-3 mb_16">
                    <input 
                      className="tf-field-input tf-input" 
                      id="address" 
                      type="text" 
                      name="address" 
                      placeholder=" "
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                    <label className="tf-field-label" htmlFor="address">Address</label>
                  </fieldset>
                  <fieldset className="tf-field style-2 style-3 mb_16">
                    <input 
                      type="text" 
                      className="tf-field-input tf-input" 
                      name="apartment" 
                      placeholder=" "
                      value={formData.apartment}
                      onChange={handleChange}
                    />
                    <label className="tf-field-label" htmlFor="apartment">Apartment, suite, etc (optional)</label>
                  </fieldset>
                  <div className="grid-3 mb_16">
                    <fieldset className="tf-field style-2 style-3">
                      <input 
                        className="tf-field-input tf-input" 
                        id="city" 
                        type="text" 
                        name="city" 
                        placeholder=" "
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                      <label className="tf-field-label" htmlFor="city">City</label>
                    </fieldset>
                    <div className="tf-select select-square">
                      <select 
                        name="state" 
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      >
                        <option value="">State</option>
                        <option value="alabama">Alabama</option>
                        <option value="alaska">Alaska</option>
                        <option value="california">California</option>
                        <option value="hawaii">Hawaii</option>
                        <option value="texas">Texas</option>
                        <option value="georgia">Georgia</option>
                      </select>
                    </div>
                    <fieldset className="tf-field style-2 style-3">
                      <input 
                        className="tf-field-input tf-input" 
                        id="code" 
                        type="text" 
                        name="zipcode" 
                        placeholder=" "
                        value={formData.zipcode}
                        onChange={handleChange}
                        required
                      />
                      <label className="tf-field-label" htmlFor="code">Zipcode/Postal</label>
                    </fieldset>
                  </div>
                  <fieldset className="tf-field style-2 style-3 mb_16">
                    <input 
                      className="tf-field-input tf-input" 
                      id="phone" 
                      type="text" 
                      name="phone" 
                      placeholder=" "
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label className="tf-field-label" htmlFor="phone">Phone</label>
                  </fieldset>
                </div>
                <div className="box-ip-contact">
                  <div className="title">
                    <div className="text-lg fw-medium">Contact Information</div>
                    <a href="#login" data-bs-toggle="offcanvas" className="text-sm link">Log in</a>
                  </div>
                  <fieldset className="tf-field style-2 style-3">
                    <input 
                      className="tf-field-input tf-input" 
                      id="email/phone" 
                      placeholder=" " 
                      type="text" 
                      name="emailPhone" 
                      value={formData.emailPhone}
                      onChange={handleChange}
                      required
                    />
                    <label className="tf-field-label" htmlFor="email/phone">Email or phone number</label>
                  </fieldset>
                </div>
                <div className="box-ip-shipping">
                  <div className="title text-lg fw-medium">Shipping Method</div>
                  <fieldset className="mb_16">
                    <label htmlFor="freeship" className="check-ship">
                      <input 
                        type="radio" 
                        id="freeship" 
                        className="tf-check-rounded" 
                        name="shippingMethod" 
                        value="freeship"
                        checked={formData.shippingMethod === 'freeship'}
                        onChange={handleChange}
                      />
                      <span className="text text-sm">
                        <span>Free Shipping (Estimate in 7/10 - 10/10/2025)</span>
                        <span className="price">$00.00</span>
                      </span>
                    </label>
                  </fieldset>
                  <fieldset>
                    <label htmlFor="expship" className="check-ship">
                      <input 
                        type="radio" 
                        id="expship" 
                        className="tf-check-rounded" 
                        name="shippingMethod" 
                        value="expship"
                        checked={formData.shippingMethod === 'expship'}
                        onChange={handleChange}
                      />
                      <span className="text text-sm">
                        <span>Express Shipping (Estimate in 4/10 - 5/10/2025)</span>
                        <span className="price">$10.00</span>
                      </span>
                    </label>
                  </fieldset>
                </div>
                <div className="box-ip-payment">
                  <div className="title">
                    <div className="text-lg fw-medium mb_4">Payment</div>
                    <p className="text-sm text-main">All transactions are secure and encrypted.</p>
                  </div>
                  <fieldset className="mb_12">
                    <label htmlFor="bank-transfer" className="check-payment">
                      <input 
                        type="radio" 
                        id="bank-transfer" 
                        className="tf-check-rounded" 
                        name="paymentMethod" 
                        value="bank-transfer"
                        checked={formData.paymentMethod === 'bank-transfer'}
                        onChange={handleChange}
                      />
                      <span className="text-payment text-sm">Direct bank transfer</span>
                    </label>
                  </fieldset>
                  <p className="mb_16 text-main">Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference.Your order will not be shipped until the
                    funds have cleared in our account.</p>
                  <div className="payment-method-box" id="payment-method-box">
                    <div className="payment-item mb_16">
                      <label htmlFor="delivery" className="payment-header collapsed" data-bs-toggle="collapse" data-bs-target="#delivery-payment" aria-controls="delivery-payment">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          className="tf-check-rounded" 
                          id="delivery" 
                          value="delivery"
                          checked={formData.paymentMethod === 'delivery'}
                          onChange={handleChange}
                        />
                        <span className="pay-title text-sm">Cash on delivery</span>
                      </label>
                      <div id="delivery-payment" className="collapse" data-bs-parent="#payment-method-box" />
                    </div>
                    <div className="payment-item mb_16">
                      <label htmlFor="credit-card" className="payment-header" data-bs-toggle="collapse" data-bs-target="#credit-card-payment" aria-controls="credit-card-payment">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          className="tf-check-rounded" 
                          id="credit-card" 
                          value="credit-card"
                          checked={formData.paymentMethod === 'credit-card'}
                          onChange={handleChange}
                        />
                        <span className="pay-title text-sm">Credit Card</span>
                      </label>
                      <div id="credit-card-payment" className="collapse show" data-bs-parent="#payment-method-box">
                        <div className="payment-body">
                          <fieldset className="ip-card mb_16">
                            <input 
                              type="text" 
                              className="style-2" 
                              placeholder="Card number" 
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              required={formData.paymentMethod === 'credit-card'}
                            />
                            <img className="card-logo" width={41} height={12} src="images/visa-2.png" alt="card" />
                          </fieldset>
                          <div className="grid-2 mb_16">
                            <input 
                              type="text" 
                              className="style-2" 
                              placeholder="Expiration date (MM/YY)" 
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleChange}
                              required={formData.paymentMethod === 'credit-card'}
                            />
                            <input 
                              type="text" 
                              className="style-2" 
                              placeholder="Sercurity code" 
                              name="securityCode"
                              value={formData.securityCode}
                              onChange={handleChange}
                              required={formData.paymentMethod === 'credit-card'}
                            />
                          </div>
                          <fieldset className="mb_16">
                            <input 
                              type="text" 
                              className="style-2" 
                              placeholder="Name on card" 
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              required={formData.paymentMethod === 'credit-card'}
                            />
                          </fieldset>
                          <div className="cb-ship">
                            <input 
                              type="checkbox" 
                              className="tf-check" 
                              id="checkShip" 
                              name="useShippingAsBilling"
                              checked={formData.useShippingAsBilling}
                              onChange={handleChange}
                            />
                            <label htmlFor="checkShip" className="text-sm text-main">Use shipping
                              address as billing address</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="payment-item paypal-payment mb_16">
                      <label htmlFor="paypal" className="payment-header collapsed" data-bs-toggle="collapse" data-bs-target="#paypal-payment" aria-controls="paypal-payment">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          className="tf-check-rounded" 
                          id="paypal" 
                          value="paypal"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleChange}
                        />
                        <span className="pay-title text-sm">PayPal<img className="card-logo" width={78} height={20} src="images/paypal-2.png" alt="apple" /></span>
                      </label>
                      <div id="paypal-payment" className="collapse" data-bs-parent="#payment-method-box">
                      </div>
                    </div>
                  </div>
                  <p className="text-dark-6 text-sm">Your personal data will be used to process your order,
                    support your experience throughout this website, and for other purposes described in
                    our <a href="privacy-policy.php" className="fw-medium text-decoration-underline link text-sm">privacy policy.</a></p>
                </div>
              </form>
            </div>
            <div className="col-xl-4">
              <div className="tf-page-cart-sidebar">
                <form className="cart-box order-box">
                  <div className="title text-lg fw-medium">In your cart</div>
                  <ul className="list-order-product">
                    <li className="order-item">
                      <figure className="img-product">
                        <img src="images/product/order-1.jpg" alt="product" />
                        <span className="quantity">1</span>
                      </figure>
                      <div className="content">
                        <div className="info">
                          <p className="name text-sm fw-medium">Loose Fit Tee</p>
                          <span className="variant">White / L</span>
                        </div>
                        <span className="price text-sm fw-medium">$120.00</span>
                      </div>
                    </li>
                    <li className="order-item">
                      <figure className="img-product">
                        <img src="images/product/order-2.jpg" alt="product" />
                        <span className="quantity">1</span>
                      </figure>
                      <div className="content">
                        <div className="info">
                          <p className="name text-sm fw-medium">Bow-Tie T-Shirt</p>
                          <span className="variant">Black / L</span>
                        </div>
                        <span className="price text-sm fw-medium">$120.00</span>
                      </div>
                    </li>
                    <li className="order-item">
                      <figure className="img-product">
                        <img src="images/product/order-3.jpg" alt="product" />
                        <span className="quantity">1</span>
                      </figure>
                      <div className="content">
                        <div className="info">
                          <p className="name text-sm fw-medium">Loose Fit Tee</p>
                          <span className="variant">White / L</span>
                        </div>
                        <span className="price text-sm fw-medium">$130.00</span>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-total">
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Subtotal:</span>
                      <span className="price-sub fw-medium">$370.00 USD</span>
                    </li>
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Discount:</span>
                      <span className="price-discount fw-medium">-$48.00 USD</span>
                    </li>
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Shipping:</span>
                      <span className="price-ship fw-medium">$10.00 USD</span>
                    </li>
                    <li className="total-item text-sm d-flex justify-content-between">
                      <span>Tax:</span>
                      <span className="price-tax fw-medium">$48.00 USD</span>
                    </li>
                  </ul>
                  <div className="subtotal text-lg fw-medium d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span className="total-price-order">$380.00 USD</span>
                  </div>
                  <div className="btn-order">
                    <button 
                      type="submit" 
                      className="tf-btn btn-dark2 animate-btn w-100 text-transform-none"
                      onClick={handleSubmit}
                    >
                      Place order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Cart Section */}
    </div>
  );
};

export default CheckoutPage;