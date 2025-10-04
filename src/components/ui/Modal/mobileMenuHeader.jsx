import React from "react";
import { LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slice/authSlice";

const MobileMenuHeader = () => {
  const location = useLocation();
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const menuItems = [
    { name: "Dashboard", path: "/myaccount" },
    { name: "My Orders", path: "/orders" },
    { name: "Addresses", path: "/addresses" },
    { name: "Account Details", path: "/accountdetails" },
  ];
  

    const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
    if (onClose) onClose(); // close mobile menu
  };


  return (
    <div className="header-mobile-menu-btn-container d-lg-none mb-3">
      <div className="header-mobile-menu-btn d-flex gap-2 px-2 py-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`btn btn-sm flex-shrink-0 ${
              location.pathname === item.path
                ? "btn-secondary"
                : "btn-outline-secondary"
            }`}
          >
            {item.name}
          </Link>
        ))}

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="btn btn-sm btn-outline-danger text-start d-flex align-items-center gap-1"
          >
            <LuLogOut /> Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenuHeader;
