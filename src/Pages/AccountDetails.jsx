import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AccountDetails = () => {
  return (
    <>
      <Header />

      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Account</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">Home</Link>
              <div className="breadcrumb-item dot"><span /></div>
              <div className="breadcrumb-item current">Account</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flat-spacing-13">
        <div className="container-7">

          {/* Sidebar button for mobile */}
          <div className="btn-sidebar-mb d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
              <i className="icon icon-sidebar" />
            </button>
          </div>

          {/* Main Account Section */}
          <div className="main-content-account">

            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
              <ul className="my-account-nav">
                <li><Link to="/account-page" className="text-sm link fw-medium my-account-nav-item">Dashboard</Link></li>
                <li><Link to="/account-orders" className="text-sm link fw-medium my-account-nav-item">My Orders</Link></li>
                <li><Link to="/wish-list" className="text-sm link fw-medium my-account-nav-item">My Wishlist</Link></li>
                <li><Link to="/account-addresses" className="text-sm link fw-medium my-account-nav-item">Addresses</Link></li>
                <li><Link to="/account-details" className="text-sm link fw-medium my-account-nav-item active">Account Details</Link></li>
                <li><Link to="/" className="text-sm link fw-medium my-account-nav-item">Log Out</Link></li>
              </ul>
            </div>

            <div className="my-acount-content account-dashboard">
              <form className="form-edit-account">
                <h6 className="display-xs title-form">Account Details</h6>

                <div className="form-name">
                  <div className="tf-field style-2 style-3">
                    <input className="tf-field-input tf-input" id="firstname" placeholder=" " type="text" name="firstname" />
                    <label className="tf-field-label" htmlFor="firstname">First name</label>
                  </div>
                  <div className="tf-field style-2 style-3">
                    <input className="tf-field-input tf-input" id="lastname" placeholder=" " type="text" name="lastname" />
                    <label className="tf-field-label" htmlFor="lastname">Last name</label>
                  </div>
                  <div className="tf-field style-2 style-3">
                    <input className="tf-field-input tf-input" id="email" placeholder=" " type="email" name="email" />
                    <label className="tf-field-label" htmlFor="email">Email</label>
                  </div>
                </div>

                <div className="form-pass">
                  <div className="text-lg title-pass">Password Change</div>
                  <div className="tf-field style-2 style-3">
                    <input className="tf-field-input tf-input" id="pass" placeholder=" " type="text" name="pass" />
                    <label className="tf-field-label" htmlFor="pass">Current password</label>
                  </div>
                  <div className="tf-field style-2 style-3">
                    <input className="tf-field-input tf-input" id="newpass" placeholder=" " type="password" name="newpass" />
                    <label className="tf-field-label" htmlFor="newpass">New password</label>
                  </div>
                  <div className="tf-field style-2 style-3">
                    <input className="tf-field-input tf-input" id="confirm-password" placeholder=" " type="password" name="confirm-password" />
                    <label className="tf-field-label" htmlFor="confirm-password">Confirm password</label>
                  </div>
                </div>

                <button type="submit" className="tf-btn animate-btn">Save Changes</button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AccountDetails;
