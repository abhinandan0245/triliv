import React from "react";
import { Link } from "react-router-dom";
import visaImg from "../../public/images/visa-2.png";
import paypalImg from "../../public/images/paypal-2.png";
import order1 from "../../public/images/product/order-1.jpg";
import order2 from '../../public/images/paypal-2.png';
import order3 from "../../public/images/product/order-3.jpg";

const Checkout = () => {
  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Checkout</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">Home</Link>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Checkout</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <div className="flat-spacing-13">
        <div className="container">
          <div className="row">
            {/* Left Section - Checkout Form */}
            <div className="col-xl-8">
              <form className="tf-checkout-cart-main">
                {/* Checkout Info */}
                <div className="box-ip-checkout">
                  <div className="title text-lg fw-medium">Checkout</div>
                  <div className="grid-2 mb_16">
                    <InputField id="firstname" label="First name" />
                    <InputField id="lastname" label="Last name" />
                  </div>
                  <InputField id="country" label="Country" />
                  <InputField id="address" label="Address" />
                  <InputField id="apartment" label="Apartment, suite, etc (optional)" />
                  <div className="grid-3 mb_16">
                    <InputField id="city" label="City" />
                    <div className="tf-select select-square">
                      <select name="state" id="state">
                        <option value="">State</option>
                        <option value="alabama">Alabama</option>
                        <option value="alaska">Alaska</option>
                        <option value="california">California</option>
                        <option value="hawaii">Hawaii</option>
                        <option value="texas">Texas</option>
                        <option value="georgia">Georgia</option>
                      </select>
                    </div>
                    <InputField id="code" label="Zipcode/Postal" />
                  </div>
                  <InputField id="phone" label="Phone" />
                </div>

                {/* Contact Info */}
                <div className="box-ip-contact">
                  <div className="title">
                    <div className="text-lg fw-medium">Contact Information</div>
                    <a href="#login" data-bs-toggle="offcanvas" className="text-sm link">Log in</a>
                  </div>
                  <InputField id="email-phone" label="Email or phone number" />
                </div>

                {/* Shipping */}
                <div className="box-ip-shipping">
                  <div className="title text-lg fw-medium">Shipping Method</div>
                  <ShippingOption
                    id="freeship"
                    label="Free Shipping (Estimate in 7/10 - 10/10/2025)"
                    price="$00.00"
                  />
                  <ShippingOption
                    id="expship"
                    label="Express Shipping (Estimate in 4/10 - 5/10/2025)"
                    price="$10.00"
                    checked
                  />
                </div>

                {/* Payment */}
                <div className="box-ip-payment">
                  <div className="title">
                    <div className="text-lg fw-medium mb_4">Payment</div>
                    <p className="text-sm text-main">All transactions are secure and encrypted.</p>
                  </div>

                  <fieldset className="mb_12">
                    <label htmlFor="bank-transfer" className="check-payment">
                      <input type="checkbox" id="bank-transfer" className="tf-check-rounded" />
                      <span className="text-payment text-sm">Direct bank transfer</span>
                    </label>
                  </fieldset>

                  <p className="mb_16 text-main">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                    Your order will not be shipped until the funds have cleared in our account.
                  </p>

                  <div className="payment-method-box" id="payment-method-box">
                    {/* Cash on Delivery */}
                    <PaymentOption id="delivery" title="Cash on delivery" collapseId="delivery-payment" />

                    {/* Credit Card */}
                    <PaymentOption id="credit-card" title="Credit Card" collapseId="credit-card-payment" defaultExpanded>
                      <div className="payment-body">
                        <fieldset className="ip-card mb_16">
                          <input type="text" className="style-2" placeholder="Card number" />
                          <img className="card-logo" width={41} height={12} src={visaImg} alt="card" />
                        </fieldset>
                        <div className="grid-2 mb_16">
                          <input type="text" className="style-2" placeholder="Expiration date (MM/YY)" />
                          <input type="text" className="style-2" placeholder="Security code" />
                        </div>
                        <input type="text" className="style-2 mb_16" placeholder="Name on card" />
                        <div className="cb-ship">
                          <input type="checkbox" defaultChecked className="tf-check" id="checkShip" />
                          <label htmlFor="checkShip" className="text-sm text-main">
                            Use shipping address as billing address
                          </label>
                        </div>
                      </div>
                    </PaymentOption>

                    {/* PayPal */}
                    <PaymentOption id="paypal" title={
                      <>
                        PayPal <img className="card-logo" width={78} height={20} src={paypalImg} alt="paypal" />
                      </>
                    } collapseId="paypal-payment" />
                  </div>

                  <p className="text-dark-6 text-sm">
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
                    <Link to="/privacy-policy" className="fw-medium text-decoration-underline link text-sm">
                      privacy policy
                    </Link>.
                  </p>
                </div>
              </form>
            </div>

            {/* Right Section - Cart Summary */}
            <div className="col-xl-4">
              <div className="tf-page-cart-sidebar">
                <form action="/thank-you" className="cart-box order-box">
                  <div className="title text-lg fw-medium">In your cart</div>
                  <ul className="list-order-product">
                    <OrderItem img={order1} name="Loose Fit Tee" variant="White / L" price="$120.00" />
                    <OrderItem img={order2} name="Bow-Tie T-Shirt" variant="Black / L" price="$120.00" />
                    <OrderItem img={order3} name="Loose Fit Tee" variant="White / L" price="$130.00" />
                  </ul>
                  <ul className="list-total">
                    <PriceItem label="Subtotal:" value="$370.00 USD" />
                    <PriceItem label="Discount:" value="-$48.00 USD" />
                    <PriceItem label="Shipping:" value="$10.00 USD" />
                    <PriceItem label="Tax:" value="$48.00 USD" />
                  </ul>
                  <div className="subtotal text-lg fw-medium d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span className="total-price-order">$380.00 USD</span>
                  </div>
                  <div className="btn-order">
                    <button type="submit" className="tf-btn btn-dark2 animate-btn w-100 text-transform-none">
                      Place order
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// 🔽 Reusable components
const InputField = ({ id, label }) => (
  <fieldset className="tf-field style-2 style-3 mb_16">
    <input className="tf-field-input tf-input" id={id} type="text" name={id} placeholder=" " />
    <label className="tf-field-label" htmlFor={id}>{label}</label>
  </fieldset>
);

const ShippingOption = ({ id, label, price, checked }) => (
  <fieldset className="mb_16">
    <label htmlFor={id} className="check-ship">
      <input type="radio" id={id} className="tf-check-rounded" name="checkshipping" defaultChecked={checked} />
      <span className="text text-sm">
        <span>{label}</span>
        <span className="price">{price}</span>
      </span>
    </label>
  </fieldset>
);

const PaymentOption = ({ id, title, collapseId, defaultExpanded, children }) => (
  <div className="payment-item mb_16">
    <label
      htmlFor={id}
      className={`payment-header ${defaultExpanded ? "" : "collapsed"}`}
      data-bs-toggle="collapse"
      data-bs-target={`#${collapseId}`}
      aria-controls={collapseId}
    >
      <input type="radio" name="payment-method" className="tf-check-rounded" id={id} defaultChecked={defaultExpanded} />
      <span className="pay-title text-sm">{title}</span>
    </label>
    <div
      id={collapseId}
      className={`collapse ${defaultExpanded ? "show" : ""}`}
      data-bs-parent="#payment-method-box"
    >
      {children}
    </div>
  </div>
);

const OrderItem = ({ img, name, variant, price }) => (
  <li className="order-item">
    <figure className="img-product">
      <img src={img} alt="product" />
      <span className="quantity">1</span>
    </figure>
    <div className="content">
      <div className="info">
        <p className="name text-sm fw-medium">{name}</p>
        <span className="variant">{variant}</span>
      </div>
      <span className="price text-sm fw-medium">{price}</span>
    </div>
  </li>
);

const PriceItem = ({ label, value }) => (
  <li className="total-item text-sm d-flex justify-content-between">
    <span>{label}</span>
    <span className="fw-medium">{value}</span>
  </li>
);

export default Checkout;
