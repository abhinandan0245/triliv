import React from 'react';

const OrderSuccessPage = () => {
  return (
    <div>
      {/* Header Include Placeholder */}
      {/* Title Section */}
      <div className="flat-spacing pb-0">
        <div className="container">
          <div className="title-success-order text-center">
            <img className="icon" src="images/success.svg" alt="success" />
            <div className="box-title">
              <h3 className="title">Thank you for your order!</h3>
              <p className="text-md text-main">
                You are awesome, Vineta! Thank you so much for your purchase.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Section */}
      <div className="flat-spacing-29">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-xl-8">
              <div className="tf-main-success">
                {/* Order Progress */}
                <div className="box-progress-order">
                  <div className="order-progress-item order-code text-center">
                    <div className="title text-sm fw-medium">Order number</div>
                    <div className="text-md fw-medium code">#1001</div>
                  </div>
                  <div className="order-progress-item order-date text-center">
                    <div className="title text-sm fw-medium">Order date</div>
                    <div className="text-md fw-medium date">10 Oct 2025</div>
                  </div>
                  <div className="order-progress-item order-total text-center">
                    <div className="title text-sm fw-medium">Order total</div>
                    <div className="text-md fw-medium total">$480.00</div>
                  </div>
                  <div className="order-progress-item payment-method text-center">
                    <div className="title text-sm fw-medium">Payment method</div>
                    <div className="text-md fw-medium metod">Direct bank transfer</div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="box-timeline-order">
                  <div className="timeline-item active text-center">
                    <div className="box-icon"><span className="icon icon-confirm" /></div>
                    <div className="content">
                      <div className="title fw-medium text-md">Confirmed</div>
                      <span className="date fw-medium text-sm text-main">10 Oct 2025</span>
                    </div>
                  </div>
                  <div className="line-time" />
                  <div className="timeline-item text-center">
                    <div className="box-icon"><span className="icon icon-shipped" /></div>
                    <div className="content">
                      <div className="title fw-medium text-md">Shipped</div>
                      <span className="date fw-medium text-sm text-main">20 Oct 2025</span>
                    </div>
                  </div>
                  <div className="line-time" />
                  <div className="timeline-item text-center">
                    <div className="box-icon"><span className="icon icon-location" /></div>
                    <div className="content">
                      <div className="title fw-medium text-md">Delivered</div>
                      <span className="date fw-medium text-sm text-main">22 Oct 2025</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="map-order">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27294.62418958524!2d151.25730233429948!3d-33.82005608618041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ab8bc95a137f%3A0x358f04a7f6f5f6a6!2sGrotto%20Point%20Lighthouse!5e0!3m2!1sen!2s!4v1733976867160!5m2!1sen!2s"
                    width="100%"
                    height="499"
                    style={{ border: 'none' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shipping Map"
                  />
                </div>

                {/* Address Section */}
                <div className="box-ship-address">
                  <div className="row justify-content-between">
                    <div className="col-12 col-sm-5">
                      <div className="ship-address-item">
                        <div className="text-lg fw-medium title">Shipping address</div>
                        <ul className="list-address">
                          <li className="text-sm text-main">Vineta Pham</li>
                          <li className="text-sm text-main">15 Yarran st</li>
                          <li className="text-sm text-main">Punchbowl, NSW</li>
                          <li className="text-sm text-main">Australia</li>
                          <li className="text-sm text-main">2196</li>
                          <li className="text-sm text-main">vineta@gmail.com</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-sm-5">
                      <div className="ship-address-item billing mb-0">
                        <div className="text-lg fw-medium title">Billing address</div>
                        <ul className="list-address">
                          <li className="text-sm text-main">Vineta Pham</li>
                          <li className="text-sm text-main">1 Davic st</li>
                          <li className="text-sm text-main">Alabama</li>
                          <li className="text-sm text-main">United State</li>
                          <li className="text-sm text-main">5000</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="fl-order-testimonial">
                  <div className="swiper tf-swiper" dir="ltr" data-swiper='{"slidesPerView":1,"spaceBetween":12,"speed":800,"pagination":{"el":".sw-pagination-tes","clickable":true},"breakpoints":{"768":{"slidesPerView":1,"spaceBetween":24}}}'>
                    <div className="swiper-wrapper">
                      {[
                        {
                          text: `"I’ve never felt more confident in my wardrobe! Every piece I’ve bought from here is high-quality, trendy, and fits perfectly."`,
                          author: "Vineta P",
                        },
                        {
                          text: `"I’ve never been happier with my wardrobe! Every piece I’ve bought is stylish, high-quality, and fits like a glove."`,
                          author: "David P",
                        },
                        {
                          text: `"Shopping here has completely transformed my style! Every item I’ve received is beautiful, well-made, and fits me perfectly."`,
                          author: "Henry P",
                        },
                      ].map((item, idx) => (
                        <div className="swiper-slide" key={idx}>
                          <div className="box-order-tes text-center">
                            <span className="icon icon-quote3" />
                            <div className="content">
                              <div className="title text-md text-uppercase fw-medium">HAPPY CUSTOMERS</div>
                              <p className="note text-xl text-main">{item.text}</p>
                            </div>
                            <span className="author font-2 text-md fw-semibold">{item.author}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="sw-dot-default style-sm sw-pagination-tes justify-content-center" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Sidebar */}
            <div className="col-xl-4">
              <div className="tf-page-cart-sidebar sidebar-order-success">
                {/* Order Summary */}
                <div className="cart-box order-box">
                  <div className="title text-lg fw-medium">Order Details</div>
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
                    {/* Add other products similarly */}
                  </ul>
                  <ul className="list-total">
                    <li className="total-item d-flex justify-content-between text-sm">
                      <span>Subtotal:</span>
                      <span className="price-sub fw-medium">$370.00 USD</span>
                    </li>
                    <li className="total-item d-flex justify-content-between text-sm">
                      <span>Discount:</span>
                      <span className="price-discount fw-medium">-$48.00 USD</span>
                    </li>
                    <li className="total-item d-flex justify-content-between text-sm">
                      <span>Shipping:</span>
                      <span className="price-ship fw-medium">$10.00 USD</span>
                    </li>
                    <li className="total-item d-flex justify-content-between text-sm">
                      <span>Tax:</span>
                      <span className="price-tax fw-medium">$48.00 USD</span>
                    </li>
                  </ul>
                  <div className="subtotal d-flex justify-content-between text-lg fw-medium">
                    <span>Subtotal:</span>
                    <span className="total-price-order">$380.00 USD</span>
                  </div>
                </div>

                {/* Feedback Form */}
                <div className="cart-box">
                  <form className="feedback-box">
                    <h6 className="title">Give us a feedback</h6>
                    <p className="text text-main text-sm">
                      Let us know what you think about the shopping experience, and get a gift coupon for the next shopping.
                    </p>
                    <fieldset className="tf-field style-2 style-3 mb_16">
                      <input className="tf-field-input tf-input" id="name" name="name" type="text" placeholder=" " />
                      <label htmlFor="name" className="tf-field-label">Name</label>
                    </fieldset>
                    <fieldset className="tf-field style-2 style-3 mb_16">
                      <input className="tf-field-input tf-input" id="email" name="email" type="email" placeholder=" " />
                      <label htmlFor="email" className="tf-field-label">Email</label>
                    </fieldset>
                    <div className="box-exp mb_16">
                      <p className="mb_6 text-main text-sm">How was your experience?</p>
                      <div className="list-exp">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <label key={value} htmlFor={`exp${value}`} className="check-exp">
                            <input type="radio" id={`exp${value}`} name="checkExperience" className="tf-check-rounded" />
                            <span className="text-exp text-sm">{value}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <fieldset className="mb_16">
                      <textarea id="desc" className="style-2" placeholder="Share your experience..." />
                    </fieldset>
                    <button className="tf-btn btn-dark2 w-100 animate-btn" type="submit">Send</button>
                  </form>

                  {/* Social Sharing */}
                  <div className="box-share-social">
                    <h6 className="title">Share the love</h6>
                    <div className="tf-social-icon style-large">
                      <a href="https://www.facebook.com/" className="social-item social-facebook"><i className="icon icon-fb" /></a>
                      <a href="https://www.instagram.com/" className="social-item social-instagram"><i className="icon icon-instagram" /></a>
                      <a href="https://x.com/" className="social-item social-x"><i className="icon icon-x" /></a>
                      <a href="https://www.snapchat.com/" className="social-item social-snapchat"><i className="icon icon-snapchat" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Side */}
          </div>
        </div>
      </div>
      {/* Footer Include Placeholder */}
    </div>
  );
};

export default OrderSuccessPage;
