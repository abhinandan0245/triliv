import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginPopup from './Login';

const MobileMenu = ({ show, handleClose, toggleLogin }) => {
  return (
    <Offcanvas 
      show={show} 
      onHide={handleClose} 
      className="offcanvas offcanvas-start canvas-mb"
      placement="start"
    >
      <button 
        className="icon-close icon-close-popup" 
         data-bs-dismiss="offcanvas"
        onClick={handleClose} 
        aria-label="Close"
      ></button>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className='nav-mb-item'>
                <Link to="/" className="item-link  mb-menu-link" onClick={handleClose}>
                  Home
                </Link>
              </li>
              <li className='nav-mb-item'>
                <Link to="/shop" className="item-link mb-menu-link" onClick={handleClose}>
                  Shop
                </Link>
              </li>
              <li  className='nav-mb-item'>
                <Link to="/about-us" className="item-link  mb-menu-link" onClick={handleClose}>
                  Our Story
                </Link>
              </li>
              <li  className='nav-mb-item'>
                <Link to="/contact" className="item-link  mb-menu-link" onClick={handleClose}>
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-other-content">
            <div className="group-icon">
              <Link to="/wish-list" className="site-nav-icon" onClick={handleClose}>
                <i className="icon icon-heart"></i>
                Wishlist
              </Link>
              <a 
                href="#login" 
                className="site-nav-icon"
                onClick={(e) => {
                  e.preventDefault();
                  handleClose();
                  toggleLogin();
                }}
              >
                <i className="icon icon-user"></i>
                Login
              </a>
            </div>
            <div className="mb-notice">
              <Link to="/contact-us" className="text-need" onClick={handleClose}>
                Need Help?
              </Link>
            </div>
            <div className="mb-contact">
              <p>Address: 123 Yarran st, Punchbowl, NSW 2196, Australia</p>
            </div>
            <ul className="mb-info">
              <li>
                Email:
                <b className="fw-medium">clientcare@ecom.com</b>
              </li>
              <li>
                Phone:
                <b className="fw-medium">1.888.838.3022</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Offcanvas>
  );
};

export default MobileMenu;