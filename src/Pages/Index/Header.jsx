import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header-default header-absolute header-white header-uppercase">
      <div className="container">
        <div className="row wrapper-header align-items-center">
          <div className="col-md-4 col-3 d-xl-none">
            <a href="#mobileMenu" className="mobile-menu" data-bs-toggle="offcanvas" aria-controls="mobileMenu">
              <i className="icon icon-categories1"></i>
            </a>
          </div>
          <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
            <nav className="box-navigation text-center style-space">
              <ul className="box-nav-menu justify-content-start">
                <li className="menu-item">
                  <Link to="/" className="item-link">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/products" className="item-link">Shop</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about" className="item-link">Our Story</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact" className="item-link">Contact US</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-2 col-md-4 col-6 text-xxl-center">
            <Link to="/" className="logo-header">
              <img src="images/logo1.png" alt="logo" className="logo" />
            </Link>
          </div>
          <div className="col-xxl-5 col-xl-4 col-md-4 col-3">
            <ul className="nav-icon d-flex justify-content-end align-items-center">
              <li className="nav-search">
                <a href="#search" data-bs-toggle="modal" className="nav-icon-item">
                  <i className="icon icon-search"></i>
                </a>
              </li>
              <li className="nav-account">
                <a href="#login" data-bs-toggle="offcanvas" className="nav-icon-item">
                  <i className="icon icon-user"></i>
                </a>
              </li>
              <li className="nav-wishlist">
                <Link to="/wishlist" className="nav-icon-item">
                  <i className="icon icon-heart"></i>
                  <span className="count-box">0</span>
                </Link>
              </li>
              <li className="nav-cart pl">
                <a href="#shoppingCart" data-bs-toggle="offcanvas" className="nav-icon-item">
                  <i className="icon icon-cart"></i>
                  <span className="count-box">2</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;