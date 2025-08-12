import { useState } from "react";
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
const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
   const [showReset, setShowReset] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // const [showResetPopup, setShowResetPopup] = useState(false);
const [showVerifyPopup, setShowVerifyPopup] = useState(false);
const [emailForReset, setEmailForReset] = useState("");

  const navigate = useNavigate();
      const dispatch = useDispatch();
 const { isAuthenticated, user } = useSelector((state) => state.auth);

 const customerId = user?.id; // Or user.id depending on your backend

   const { data: categories, isLoading, error } = useGetAllCategoriesQuery();
  const { data: cartData, isLoading: cartLoading } = useGetCartQuery(customerId, {
  skip: !customerId,
});
const { data: wishlistData, isLoading: isLoadingWishlist } =
  useGetWishlistQuery(user?.id, {
    skip: !user?.id,
  });


  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

      const openReset = () => {
    setShowReset(true);
    setShowLogin(false);
    setEmailForReset(""); // Reset email when opening
  };

  const openVerifyPopup = (email) => {
    setShowVerifyPopup(true);
    setShowReset(false);
    setEmailForReset(email);
  };

  const closeAll = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowReset(false);
    setShowVerifyPopup(false);
    setEmailForReset("");
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


  // categoiry api inegtration 


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;

  // cart count 

  // const { user } = useSelector((state) => state.auth); // Assuming you store logged-in user here
  

 

  // Calculate total items (if your cart API returns [{ quantity }])
  // const cartCount = cartData?.items?.reduce(
  //   (total, item) => total + (item.quantity || 1),
  //   0
  // ) || 0;
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
                      <li className="menu-item dropdown">
          <Link to="/shop" className="item-link">Shop</Link><i className="icon"></i>
  <ul className="submenu">
    {isLoading ? (
      <li>Loading...</li>
    ) : (
      categories.map((cat) => (
        <li key={cat.id}>
          <Link to={`/shop/category/${cat.slug}`} className="item-link">
            {cat.name}
          </Link>
        </li>
      ))
    )}
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
                  <a href="/" className="logo-header">
                    <img src={logo1} alt="logo" className="logo" />
                  </a>
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
                     <li className="menu-item dropdown">
          <Link to="/shop" className="item-link">Shop</Link><i className="icon"></i>
  <ul className="submenu">
    {isLoading ? (
      <li>Loading...</li>
    ) : (
      categories.map((cat) => (
        <li key={cat.id}>
          <Link to={`/shop/category/${cat.slug}`} className="item-link">
            {cat.name}
          </Link>
        </li>
      ))
    )}
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
                {/* <li className="nav-account">
                  <a
                  onClick={openLogin}
                    href="#login"
                    data-bs-toggle="offcanvas"
                    className="nav-icon-item"
                    
                  >
                    <i className="icon icon-user"></i>
                  </a>
                </li> */}

      <li className="nav-account dropdown-wrapper">
  {isAuthenticated ? (
    <>
    <Link to="/myaccount" className="nav-icon-item ">
   <span className="fs-6">Hello,{user?.name || "My Account"}</span> <i className="icon icon-user"></i>
  </Link>
  <ul className="account-dropdown">
    <li>
      <Link to="/accountdetails" className="dropdown-link">
        <i className="icon icon-user"></i> My Profile
      </Link>
    </li>
    <li>
      <button onClick={handleLogout} className="logout-btn">
        {/* <i className="icon icon-log"></i>  */}
        <LuLogOut/>
        Logout
      </button>
    </li>
  </ul>
    </>
  ):(
 <a
                  onClick={openLogin}
                    href="#login"
                    data-bs-toggle="offcanvas"
                    className="nav-icon-item"
                    
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
                                    style={{ background: "none", border: "none" }}
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
      href="#shoppingCart"
      data-bs-toggle="offcanvas"
      className="nav-icon-item"
    >
      <i className="icon icon-cart"></i>
     {/* {isLoading &&  <span className="count-box">{isHomePage ? cartCount : "0"}</span>} */}
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
        onClose={closeAll}
        toggleRegister={openRegister}  openResetPopup={openReset} // new prop to trigger reset
      />
       <ResetPasswordPopup
        show={showReset}
        onClose={closeAll}
        onSuccess={openVerifyPopup} // Pass email through this callback
      />

      <VerifyOtpAndResetPasswordPopup
        show={showVerifyPopup}
        onClose={closeAll}
        email={emailForReset}
      />

      <RegisterPopup
        show={showRegister}
        onClose={closeAll}
        toggleLogin={openLogin}
      />  
     
      <ShoppingCart />
      <MobileMenu
        show={showMobileMenu}
        handleClose={() => setShowMobileMenu(false)}
        toggleLogin={openLogin}
  
      />

      {/* Backdrop for any open modal */}
      {(showLogin || showRegister || showReset || showVerifyPopup || showMobileMenu) && (
        <div
          className="modal-backdrop"
          onClick={() => {
            setShowLogin(false);
            setShowReset(false);
            setShowVerifyPopup(false);
            setShowRegister(false);
            setShowMobileMenu(false);
          }}
        ></div>
      )}
    </>
  );
};

export default Header;
