import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import Last from './Last';

const First = () => {
  return (
    <header className="header-default header-absolute header-white header-uppercase" id="header">
      <div className="container">
        <div className="row wrapper-header align-items-center">
          {/* Mobile Menu Toggle */}
          <div className="col-md-4 col-3 d-xl-none">
            <button
              className="mobile-menu"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              aria-label="Toggle mobile menu"
            >
              <i className="icon icon-categories1" />
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
            <nav className="box-navigation text-center style-space" aria-label="Main navigation">
              <ul className="box-nav-menu justify-content-start">
                <li className="menu-item">
                  <Link to="/" className="item-link">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/product" className="item-link">Shop</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about-us" className="item-link">Our Story</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact" className="item-link">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Logo */}
          <div className="col-xl-2 col-md-4 col-6 text-xxl-center">
            <Link to="/" className="logo-header" aria-label="Home">
              <img src="/images/logo1.png" alt="Site Logo" className="logo" />
            </Link>
          </div>

          {/* Header Icons */}
          <div className="col-xxl-5 col-xl-4 col-md-4 col-3">
            <ul className="nav-icon d-flex justify-content-end align-items-center">
              <li className="nav-search">
                <button className="nav-icon-item" data-bs-toggle="modal" data-bs-target="#search" aria-label="Search">
                  <i className="icon icon-search" />
                </button>
              </li>
              <li className="nav-account">
                <button className="nav-icon-item" data-bs-toggle="offcanvas" data-bs-target="#login" aria-label="Login">
                  <i className="icon icon-user" />
                </button>
              </li>
              <li className="nav-wishlist">
                <Link to="/wish-list" className="nav-icon-item" aria-label="Wishlist">
                  <i className="icon icon-heart" />
                  <span className="count-box">0</span>
                </Link>
              </li>
              <li className="nav-cart pl">
                <button className="nav-icon-item" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-label="Cart">
                  <i className="icon icon-cart" />
                  <span className="count-box">2</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sections Below Header */}
      <main>
        <Slider />
        <FeaturedProducts />
        <Testimonials />
        <Last />
      </main>
    </header>
  );
};

export default First;
