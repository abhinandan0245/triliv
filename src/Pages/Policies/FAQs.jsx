import React, { useMemo, useState } from "react";
import { useGetFaqQuery } from "../../services/faq/faqApi";

const FAQPage = () => {
  // State for managing accordion open/close states
  const { data: faqs = [], isLoading } = useGetFaqQuery();

  const [activeAccordions, setActiveAccordions] = useState({
    shopping: "collapseOne",
    payment: "collapsePaymentOne",
    exchange: "collapseExchangeOne",
  });

   // Group FAQs by title (section)
  const groupedFaqs = useMemo(() => {
    const groups = {};
    faqs.forEach(faq => {
      if (!groups[faq.title]) groups[faq.title] = [];
      groups[faq.title].push(faq);
    });
    return groups;
  }, [faqs]);

  // Function to toggle accordion items
  // const toggleAccordion = (accordionGroup, target) => {
  //   setActiveAccordions((prev) => ({
  //     ...prev,
  //     [accordionGroup]: prev[accordionGroup] === target ? "" : target,
  //   }));
  // };

  // Accordion state
  const [openIndex, setOpenIndex] = useState({});

  const toggleAccordion = (section, idx) => {
    setOpenIndex(prev => ({
      ...prev,
      [section]: prev[section] === idx ? null : idx
    }));
  };

  if (isLoading) return <p>Loading...</p>;



  return (
    <>
    

      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Frequently Asked Questions</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">
                Home
              </a>
              <div className="breadcrumb-item dot">
                <span></span>
              </div>
              <div className="breadcrumb-item current">FAQs</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}

      {/* FAQ */}
      <section className="s-faq flat-spacing-13">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sb-contact sticky-top">
                <p className="title">Contact Us</p>
                <p className="sub">
                  If you have an issue or question that requires immediate
                  assistance, you can click the button below to chat live with a
                  Customer Service representative.
                  <br />
                  <br />
                  Please allow 06 - 12 business days from the time your package
                  arrives back to us for a refund to be issued.
                </p>
                <div className="btn-group">
                  <a href="contact" className="tf-btn animate-btn">
                    Contact us
                  </a>
                  <a
                    href="#"
                    className="tf-btn btn-white animate-btn animate-dark"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              {/* <ul className="faq-list">
                <li className="faq-item">
                  <p className="name-faq">Shopping Information</p>
                  <div className="faq-wrap" id="accordionShoping">
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.shopping === "collapseOne"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("shopping", "collapseOne")
                        }
                        role="button"
                      >
                        <span>How long will it take for my order to ship?</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${
                          activeAccordions.shopping === "collapseOne"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionShoping"
                      >
                        <div className="accordion-body widget-desc">
                          <p className="text-main">
                            Orders are typically processed and shipped within
                            1–3 business days. You'll receive a confirmation
                            email once your order is on the way
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.shopping === "collapseTwo"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("shopping", "collapseTwo")
                        }
                        role="button"
                      >
                        <span>Do you offer free shipping?</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapseTwo"
                        className={`accordion-collapse collapse ${
                          activeAccordions.shopping === "collapseTwo"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionShoping"
                      >
                        <div className="accordion-body widget-material">
                          <p className="text-main">
                            Yes, we offer free standard shipping on orders over
                            $50. Shipping rates will be calculated at checkout
                            for smaller orders.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.shopping === "collapseThree"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("shopping", "collapseThree")
                        }
                        role="button"
                      >
                        <span>
                          Can I change my shipping address after placing an
                          order?
                        </span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapseThree"
                        className={`accordion-collapse collapse ${
                          activeAccordions.shopping === "collapseThree"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionShoping"
                      >
                        <div className="accordion-body">
                          <p className="text-main">
                            If your order hasn't been shipped yet, we may be
                            able to update your shipping address. Please contact
                            our support team as soon as possible for assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.shopping === "collapseFour"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("shopping", "collapseFour")
                        }
                        role="button"
                      >
                        <span>What if my package is delayed or lost?</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapseFour"
                        className={`accordion-collapse collapse ${
                          activeAccordions.shopping === "collapseFour"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionShoping"
                      >
                        <div className="accordion-body">
                          <p className="text-main">
                            If your package is delayed or lost, please reach out
                            to our customer support. We'll work with the carrier
                            to locate your order or arrange a replacement if
                            necessary.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="faq-item">
                  <p className="name-faq">Payment Information</p>
                  <div className="faq-wrap" id="accordionPayment">
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.payment === "collapsePaymentOne"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("payment", "collapsePaymentOne")
                        }
                        role="button"
                      >
                        <span>What payment methods do you accept?</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapsePaymentOne"
                        className={`accordion-collapse collapse ${
                          activeAccordions.payment === "collapsePaymentOne"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionPayment"
                      >
                        <div className="accordion-body widget-desc">
                          <p className="text-main">
                            We accept all major credit cards, PayPal, Apple Pay,
                            and Google Pay. All transactions are secure and
                            encrypted for your protection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.payment === "collapsePaymentTwo"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("payment", "collapsePaymentTwo")
                        }
                        role="button"
                      >
                        <span>Is my payment information secure?</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapsePaymentTwo"
                        className={`accordion-collapse collapse ${
                          activeAccordions.payment === "collapsePaymentTwo"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionPayment"
                      >
                        <div className="accordion-body widget-material">
                          <p className="text-main">
                            Yes, your payment information is 100% secure. We use
                            industry-standard encryption and trusted payment
                            gateways to ensure your data is protected at all
                            times.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.payment === "collapsePaymentThree"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("payment", "collapsePaymentThree")
                        }
                        role="button"
                      >
                        <span>
                          Can I use multiple payment methods for my order?
                        </span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapsePaymentThree"
                        className={`accordion-collapse collapse ${
                          activeAccordions.payment === "collapsePaymentThree"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionPayment"
                      >
                        <div className="accordion-body">
                          <p className="text-main">
                            At this time, we only accept one payment method per
                            order. We recommend choosing the option that works
                            best for you at checkout.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.payment === "collapsePaymentFour"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("payment", "collapsePaymentFour")
                        }
                        role="button"
                      >
                        <span>When will I be charged for my order?</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapsePaymentFour"
                        className={`accordion-collapse collapse ${
                          activeAccordions.payment === "collapsePaymentFour"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionPayment"
                      >
                        <div className="accordion-body">
                          <p className="text-main">
                            Your payment is processed immediately after you
                            complete your purchase. If there are any issues with
                            the transaction, you'll be notified right away.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="faq-item">
                  <p className="name-faq">Return & Exchange</p>
                  <div className="faq-wrap" id="accordionExchange">
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.exchange === "collapseExchangeOne"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("exchange", "collapseExchangeOne")
                        }
                        role="button"
                      >
                        <span>What is your return policy?</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapseExchangeOne"
                        className={`accordion-collapse collapse ${
                          activeAccordions.exchange === "collapseExchangeOne"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExchange"
                      >
                        <div className="accordion-body widget-desc">
                          <p className="text-main">
                            We accept returns within 14 days of delivery. Items
                            must be unworn, unwashed, and in their original
                            condition.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.exchange === "collapseExchangeTwo"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("exchange", "collapseExchangeTwo")
                        }
                        role="button"
                      >
                        <span>How do I return an item?</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapseExchangeTwo"
                        className={`accordion-collapse collapse ${
                          activeAccordions.exchange === "collapseExchangeTwo"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExchange"
                      >
                        <div className="accordion-body widget-material">
                          <p className="text-main">
                            Simply contact our customer service team for a
                            return authorization, and we'll provide instructions
                            for shipping the item back.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.exchange === "collapseExchangeThree"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("exchange", "collapseExchangeThree")
                        }
                        role="button"
                      >
                        <span>
                          Are there any items that cannot be returned?
                        </span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapseExchangeThree"
                        className={`accordion-collapse collapse ${
                          activeAccordions.exchange === "collapseExchangeThree"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExchange"
                      >
                        <div className="accordion-body">
                          <p className="text-main">
                            Yes, sale items, personalized products, and
                            undergarments are non-returnable.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="widget-accordion">
                      <div
                        className={`accordion-title ${
                          activeAccordions.exchange === "collapseExchangeFour"
                            ? ""
                            : "collapsed"
                        }`}
                        onClick={() =>
                          toggleAccordion("exchange", "collapseExchangeFour")
                        }
                        role="button"
                      >
                        <span>When will I receive my refund?</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div
                        id="collapseExchangeFour"
                        className={`accordion-collapse collapse ${
                          activeAccordions.exchange === "collapseExchangeFour"
                            ? "show"
                            : ""
                        }`}
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExchange"
                      >
                        <div className="accordion-body">
                          <p className="text-main">
                            Once your return is received and inspected, we will
                            process the refund within 5-7 business days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
              <ul className="faq-list">
          {Object.entries(groupedFaqs).map(([section, items]) => (
            <li className="faq-item" key={section}>
              <p className="name-faq">{section}</p>
              <div className="faq-wrap">
                {items.map((faq, idx) => (
                  <div className="widget-accordion" key={faq.id}>
                    <div
                      className={`accordion-title ${openIndex[section] === idx ? "" : "collapsed"}`}
                      onClick={() => toggleAccordion(section, idx)}
                      role="button"
                    >
                      <span>{faq.question}</span>
                      <span className="icon icon-arrow-down"></span>
                    </div>
                    <div
                      className={`accordion-collapse collapse ${openIndex[section] === idx ? "show" : ""}`}
                    >
                      <div className="accordion-body widget-desc">
                        <p className="text-main">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /FAQ */}

      
    </>
  );
};

export default FAQPage;
