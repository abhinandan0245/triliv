import React from "react";
import { Link } from "react-router-dom"; // if using React Router
// import accountImage from "./p"; // adjust path as needed

const AccountPage = () => {
  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Account</h4>
            <div className="breadcrumb-list">
              <Link  className="breadcrumb-item" to="/">Home</Link>
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

          <div className="main-content-account">
            {/* Sidebar Nav */}
            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
              <ul className="my-account-nav">
                <li><Link to="/account" className="text-sm link fw-medium my-account-nav-item active">Dashboard</Link></li>
                <li><Link to="/orders" className="text-sm link fw-medium my-account-nav-item">My Orders</Link></li>
                <li><Link to="/wishlist" className="text-sm link fw-medium my-account-nav-item">My Wishlist</Link></li>
                <li><Link to="/addresses" className="text-sm link fw-medium my-account-nav-item">Addresses</Link></li>
                <li><Link to="/details" className="text-sm link fw-medium my-account-nav-item">Account Details</Link></li>
                <li><Link to="/" className="text-sm link fw-medium my-account-nav-item">Log Out</Link></li>
              </ul>
            </div>

            {/* Dashboard Content */}
            <div className="my-acount-content account-dashboard">
              <div className="box-account-title">
                <p className="hello-name display-sm fw-medium">
                  Hello Vineta Pham! <span>(not <span className="name">Vineta Pham</span>?</span>
                  <Link to="/" className="text-decoration-underline link">Log Out</Link><span>)</span>
                </p>
                <p className="notice text-sm">
                  Today is a great day to check your account page. You can check{" "}
                  <Link to="/orders" className="text-primary text-decoration-underline">your last orders</Link>,{" "}
                  check your <Link to="/wishlist" className="text-primary text-decoration-underline">wishlist</Link>, or{" "}
                  <Link to="/products" className="text-primary text-decoration-underline">shop latest offers</Link>.
                </p>
              </div>

              <div className="content-account">
                <ul className="box-check-list flex-sm-nowrap">
                  <li>
                    <Link to="/orders" className="box-check text-center">
                      <div className="icon">
                        <i className="icon-order" />
                        <span className="count-number text-sm text-white fw-medium">1</span>
                      </div>
                      <div className="text">
                        <div className="link name-type text-xl fw-medium">Orders</div>
                        <p className="sub-type text-sm">Check the history of all your orders</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="box-check text-center">
                      <div className="icon">
                        <i className="icon-heart" />
                        <span className="count-number text-sm text-white fw-medium">1</span>
                      </div>
                      <div className="text">
                        <div className="link name-type text-xl fw-medium">Wishlist</div>
                        <p className="sub-type text-sm">Check your wishlist</p>
                      </div>
                    </Link>
                  </li>
                </ul>

                {/* Banner 1 */}
                <div className="banner-account">
                  <div className="image">
                    <img src={accountImage} alt="Account Visual" className="lazyload" />
                  </div>
                  <div className="banner-content-right">
                    <div className="banner-title">
                      <p className="display-md fw-medium">Free Shipping</p>
                      <p className="text-md">for all orders over $300.00</p>
                    </div>
                    <div className="banner-btn">
                      <Link to="/products" className="tf-btn animate-btn">Shop Now</Link>
                    </div>
                  </div>
                </div>

                {/* Banner 2 */}
                <div className="banner-account banner-acc-countdown bg-linear d-flex align-items-center">
                  <div className="banner-content-left">
                    <div className="banner-title">
                      <p className="sub text-md fw-medium">SUMMER SALE</p>
                      <p className="display-xl fw-medium">50% OFF</p>
                      <p className="sub text-md fw-medium">WITH PROMO CODE: 12D34E</p>
                    </div>
                    <div className="banner-btn">
                      <Link to="/products" className="tf-btn btn-white animate-btn animate-dark">Shop Now</Link>
                    </div>
                  </div>
                  <div className="banner-countdown">
                    <div className="wg-countdown-2">
                      <span className="js-countdown" data-timer={46556} data-labels="Days,Hours,Mins,Secs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* End .main-content-account */}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
