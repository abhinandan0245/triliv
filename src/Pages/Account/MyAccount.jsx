import React, { useEffect } from "react";

const MyAccount = () => {
  // This effect will run once after component mounts
  useEffect(() => {}, []);

  return (
    <div>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Account</h4>
            <div className="breadcrumb-list">
              <a className="breadcrumb-item" href="/">
                Home
              </a>
              <div className="breadcrumb-item dot">
                <span />
              </div>
              <div className="breadcrumb-item current">Account</div>
            </div>
          </div>
        </div>
      </section>
      {/* /Title Page */}

      {/* Main Content */}
      <div className="flat-spacing-13">
        <div className="container-7">
          {/* sidebar-account */}
          <div className="btn-sidebar-mb d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
              <i className="icon icon-sidebar" />
            </button>
          </div>
          {/* /sidebar-account */}

          {/* Section-acount */}
          <div className="main-content-account">
            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
              <ul className="my-account-nav">
                <li>
                  <a
                    href="myaccount"
                    className="text-sm link fw-medium my-account-nav-item active"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/orders"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    My Orders
                  </a>
                </li>
                <li>
                  <a
                    href="/wish-list"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    My Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="/addresses"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Addresses
                  </a>
                </li>
                <li>
                  <a
                    href="/accountdetails"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Account Details
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Log Out
                  </a>
                </li>
              </ul>
            </div>

            <div className="my-acount-content account-dashboard">
              <div className="box-account-title">
                <p className="hello-name display-sm fw-medium">
                  Hello Vineta Pham!
                  <span>
                    (not <span className="name">Vineta Pham</span>?
                  </span>
                  <a href="/" className="text-decoration-underline link">
                    Log Out
                  </a>
                  <span>)</span>
                </p>
                <p className="notice text-sm">
                  Today is a great day to check your account page. You can check{" "}
                  <a
                    href="/orders"
                    className="text-primary text-decoration-underline"
                  >
                    your last orders
                  </a>{" "}
                  or have a look to{" "}
                  <a
                    href="/wish-list"
                    className="text-primary text-decoration-underline"
                  >
                    your wishlist
                  </a>
                  . Or maybe you can start to shop
                  <a
                    href="/product"
                    className="text-primary text-decoration-underline"
                  >
                    our latest offers
                  </a>
                  ?
                </p>
              </div>

              <div className="content-account">
                <ul className="box-check-list flex-sm-nowrap">
                  <li>
                    <a href="/orders" className="box-check text-center">
                      <div className="icon">
                        <i className="icon-order" />
                        <span className="count-number text-sm text-white fw-medium">
                          1
                        </span>
                      </div>
                      <div className="text">
                        <div className="link name-type text-xl fw-medium">
                          Orders
                        </div>
                        <p className="sub-type text-sm">
                          Check the history of all your orders
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/wish-list" className="box-check text-center">
                      <div className="icon">
                        <i className="icon-heart" />
                        <span className="count-number text-sm text-white fw-medium">
                          1
                        </span>
                      </div>
                      <div className="text">
                        <div className="link name-type text-xl fw-medium">
                          Wishlist
                        </div>
                        <p className="sub-type text-sm">Check your wishlist</p>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="banner-account">
                  <div className="image">
                    <img
                      src="images/account-1.jpg"
                      data-src="images/account-1.jpg"
                      alt=""
                      className="lazyload"
                    />
                  </div>
                  <div className="banner-content-right">
                    <div className="banner-title">
                      <p className="display-md fw-medium">Free Shipping</p>
                      <p className="text-md">for all orders over $300.00</p>
                    </div>
                    <div className="banner-btn">
                      <a href="/product" className="tf-btn animate-btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="banner-account banner-acc-countdown bg-linear d-flex align-items-center">
                  <div className="banner-content-left">
                    <div className="banner-title">
                      <p className="sub text-md fw-medium">SUMMER SALE</p>
                      <p className="display-xl fw-medium">50% OFF</p>
                      <p className="sub text-md fw-medium">
                        WITH PROMOTE CODE: 12D34E
                      </p>
                    </div>
                    <div className="banner-btn">
                      <a
                        href="/product"
                        className="tf-btn btn-white animate-btn animate-dark"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="banner-countdown">
                    <div className="wg-countdown-2">
                      <span
                        className="js-countdown"
                        data-timer={46556}
                        data-labels="Days,Hours,Mins,Secs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Account */}
        </div>
      </div>
      {/* /Main Content */}
    </div>
  );
};

export default MyAccount;
