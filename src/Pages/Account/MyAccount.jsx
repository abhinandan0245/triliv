import React, { useEffect } from "react";
import { useGetMyOrdersQuery } from "../../services/order/orderApi";
import { useGetWishlistQuery } from "../../services/wishlist/wishlistApi";
import { useDispatch, useSelector } from "react-redux";
import SidebarAccount from "../../components/ui/Modal/SideBarAccount";
import { Link, useNavigate } from "react-router-dom";
import MobileMenuHeader from "../../components/ui/Modal/mobileMenuHeader";
import { logout } from "../../redux/slice/authSlice";

const MyAccount = () => {
   const { isAuthenticated, user } = useSelector((state) => state.auth);
     const navigate = useNavigate();
  const dispatch = useDispatch();

 const customerId = user?.id;
  const { data: orders = [], isLoading: ordersLoading } = useGetMyOrdersQuery();
const { data: wishlistData, isLoading: wishlistLoading } = useGetWishlistQuery(customerId, {
  skip: !customerId,
});

const wishlistCount = wishlistLoading 
  ? 0 
  : wishlistData?.count || 0;
  // This effect will run once after component mounts
    // Counts
  const ordersCount = ordersLoading ? 0 : orders?.length || 0;


  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
    if (onClose) onClose(); // close mobile menu
  };


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
          {/* <div className="btn-sidebar-mb d-lg-none">
  <button data-bs-toggle="offcanvas" data-bs-target="#sidebarAccount">
    <i className="icon icon-sidebar" />
  </button>
</div> */}

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

                          {/* menu for mobile */}
               <MobileMenuHeader/>

            <div className="my-acount-content account-dashboard">
              <div className="box-account-title">
                <p className="hello-name display-sm fw-medium">
                  Hello {user?.name}!
                  <span>
                    (not <span className="name">{user?.name}</span>?
                  </span>
                  <span onClick={handleLogout} className="text-decoration-underline link">
                    Log Out
                  </span>
                  <span>)</span>
                </p>
                
              </div>




              <div className="content-account">
                <ul className="box-check-list flex-sm-nowrap">
                  <li>
                    <a href="/orders" className="box-check text-center">
                      <div className="icon">
                        <i className="icon-order" />
                        <span className="count-number text-sm text-white fw-medium">
                          {ordersCount}
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
                          {wishlistCount}
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
