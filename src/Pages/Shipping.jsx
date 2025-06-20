import React from "react";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Shipping</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">Home</Link>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Shipping</div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Policy */}
      <section className="s-term-user flat-spacing-13">
        <div className="container">
          <div className="content">
            {/* 1. Information We Collect */}
            <div className="term-item">
              <p className="term-title">1. Information We Collect</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  When you visit the Site, we automatically collect certain information about your device, 
                  including your web browser, IP address, time zone, and some cookies. We also collect information 
                  about the web pages you view, search terms, referring websites, and your interaction with the Site. 
                  This is "Device Information".
                </p>
                <p className="term-text body-text text-main">
                  We collect Device Information using:
                  <br /><br />
                  "Cookies", "Log files", "Web beacons", "Tags", and "Pixels". <br /><br />
                  Additionally, when you make a purchase, we collect your name, billing/shipping address, payment 
                  details, email, and phone number – "Order Information".
                </p>
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="term-item">
              <p className="term-title">2. How We Use Your Information</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  We use Order Information to:
                  <br />– Fulfill orders (shipping, invoices, confirmations)<br />
                  – Communicate with you<br />
                  – Screen for fraud<br />
                  – Offer products/services aligned with your preferences<br />
                  Device Information helps us detect risks/fraud and improve user experience through analytics.
                </p>
              </div>
            </div>

            {/* 3. Sharing Your Personal Information */}
            <div className="term-item">
              <p className="term-title">3. Sharing Your Personal Information</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  We share Personal Information with third parties like:
                  <br />
                  <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer">
                    Shopify
                  </a> and <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer">
                    Google Analytics
                  </a>.
                  <br />
                  You can opt-out of Google Analytics here:{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  <br /><br />
                  We may also share data to comply with legal obligations.
                </p>
              </div>
            </div>

            {/* 4. Data Retention */}
            <div className="term-item">
              <p className="term-title">4. Data Retention</p>
              <p className="term-text body-text text-main">
                We retain Order Information unless you request deletion.
              </p>
            </div>

            {/* 5. Your Rights */}
            <div className="term-item">
              <p className="term-title">5. Your Rights</p>
              <p className="term-text body-text text-main">
                You are responsible for your account credentials. We reserve the right to refuse service, 
                terminate accounts, and cancel orders if terms are violated.
              </p>
            </div>

            {/* 6. Changes */}
            <div className="term-item">
              <p className="term-title">6. Changes</p>
              <p className="term-text body-text text-main">
                This shipping policy may change to reflect updates in our process, legal requirements, or 
                operational needs.
              </p>
            </div>

            {/* 7. Contact Us */}
            <div className="term-item">
              <p className="term-title">7. Contact Us</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  For questions, concerns, or complaints, reach out to us at:
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

export default Shipping;
