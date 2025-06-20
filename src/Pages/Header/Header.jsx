import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import MarqueeBanner from "./MarqueeBanner";
import NavMenu from "./NavMenu";
import IconMenu from "./IconMenu";
// import "../../css/styles.css";

const Header = () => {
  return (
    <>
      {/* Scroll Top Button */}
      <button id="goTop" className="pos1" aria-label="Scroll to top">
        <span className="border-progress" />
        <span className="icon icon-arrow-right" />
      </button>

      {/* Preloader */}
      <div
        className="preload preload-container"
        role="status"
        aria-label="Loading"
      >
        <div className="preload-logo">
          <div className="spinner" />
        </div>
      </div>

      {/* Main Wrapper */}
      <div id="wrapper">
        {/* Top Bar */}
        <div className="tf-topbar bg-dark-5 topbar-bg">
          <div className="container">
            <div className="topbar-wraper">
              <div className="d-none d-xl-block flex-shrink-0">
                <SocialLinks />
              </div>
              <div className="overflow-hidden">
                <MarqueeBanner />
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <header id="header" className="header-default">
          <div className="container">
            <div className="row wrapper-header align-items-center">
              {/* Mobile Menu Icon */}
              <div className="col-md-4 col-3 d-xl-none">
                <a
                  href="#mobileMenu"
                  className="mobile-menu"
                  data-bs-toggle="offcanvas"
                  aria-controls="mobileMenu"
                  aria-label="Mobile Menu"
                >
                  <i className="icon icon-categories1" />
                </a>
              </div>

              {/* Logo */}
              <div className="col-xl-2 col-md-4 col-6">
                <Link to="/" className="logo-header">
                  <img
                    src="images/logo1.png"
                    alt="Company Logo"
                    className="logo"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="col-xl-8 d-none d-xl-block">
                <nav className="box-navigation text-center">
                  <NavMenu />
                </nav>
              </div>

              {/* Right Icon Menu */}
              <div className="col-xl-2 col-md-4 col-3">
                <IconMenu />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
