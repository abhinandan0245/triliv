import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => (
  <ul className="box-nav-menu">
    {[
      { to: "/", label: "Home" },
      { to: "/product", label: "Shop" },
      { to: "/about-us", label: "Our Story" },
      { to: "/contact", label: "Contact Us" }
    ].map(({ to, label }) => (
      <li className="menu-item" key={to}>
        <Link to={to} className="item-link">{label}<i className="icon" /></Link>
      </li>
    ))}
  </ul>
);

export default NavMenu;
