import React from "react";

import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer/Footer";

const AccountAddress = () => {
  return (
    <>
      <Header />

      {/* Title Section */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">Addresses</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">
                Home
              </Link>
              <div className="breadcrumb-item dot">
                <span />
              </div>
              <div className="breadcrumb-item current">Addresses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flat-spacing-13">
        <div className="container-7">
          {/* Sidebar Toggle for Mobile */}
          <div className="btn-sidebar-mb d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
              <i className="icon icon-sidebar" />
            </button>
          </div>

          <div className="main-content-account">
            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
              <ul className="my-account-nav">
                <li>
                  <Link
                    to="/account-page"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account-orders"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wish-list"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    My Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account-addresses"
                    className="text-sm link fw-medium my-account-nav-item active"
                  >
                    Addresses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account-details"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Account Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>

            <div className="my-acount-content account-address">
              <h6 className="title-account">Your addresses (2)</h6>

              <div className="widget-inner-address">
                <button className="tf-btn btn-add-address animate-btn">
                  Add new address
                </button>

                {/* Address Form */}
                <form className="wd-form-address form-default show-form-address">
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="first-name">First Name</label>
                      <input type="text" id="first-name" required />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="last-name">Last Name</label>
                      <input type="text" id="last-name" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="company">Company</label>
                      <input type="text" id="company" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="address-1">Address 1</label>
                      <input type="text" id="address-1" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="city">City</label>
                      <input type="text" id="city" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="region">Region</label>
                      <input type="text" id="region" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="provice">Province</label>
                      <input type="text" id="provice" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="zip-code">Postal/ZIP code</label>
                      <input type="text" id="zip-code" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="phone">Phone</label>
                      <input type="text" id="phone" required />
                    </fieldset>
                  </div>

                  <div className="tf-cart-checkbox">
                    <input
                      type="checkbox"
                      className="tf-check"
                      defaultChecked
                      id="default-address-add"
                    />
                    <label htmlFor="default-address-add" className="label">
                      <span>Set as default address</span>
                    </label>
                  </div>

                  <div className="box-btn">
                    <button type="submit" className="tf-btn animate-btn">
                      Update
                    </button>
                    <button
                      type="button"
                      className="tf-btn btn-out-line-dark btn-hide-address"
                    >
                      Cancel
                    </button>
                  </div>
                </form>

                {/* Address List */}
                <ul className="list-account-address tf-grid-layout md-col-2">
                  {["15 Yarran st (Default address)", "17 Yarran st"].map(
                    (title, i) => (
                      <li className="account-address-item" key={i}>
                        <p className="title text-md fw-medium">{title}</p>
                        <div className="info-detail">
                          <div className="box-infor">
                            <p className="text-md">Vineta Pham</p>
                            <p className="text-md">account@vince.com</p>
                            <p className="text-md">Company</p>
                            <p className="text-md">
                              {title.includes("15")
                                ? "16 Yarran st"
                                : "17 Yarran st"}
                            </p>
                            <p className="text-md">Punchbowl</p>
                            <p className="text-md">Australia</p>
                            <p className="text-md">2196</p>
                            <p className="text-md">+61 1234 3435</p>
                          </div>
                          <div className="box-btn">
                            <button className="tf-btn btn-out-line-dark">
                              Edit
                            </button>
                            <button className="tf-btn btn-out-line-dark">
                              Delete
                            </button>
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ul>

                {/* Edit Form - can be toggled dynamically if needed */}
                <form className="wd-form-address form-default edit-form-address">
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-first-name">First Name</label>
                      <input type="text" id="edit-first-name" required />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="edit-last-name">Last Name</label>
                      <input type="text" id="edit-last-name" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-company">Company</label>
                      <input type="text" id="edit-company" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-address-1">Address 1</label>
                      <input type="text" id="edit-address-1" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-city">City</label>
                      <input type="text" id="edit-city" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-region">Region</label>
                      <input type="text" id="edit-region" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-provice">Province</label>
                      <input type="text" id="edit-provice" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-zip-code">Postal/ZIP code</label>
                      <input type="text" id="edit-zip-code" required />
                    </fieldset>
                  </div>
                  <div className="cols">
                    <fieldset>
                      <label htmlFor="edit-phone">Phone</label>
                      <input type="text" id="edit-phone" required />
                    </fieldset>
                  </div>

                  <div className="tf-cart-checkbox">
                    <input
                      type="checkbox"
                      className="tf-check"
                      defaultChecked
                      id="default-address-edit"
                    />
                    <label htmlFor="default-address-edit" className="label">
                      <span>Set as default address</span>
                    </label>
                  </div>

                  <div className="box-btn">
                    <button type="submit" className="tf-btn animate-btn">
                      Update
                    </button>
                    <button
                      type="button"
                      className="tf-btn btn-out-line-dark btn-hide-edit-address"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AccountAddress;
