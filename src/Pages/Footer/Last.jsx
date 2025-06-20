import React from 'react';
import { Link } from 'react-router-dom';

const Last = () => {
  return (
    <footer id="footer" className="footer-default footer-bg xl-pb-70 bg-dark-green-4">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-wrap">
            <div className="footer-logo">
              <Link to="/">
                <img src="/images/logo1.png" className="logo" alt="logo" />
              </Link>
            </div>
            <ul className="tf-social-icon style-large">
              <li>
                <a href="https://www.facebook.com/" className="social-item social-facebook" target="_blank" rel="noopener noreferrer">
                  <i className="icon icon-fb" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="social-item social-instagram" target="_blank" rel="noopener noreferrer">
                  <i className="icon icon-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" className="social-item social-linkedin" target="_blank" rel="noopener noreferrer">
                  <i className="icon icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://x.com/" className="social-item social-x" target="_blank" rel="noopener noreferrer">
                  <i className="icon icon-x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Body */}
      <div className="footer-body">
        <div className="container">
          <div className="row-footer">
            {/* Contact Info Column */}
            <div className="footer-col-block s1">
              <div className="footer-heading footer-heading-mobile text-xl fw-medium">
                Business Contact
              </div>
              <div className="footer-contact">
                <ul className="footer-info">
                  <li className="item">
                    <span className="box-icon">
                      {/* Location Icon SVG */}
                    </span>
                    <a href="https://www.google.com/maps?q=123Yarranst,Punchbowl,NSW2196,Australia" target="_blank" rel="noopener noreferrer">
                      123 Yarran st, Punchbowl, NSW 2196, Australia
                    </a>
                  </li>
                  <li className="item">
                    <span className="box-icon">
                      {/* Phone Icon SVG */}
                    </span>
                    <a href="tel:18888383022">(64) 8342 1245</a>
                  </li>
                  <li className="item">
                    <span className="box-icon">
                      {/* Email Icon SVG */}
                    </span>
                    <a href="mailto:support@example.com">support@example.com</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="footer-inner-wrap footer-col-block s2">
              <div className="footer-heading footer-heading-mobile text-xl fw-medium">
                Subscribe Newsletter
              </div>
              <div className="footer-newsletter">
                <p>
                  We invite you to register to read the latest news, offers and events about
                  our company. We promise not spam your inbox.
                </p>
                <form className="form-newsletter">
                  <input type="email" placeholder="Email address" required />
                  <button type="submit">
                    {/* Arrow Icon SVG */}
                  </button>
                </form>
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer-inner-wrap s3">
              <div className="footer-col-block inner-col">
                <div className="footer-heading footer-heading-mobile text-xl fw-medium">About Us</div>
                <ul className="footer-menu-list">
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/store-location">Sitemap</Link></li>
                </ul>
              </div>
              
              <div className="footer-col-block inner-col">
                <div className="footer-heading footer-heading-mobile text-xl fw-medium">Resource</div>
                <ul className="footer-menu-list">
                  <li><Link to="/privacy-policy">Privacy Policies</Link></li>
                  <li><Link to="/term-and-condition">Terms & Conditions</Link></li>
                  <li><Link to="/return-and-refund">Returns & Refunds</Link></li>
                  <li><Link to="/faq">FAQ's</Link></li>
                  <li><Link to="/shipping">Shipping</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrap">
            <p>Copyright © 2025 by <span className="fw-medium">Triliv</span> All Rights Reserved.</p>
            <div className="box-right">
              <Link to="/privacy-policy" className="link">Privacy Policy</Link>
              <Link to="/term-and-condition" className="link">Term of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Last;