import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark-green-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-widget">
              <div className="logo-footer">
                <img src="images/logo1.png" alt="logo" />
              </div>
              <p className="text-white">
                Bringing nature's beauty into your home with our premium selection of indoor plants.
              </p>
              <div className="social-links">
                <a href="#"><i className="icon icon-fb"></i></a>
                <a href="#"><i className="icon icon-instagram"></i></a>
                <a href="#"><i className="icon icon-x"></i></a>
                <a href="#"><i className="icon icon-snapchat"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="footer-widget">
              <h4 className="widget-title">Shop</h4>
              <ul className="footer-menu">
                <li><a href="/products">All Plants</a></li>
                <li><a href="/collections">Collections</a></li>
                <li><a href="/new-arrivals">New Arrivals</a></li>
                <li><a href="/best-sellers">Best Sellers</a></li>
                <li><a href="/sale">Sale</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="footer-widget">
              <h4 className="widget-title">About</h4>
              <ul className="footer-menu">
                <li><a href="/about">Our Story</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/press">Press</a></li>
                <li><a href="/sustainability">Sustainability</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="footer-widget">
              <h4 className="widget-title">Help</h4>
              <ul className="footer-menu">
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/shipping">Shipping</a></li>
                <li><a href="/returns">Returns</a></li>
                <li><a href="/plant-care">Plant Care</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-widget">
              <h4 className="widget-title">Subscribe</h4>
              <p className="text-white">Get 10% off your first order when you sign up</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">© {new Date().getFullYear()} Triliv. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <div className="payment-methods">
                <img src="images/payment-methods.png" alt="payment methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;