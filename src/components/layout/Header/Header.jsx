import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import SearchModal from "../../ui/Modal/Search";
import LoginPopup from "../../ui/Modal/Login";
import { Link } from "react-router-dom";
import ShoppingCart from "../../ui/Modal/ShoppingCart";
import MobileMenu from "../../ui/Modal/MobileMenu";
import RegisterPopup from "../../ui/Modal/Register";
import logo1 from "@/assets/images/logo2.png"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slice/authSlice";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import { useGetAllCategoriesQuery } from "../../../services/category/categoryApi";
import { LuLogOut } from "react-icons/lu";
import ResetPasswordPopup from "../../ui/Modal/ResetPassword";
import VerifyOtpAndResetPasswordPopup from "../../ui/Modal/VerifyOtpAndResetPasswordPopup";
import { useGetCartQuery } from "../../../services/cart/cartApi";
import { useGetWishlistQuery } from "../../../services/wishlist/wishlistApi";
import Toolbar from "../../ui/Modal/Toolbar";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const customerId = user?.id;

  const { data: categories, isLoading, error } = useGetAllCategoriesQuery();
  const { data: cartData, isLoading: cartLoading } = useGetCartQuery(customerId, {
    skip: !customerId,
  });
  const { data: wishlistData, isLoading: isLoadingWishlist } =
    useGetWishlistQuery(user?.id, {
      skip: !user?.id,
    });

  // Universal backdrop cleanup function
  const cleanupAllBackdrops = () => {
    // Remove all possible backdrop elements
    const backdrops = document.querySelectorAll('.offcanvas-backdrop, .modal-backdrop, .fade.show');
    backdrops.forEach(backdrop => backdrop.remove());
    
    // Reset body styles
    document.body.classList.remove('offcanvas-open', 'modal-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  // Universal popup close function
  const forceCloseAllPopups = () => {
    // Close all Bootstrap modals and offcanvas
    const modals = document.querySelectorAll('.modal.show, .offcanvas.show');
    modals.forEach(modal => {
      const modalInstance = window.bootstrap?.Modal?.getInstance(modal) || 
                           window.bootstrap?.Offcanvas?.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
      
      // Remove Bootstrap classes manually
      modal.classList.remove('show', 'showing');
    });
    
    // Clean state
    setShowLogin(false);
    setShowRegister(false);
    setShowReset(false);
    setShowVerifyPopup(false);
    setShowMobileMenu(false);
    setEmailForReset("");
    
    // Cleanup after small delay
    setTimeout(cleanupAllBackdrops, 100);
  };

  // Global backdrop and ESC key handler
  useEffect(() => {
    const handleGlobalBackdropClick = (e) => {
      if (e.target.classList.contains('offcanvas-backdrop') || 
          e.target.classList.contains('modal-backdrop')) {
        e.preventDefault();
        e.stopPropagation();
        forceCloseAllPopups();
      }
    };

    const handleGlobalEscape = (e) => {
      if (e.key === 'Escape') {
        forceCloseAllPopups();
      }
    };

    document.addEventListener('click', handleGlobalBackdropClick, true);
    document.addEventListener('keydown', handleGlobalEscape);
    
    return () => {
      document.removeEventListener('click', handleGlobalBackdropClick, true);
      document.removeEventListener('keydown', handleGlobalEscape);
    };
  }, []);

  // Enhanced close functions for individual popups
  const closeLogin = () => {
    setShowLogin(false);
    setTimeout(cleanupAllBackdrops, 100);
  };

  const closeRegister = () => {
    setShowRegister(false);
    setTimeout(cleanupAllBackdrops, 100);
  };

  const closeReset = () => {
    setShowReset(false);
    setTimeout(cleanupAllBackdrops, 100);
  };

  const closeVerify = () => {
    setShowVerifyPopup(false);
    setTimeout(cleanupAllBackdrops, 100);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setTimeout(cleanupAllBackdrops, 100);
  };

  const openLogin = () => {
    forceCloseAllPopups();
    setTimeout(() => setShowLogin(true), 150);
  };

  const openRegister = () => {
    forceCloseAllPopups();
    setTimeout(() => setShowRegister(true), 150);
  };

  const openReset = () => {
    forceCloseAllPopups();
    setTimeout(() => {
      setShowReset(true);
      setEmailForReset("");
    }, 150);
  };

  const openVerifyPopup = (email) => {
    forceCloseAllPopups();
    setTimeout(() => {
      setShowVerifyPopup(true);
      setEmailForReset(email);
    }, 150);
  };

  const openMobileMenu = () => {
    forceCloseAllPopups();
    setTimeout(() => setShowMobileMenu(true), 150);
  };

  // Update the closeAll function
  const closeAll = () => {
    forceCloseAllPopups();
  };

  // TopBar announcements data
  const announcements = [
    "Return extended to 60 days",
    "Life-time Guarantees",
    "Limited-Time Offer",
  ];

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/"); 
  };

 

  const cartCount = cartData?.cart?.length || 0;

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
                onClick={openMobileMenu}
                aria-label="Open mobile menu"
                style={{ cursor: 'pointer' }}
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
                      {/* // NEW CODE: */}
<li className="nav-dropdown-wrapper menu-item">
  <Link to="/shop" className="item-link">Shop</Link>
  <i className="icon"></i>
  <ul className="category-dropdown-menu">
    {categories?.map((cat) => (
      <li key={cat.id} className="category-dropdown-item">
        <Link to={`/shop/category/${cat.id}`} className="category-link">
          {cat.name}
        </Link>
      </li>
    ))}
  </ul>
</li>
                      <li className="menu-item">
                        <Link to="/aboutus" className="item-link">
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
                  <Link to="/" className="logo-header">
                    <img src={logo1} alt="logo" className="logo" />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link to="/" className="logo-header">
                    <img src={logo1} alt="logo" className="logo" />
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
                           {/* // NEW CODE: */}
<li className="nav-dropdown-wrapper menu-item">
  <Link to="/shop" className="item-link">Shop</Link>
  <i className="icon"></i>
  <ul className="category-dropdown-menu">
    {categories?.map((cat) => (
      <li key={cat.id} className="category-dropdown-item">
        <Link to={`/shop/category/${cat.id}`} className="category-link">
          {cat.name}
        </Link>
      </li>
    ))}
  </ul>
</li>
                      <li className="menu-item">
                        <Link to="/aboutus" className="item-link">
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

                <li className="nav-account dropdown-wrapper">
                  {isAuthenticated ? (
                    <>
                      <Link to="/myaccount" className="nav-icon-item gap-2">
                        <span className="username">{user?.name || "My Account"}</span> 
                        <i className="icon icon-user"></i>
                      </Link>
                      <ul className="account-dropdown">
                        <li>
                          <Link to="/accountdetails" className="dropdown-link">
                            <i className="icon icon-user"></i> My Profile
                          </Link>
                        </li>
                        <li>
                          <button onClick={handleLogout} className="logout-btn">
                            <LuLogOut/>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <a
                      onClick={openLogin}
                      className="nav-icon-item"
                      style={{ cursor: 'pointer' }}
                    >
                      <i className="icon icon-user"></i>
                    </a>
                  )}
                </li>

                <li className="nav-wishlist">
                  {isAuthenticated ? (
                    <Link to="/wish-list" className="nav-icon-item">
                      <i className="icon icon-heart"></i>
                      {isLoadingWishlist ? (
                        <span className="count-box">...</span>
                      ) : wishlistData?.wishlist?.length > 0 ? (
                        <span className="count-box">
                          {wishlistData.wishlist.length}
                        </span>
                      ) : null}
                    </Link>
                  ) : (
                    <a
                      className="nav-icon-item"
                      style={{ background: "none", border: "none", cursor: 'pointer' }}
                      onClick={() => {
                        toast.info("Please log in to access your wishlist");
                        openLogin();
                      }}
                    >
                      <i className="icon icon-heart"></i>
                      <span className="count-box">0</span>
                    </a>
                  )}
                </li>

               <li className={`nav-cart ${isHomePage ? "pl" : ""}`}>
  <a
    className="nav-icon-item"
    style={{ cursor: "pointer" }}
    onClick={(e) => {
      e.preventDefault();

      if (!isAuthenticated) {
        // Not logged in → show login
        toast.info("Please log in to access your cart");
        openLogin();
        return;
      }

      if (cartCount === 0) {
        // Logged in but cart empty → redirect to shop page
        navigate("/shop");
        toast.warn("Your cart is empty. Start shopping now!")
        return;
      }

      // Otherwise open cart popup (offcanvas)
      const cartEl = document.querySelector("#shoppingCart");
      if (cartEl) {
        const offcanvas = window.bootstrap?.Offcanvas?.getOrCreateInstance(cartEl);
        offcanvas?.show();
      }
    }}
  >
    <i className="icon icon-cart"></i>
    {cartLoading ? (
      <span className="count-box">0</span>
    ) : (
      <span className="count-box">{cartCount}</span>
    )}
  </a>
</li>


              </ul>
            </div>
          </div>
        </div>
      </header>

      <SearchModal />
      
      <LoginPopup
        show={showLogin}
        onClose={closeLogin}
        toggleRegister={openRegister}
        openResetPopup={openReset}
      />
      
      <ResetPasswordPopup
        show={showReset}
        onClose={closeReset}
        onSuccess={openVerifyPopup}
      />

      <VerifyOtpAndResetPasswordPopup
        show={showVerifyPopup}
        onClose={closeVerify}
        email={emailForReset}
      />

      <RegisterPopup
        show={showRegister}
        onClose={closeRegister}
        toggleLogin={openLogin}
      />
      
      <ShoppingCart />
      
      <MobileMenu
        show={showMobileMenu}
        handleClose={closeMobileMenu}
        toggleLogin={openLogin}
        categories={categories}   
        isLoading={isLoading}
        isAuthenticated={isAuthenticated} 
        user={user}                        
        handleLogout={handleLogout}        
      />

      <Toolbar
  cartCount={cartData?.cart?.length || 0}
  wishlistCount={wishlistData?.wishlist?.length || 0}
/>


      {/* Enhanced Backdrop for any open modal */}
      {(showLogin || showRegister || showReset || showVerifyPopup || showMobileMenu) && (
        <div
          className="modal-backdrop"
          onClick={forceCloseAllPopups}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1040,
            cursor: 'pointer'
          }}
        ></div>
      )}
    </>
  );
};

export default Header;