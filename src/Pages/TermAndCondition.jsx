import React from "react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Terms &amp; Condition</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">Home</Link>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Terms &amp; Condition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Condition Content */}
      <section className="s-term-user flat-spacing-13">
        <div className="container">
          <div className="content">
            {/* 1. Info We Collect */}
            <div className="term-item">
              <p className="term-title">1. Information We Collect</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  When you visit the Site, we collect information about your device (browser, IP, timezone, cookies, etc.), 
                  pages viewed, referring websites, and interaction patterns. This is called "Device Information".
                </p>
                <p className="term-text body-text text-main">
                  We use:
                  <br />• "Cookies"
                  <br />• "Log files"
                  <br />• "Web beacons", "Tags", and "Pixels"
                  <br /><br />
                  Also, when you make a purchase, we collect "Order Information" like your name, billing/shipping address, 
                  payment info, email, and phone.
                </p>
              </div>
            </div>

            {/* 2. How We Use Your Info */}
            <div className="term-item">
              <p className="term-title">2. How We Use Your Information</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  We use Order Information to:
                  <br />– Process your orders
                  <br />– Communicate with you
                  <br />– Screen for fraud
                  <br />– Send relevant offers (if opted in)
                  <br /><br />
                  Device Information helps us detect fraud and improve site experience via analytics.
                </p>
              </div>
            </div>

            {/* 3. Sharing Info */}
            <div className="term-item">
              <p className="term-title">3. Sharing Your Personal Information</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  We share info with:
                  <br />
                  – <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer">Shopify</a>
                  <br />
                  – <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Analytics</a>
                  (<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">opt-out</a>)
                  <br /><br />
                  We may also share data to comply with legal obligations or protect our rights.
                </p>
              </div>
            </div>

            {/* 4. Data Retention */}
            <div className="term-item">
              <p className="term-title">4. Data Retention</p>
              <p className="term-text body-text text-main">
                We keep Order Information unless requested to delete it.
              </p>
            </div>

            {/* 5. Your Rights */}
            <div className="term-item">
              <p className="term-title">5. Your Rights</p>
              <p className="term-text body-text text-main">
                You are responsible for your account and password. We may refuse service or cancel orders. 
                By ordering, you confirm you're 18+ and providing truthful info.
              </p>
            </div>

            {/* 6. Changes */}
            <div className="term-item">
              <p className="term-title">6. Changes</p>
              <p className="term-text body-text text-main">
                This Terms & Conditions policy may be updated periodically for legal or operational reasons.
              </p>
            </div>

            {/* 7. Contact Us */}
            <div className="term-item">
              <p className="term-title">7. Contact Us</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  Questions or complaints? Email us at:
                </p>
                <a href="mailto:contact@vineta.com" className="link body-text fw-medium">contact@vineta.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
