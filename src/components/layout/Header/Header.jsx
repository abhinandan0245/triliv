import { useState } from "react";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import SearchModal from "../../ui/Modal/Search";
import LoginPopup from "../../ui/Modal/Login";
import { Link } from "react-router-dom";
import ShoppingCart from "../../ui/Modal/ShoppingCart";
import MobileMenu from "../../ui/Modal/MobileMenu";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showMobileMenu, setShowMobileMenu] = useState(false);

   const [showLogin, setShowLogin] = useState(false); // 👈 Add this state

  // Toggle login popup
  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  // TopBar announcements data
  const announcements = [
    "Return extended to 60 days",
    "Life-time Guarantees",
    "Limited-Time Offer",
  ];

  return (
    <>
      <TopBar isHomePage={isHomePage} />
      <header
        id="header"
        className={`header-default ${
          isHomePage ? "header-absolute header-white header-uppercase" : ""
        }`}
      >
        <div className="container">
          <div className="row wrapper-header align-items-center">
            {/* Mobile Menu (Same for both) */}
           <div className="col-md-4 col-3 d-xl-none">
              <a
                className="mobile-menu"
                onClick={() => setShowMobileMenu(true)}
                aria-label="Open mobile menu"
              >
                <i className="icon icon-categories1"></i>
              </a>
            </div>

            {/* Conditional Logo/Nav */}
            {isHomePage ? (
              <>
                <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
                  <nav className="box-navigation text-center style-space">
                    <ul className="box-nav-menu justify-content-start">
                      <li className="menu-item">
                        <Link to="/" className="item-link">
                          Home<i className="icon"></i>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/shop" className="item-link">
                          Shop<i className="icon"></i>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/about-us" className="item-link">
                          Our Story<i className="icon"></i>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/contact" className="item-link">
                          Contact US<i className="icon"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-xl-2 col-md-4 col-6 text-xxl-center">
                  <a href="/" className="logo-header">
                    <img src="/images/logo1.png" alt="logo" className="logo" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link to="/" className="logo-header">
                    <img src="/images/logo1.png" alt="logo" className="logo" />
                  </Link>
                </div>
                <div className="col-xl-8 d-none d-xl-block">
                  <nav className="box-navigation text-center">
                    <ul className="box-nav-menu">
                      <li className="menu-item">
                        <Link to="/" className="item-link">
                          Home<i className="icon"></i>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/shop" className="item-link">
                          Shop<i className="icon"></i>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/about-us" className="item-link">
                          Our Story<i className="icon"></i>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/contact" className="item-link">
                          Contact US<i className="icon"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </>
            )}

            {/* Icons (Same for both) */}
            <div
              className={`col-xl-2 col-md-4 col-3 ${
                isHomePage ? "col-xxl-5 col-xl-4" : ""
              }`}
            >
              <ul className="nav-icon d-flex justify-content-end align-items-center">
                <li className="nav-search">
                  <a
                    href="#search"
                    data-bs-toggle="modal"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-search"></i>
                  </a>
                </li>
                <li className="nav-account">
                  <a
                    href="#login"
                    data-bs-toggle="offcanvas"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-user"></i>
                  </a>
                </li>
                <li className="nav-wishlist">
                  <Link to="/wish-list" className="nav-icon-item">
                    <i className="icon icon-heart"></i>
                    <span className="count-box">0</span>
                  </Link>
                </li>

                <li className={`nav-cart ${isHomePage ? "pl" : ""}`}>
                  <a
                    href="#shoppingCart"
                    data-bs-toggle="offcanvas"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-cart"></i>
                    <span className="count-box">{isHomePage ? "2" : "0"}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <SearchModal />
      <LoginPopup show={showLogin} onClose={() => setShowLogin(false)} /> 
      <ShoppingCart />
       <MobileMenu 
        show={showMobileMenu} 
        handleClose={() => setShowMobileMenu(false)} 
        toggleLogin={toggleLogin} // ✅ Pass the function
      />
    </>
  );
};

export default Header;
