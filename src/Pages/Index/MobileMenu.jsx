import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileMenu">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <nav className="mobile-nav">
          <ul className="mobile-menu">
            <li><Link to="/" className="mobile-menu-item">Home</Link></li>
            <li><Link to="/products" className="mobile-menu-item">Shop</Link></li>
            <li><Link to="/about" className="mobile-menu-item">Our Story</Link></li>
            <li><Link to="/contact" className="mobile-menu-item">Contact Us</Link></li>
            <li><Link to="/blog" className="mobile-menu-item">Blog</Link></li>
          </ul>
          
          <div className="mobile-account">
            <Link to="/account" className="btn btn-outline">My Account</Link>
            <Link to="/wishlist" className="btn btn-outline">Wishlist</Link>
          </div>
          
          <div className="mobile-social">
            <a href="#"><i className="icon icon-fb"></i></a>
            <a href="#"><i className="icon icon-instagram"></i></a>
            <a href="#"><i className="icon icon-x"></i></a>
            <a href="#"><i className="icon icon-snapchat"></i></a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;