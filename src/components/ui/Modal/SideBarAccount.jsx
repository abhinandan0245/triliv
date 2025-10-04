import React from "react";
import { Link } from "react-router-dom";

const SidebarAccount = ({ activeItem = "account-detail" }) => {
  return (
    <>


      {/* Mobile Offcanvas Sidebar */}
      <div
         className="offcanvas offcanvas-start d-lg-none"
  tabIndex="-1"
  id="sidebarAccount"
  aria-labelledby="sidebarAccountLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarAccountLabel">My Account</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="my-account-nav">
            <li>
              <Link
                to="/account-page"
                className={`text-sm link fw-medium my-account-nav-item ${
                  activeItem === "dashboard" ? "active" : ""
                }`}
                data-bs-dismiss="offcanvas"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/account-orders"
                className={`text-sm link fw-medium my-account-nav-item ${
                  activeItem === "orders" ? "active" : ""
                }`}
                data-bs-dismiss="offcanvas"
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                to="/wish-list"
                className={`text-sm link fw-medium my-account-nav-item ${
                  activeItem === "wishlist" ? "active" : ""
                }`}
                data-bs-dismiss="offcanvas"
              >
                My Wishlist
              </Link>
            </li>
            <li>
              <Link
                to="/account-addresses"
                className={`text-sm link fw-medium my-account-nav-item ${
                  activeItem === "addresses" ? "active" : ""
                }`}
                data-bs-dismiss="offcanvas"
              >
                Addresses
              </Link>
            </li>
            <li>
              <Link
                to="/account-detail"
                className={`text-sm link fw-medium my-account-nav-item ${
                  activeItem === "account-detail" ? "active" : ""
                }`}
                data-bs-dismiss="offcanvas"
              >
                Account Details
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-sm link fw-medium my-account-nav-item"
                data-bs-dismiss="offcanvas"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarAccount;