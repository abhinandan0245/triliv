import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-default footer-bg xl-pb-70 bg-dark-green-4">
      {/* Footer Top Section */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-wrap">
            <div className="footer-logo">
              <a href="/">
                <img src="/images/logo1.png" className="logo" alt="Company Logo" />
              </a>
            </div>
            
            <ul className="tf-social-icon style-large">
              <li>
                <a href="https://www.facebook.com/" className="social-item social-facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="social-item social-instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" className="social-item social-linkedin">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="https://x.com/" className="social-item social-x">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Body Section */}
      <div className="footer-body">
        <div className="container">
          <div className="row-footer">
            {/* Contact Information */}
            <div className="footer-col-block s1">
              <h3 className="footer-heading footer-heading-mobile text-xl fw-medium">
                Business Contact
              </h3>
              <div className="tf-collapse-content">
                <div className="footer-contact">
                  <ul className="footer-info">
                    <li className="item">
                      <span className="box-icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </span>
                      <a 
                        href="https://www.google.com/maps?q=123Yarranst,Punchbowl,NSW2196,Australia" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        123 Yarran st, Punchbowl, NSW 2196, Australia
                      </a>
                    </li>
                    <li className="item">
                      <span className="box-icon">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </span>
                      <a href="tel:18888383022">(64) 8342 1245</a>
                    </li>
                    <li className="item">
                      <span className="box-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <a href="mailto:support@example.com">support@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="footer-inner-wrap footer-col-block s2">
              <h3 className="footer-heading footer-heading-mobile text-xl fw-medium">
                Subscribe Newsletter
              </h3>
              <div className="tf-collapse-content">
                <div className="footer-newsletter">
                  <p>
                    We invite you to register to read the latest news, offers and events about
                    our company. We promise not spam your inbox.
                  </p>
                  <form className="form-newsletter">
                    <fieldset className="email">
                      <input 
                        type="email" 
                        placeholder="Email address" 
                        required 
                      />
                    </fieldset>
                    <div className="button-submit">
                      <button className="subscribe-button animate-btn" type="submit">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* About and Resource Links */}
            <div className="footer-inner-wrap s3">
              <div className="footer-col-block inner-col">
                <h3 className="footer-heading footer-heading-mobile text-xl fw-medium">About Us</h3>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list">
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/sitemap">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-col-block inner-col">
                <h3 className="footer-heading footer-heading-mobile text-xl fw-medium">Resource</h3>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list">
                    <li><a href="/privacy-policy">Privacy Policies</a></li>
                    <li><a href="/terms">Terms & Conditions</a></li>
                    <li><a href="/returns">Returns & Refunds</a></li>
                    <li><a href="/faq">FAQ's</a></li>
                    <li><a href="/shipping">Shipping</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrap">
            <p>Copyright © {currentYear} by <span className="fw-medium">Triliv</span> All Rights Reserved.</p>
            <div className="box-right">
              <a className="link" href="/privacy-policy">Privacy Policy</a>
              <a className="link" href="/terms">Term of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;