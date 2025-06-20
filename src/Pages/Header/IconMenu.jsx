import React from "react";
import { Link } from "react-router-dom";

const IconMenu = () => (
  <ul className="nav-icon d-flex justify-content-end align-items-center">
    <li className="nav-search">
      <a href="#search" data-bs-toggle="modal" className="nav-icon-item" aria-label="Search"><i className="icon icon-search" /></a>
    </li>
    <li className="nav-account">
      <a href="#login" data-bs-toggle="offcanvas" aria-controls="login" className="nav-icon-item" aria-label="Account"><i className="icon icon-user" /></a>
    </li>
    <li className="nav-wishlist">
      <Link to="/wish-list" className="nav-icon-item" aria-label="Wishlist">
        <i className="icon icon-heart" /><span className="count-box">0</span>
      </Link>
    </li>
    <li className="nav-cart">
      <a href="#shoppingCart" data-bs-toggle="offcanvas" className="nav-icon-item" aria-label="Cart">
        <i className="icon icon-cart" /><span className="count-box">0</span>
      </a>
    </li>
  </ul>
);

export default IconMenu;