import React from "react";
import { Link } from "react-router-dom";

const ReturnRefund = () => {
  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Return &amp; Refund</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">Home</Link>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Return &amp; Refund</div>
            </div>
          </div>
        </div>
      </section>

      {/* Return & Refund */}
      <section className="s-term-user flat-spacing-13">
        <div className="container">
          <div className="content">
            {/* Section 1 */}
            <div className="term-item">
              <p className="term-title">1. Information We Collect</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  When you visit the Site, we automatically collect certain information about your
                  device, including information about your web browser, IP address, time zone, and
                  some of the cookies that are installed on your device...
                </p>
                <p className="term-text body-text text-main">
                  We collect Device Information using the following technologies:
                </p>
                <p className="term-text body-text text-main">
                  "Cookies"... <br />
                  (.....) <br />
                  "Log files"... <br />
                  "Web beacons"...
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="term-item">
              <p className="term-title">2. How We Use Your Information</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  We use the Order Information that we collect generally to fulfill any orders
                  placed through the Site...
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="term-item">
              <p className="term-title">3. Sharing Your Personal Information</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  We share your Personal Information with third parties...
                  <br />
                  <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer">
                    Shopify Privacy Policy
                  </a><br />
                  <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer">
                    Google Privacy Policy
                  </a><br />
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                    Google Analytics Opt-Out
                  </a>
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="term-item">
              <p className="term-title">4. Data Retention</p>
              <p className="term-text body-text text-main">
                When you place an order through the Site, we will maintain your Order
                Information for our records unless and until you ask us to delete this
                information.
              </p>
            </div>

            {/* Section 5 */}
            <div className="term-item">
              <p className="term-title">5. Your Rights</p>
              <p className="term-text body-text text-main">
                You are responsible for maintaining the confidentiality of your account and
                password information... placing an order, you warrant that you are over 18...
              </p>
            </div>

            {/* Section 6 */}
            <div className="term-item">
              <p className="term-title">6. Changes</p>
              <p className="term-text body-text text-main">
                We may update this Return &amp; Refund from time to time...
              </p>
            </div>

            {/* Section 7 */}
            <div className="term-item">
              <p className="term-title">7. Contact Us</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  For more information about our Return &amp; Refund practices, or to make a complaint,
                  please contact us:
                </p>
                <a href="mailto:contact@vineta.com" className="link body-text fw-medium">
                  contact@vineta.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnRefund;
