import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Privacy Policy</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">Home</Link>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Privacy Policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="s-term-user flat-spacing-13">
        <div className="container">
          <div className="content">
            {/* Section 1 */}
            <div className="term-item">
              <p className="term-title">1. Information We Collect</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  When you visit the Site, we automatically collect certain information...
                  (content continues as-is)...
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="term-item">
              <p className="term-title">2. How We Use Your Information</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  We use the Order Information that we collect generally to fulfill...
                  (content continues as-is)...
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="term-item">
              <p className="term-title">3. Sharing Your Personal Information</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  We share your Personal Information with third parties...
                  (content continues as-is)...
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="term-item">
              <p className="term-title">4. Data Retention</p>
              <p className="term-text body-text text-main">
                When you place an order through the Site...
              </p>
            </div>

            {/* Section 5 */}
            <div className="term-item">
              <p className="term-title">5. Your Rights</p>
              <p className="term-text body-text text-main">
                You are responsible for maintaining the confidentiality of your account...
              </p>
            </div>

            {/* Section 6 */}
            <div className="term-item">
              <p className="term-title">6. Changes</p>
              <p className="term-text body-text text-main">
                We may update this privacy policy from time to time...
              </p>
            </div>

            {/* Section 7 */}
            <div className="term-item">
              <p className="term-title">7. Contact Us</p>
              <div className="text-wrap">
                <p className="term-text body-text text-main">
                  For more information about our privacy practices...
                </p>
                <a
                  href="mailto:contact@vineta.com"
                  className="link body-text fw-medium"
                >
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

export default PrivacyPolicy;
