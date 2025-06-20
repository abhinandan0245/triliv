import React from "react";

const FAQs = () => {
  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Frequently Asked Questions</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">Home</a>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">FAQs</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="s-faq flat-spacing-13">
        <div className="container">
          <div className="row">
            {/* Contact Sidebar */}
            <div className="col-lg-4">
              <div className="sb-contact sticky-top">
                <p className="title">Contact Us</p>
                <p className="sub">
                  If you have an issue or question that requires immediate assistance, you can click
                  the button below to chat live with a Customer Service representative.
                  <br /><br />
                  Please allow 06 - 12 business days from the time your package arrives back to us for
                  a refund to be issued.
                </p>
                <div className="btn-group">
                  <a href="/contact-us" className="tf-btn animate-btn">Contact us</a>
                  <a href="#" className="tf-btn btn-white animate-btn animate-dark">Chat with us</a>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="col-lg-8">
              <ul className="faq-list">

                {/* Shopping Information */}
                <li className="faq-item">
                  <p className="name-faq">Shopping Information</p>
                  <div className="faq-wrap" id="accordionShoping">
                    {[
                      {
                        id: "collapseOne",
                        title: "How long will it take for my order to ship?",
                        content: "Orders are typically processed and shipped within 1–3 business days. You'll receive a confirmation email once your order is on the way.",
                        show: true
                      },
                      {
                        id: "collapseTwo",
                        title: "Do you offer free shipping?",
                        content: "Yes, we offer free standard shipping on orders over $50. Shipping rates will be calculated at checkout for smaller orders."
                      },
                      {
                        id: "collapseThree",
                        title: "Can I change my shipping address after placing an order?",
                        content: "If your order hasn’t been shipped yet, we may be able to update your shipping address. Please contact our support team as soon as possible for assistance."
                      },
                      {
                        id: "collapseFour",
                        title: "What if my package is delayed or lost?",
                        content: "If your package is delayed or lost, please reach out to our customer support. We’ll work with the carrier to locate your order or arrange a replacement if necessary."
                      }
                    ].map((item, idx) => (
                      <div className="widget-accordion" key={item.id}>
                        <div
                          className={`accordion-title ${!item.show ? "collapsed" : ""}`}
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded={item.show ? "true" : "false"}
                          aria-controls={item.id}
                          role="button"
                        >
                          <span>{item.title}</span>
                          <span className="icon icon-arrow-down" />
                        </div>
                        <div
                          id={item.id}
                          className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                          data-bs-parent="#accordionShoping"
                        >
                          <div className="accordion-body widget-desc">
                            <p className="text-main">{item.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>

                {/* Payment Information */}
                <li className="faq-item">
                  <p className="name-faq">Payment Information</p>
                  <div className="faq-wrap" id="accordionPayment">
                    {[
                      {
                        id: "collapsePaymentOne",
                        title: "What payment methods do you accept?",
                        content: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted for your protection.",
                        show: true
                      },
                      {
                        id: "collapsePaymentTwo",
                        title: "Is my payment information secure?",
                        content: "Yes, your payment information is 100% secure. We use industry-standard encryption and trusted payment gateways to ensure your data is protected at all times."
                      },
                      {
                        id: "collapsePaymentThree",
                        title: "Can I use multiple payment methods for my order?",
                        content: "At this time, we only accept one payment method per order. We recommend choosing the option that works best for you at checkout."
                      },
                      {
                        id: "collapsePaymentFour",
                        title: "When will I be charged for my order?",
                        content: "Your payment is processed immediately after you complete your purchase. If there are any issues with the transaction, you’ll be notified right away."
                      }
                    ].map((item, idx) => (
                      <div className="widget-accordion" key={item.id}>
                        <div
                          className={`accordion-title ${!item.show ? "collapsed" : ""}`}
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded={item.show ? "true" : "false"}
                          aria-controls={item.id}
                          role="button"
                        >
                          <span>{item.title}</span>
                          <span className="icon icon-arrow-down" />
                        </div>
                        <div
                          id={item.id}
                          className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                          data-bs-parent="#accordionPayment"
                        >
                          <div className="accordion-body widget-desc">
                            <p className="text-main">{item.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>

                {/* Return & Exchange */}
                <li className="faq-item">
                  <p className="name-faq">Return & Exchange</p>
                  <div className="faq-wrap" id="accordionExchange">
                    {[
                      {
                        id: "collapseExchangeOne",
                        title: "What is your return policy?",
                        content: "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and in their original condition.",
                        show: true
                      },
                      {
                        id: "collapseExchangeTwo",
                        title: "How do I return an item?",
                        content: "Simply contact our customer service team for a return authorization, and we’ll provide instructions for shipping the item back."
                      },
                      {
                        id: "collapseExchangeThree",
                        title: "Are there any items that cannot be returned?",
                        content: "Yes, sale items, personalized products, and undergarments are non-returnable."
                      },
                      {
                        id: "collapseExchangeFour",
                        title: "When will I receive my refund?",
                        content: "Once your return is received and inspected, we will process the refund within 5-7 business days."
                      }
                    ].map((item, idx) => (
                      <div className="widget-accordion" key={item.id}>
                        <div
                          className={`accordion-title ${!item.show ? "collapsed" : ""}`}
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded={item.show ? "true" : "false"}
                          aria-controls={item.id}
                          role="button"
                        >
                          <span>{item.title}</span>
                          <span className="icon icon-arrow-down" />
                        </div>
                        <div
                          id={item.id}
                          className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                          data-bs-parent="#accordionExchange"
                        >
                          <div className="accordion-body widget-desc">
                            <p className="text-main">{item.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
