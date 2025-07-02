import React from "react";
import { Link } from "react-router-dom";

const AccountDetail = () => {
  // State for form fields
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    pass: "",
    newpass: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // You might want to add validation and API calls here
  };

  return (
    <>
      {/* Title Page */}
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Account</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">
                Home
              </Link>
              <div className="breadcrumb-item dot">
                <span></span>
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
          <SidebarAccount activeItem="account-detail" />
          {/* /sidebar-account */}

          {/* Section-acount */}
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
                    className="text-sm link fw-medium my-account-nav-item"
                  >
                    Addresses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account-detail"
                    className="text-sm link fw-medium my-account-nav-item active"
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
            <div className="my-acount-content account-dashboard">
              <form onSubmit={handleSubmit} className="form-edit-account">
                <h6 className="display-xs title-form">Account Details</h6>
                <div className="form-name">
                  <div className="tf-field style-2 style-3">
                    <input
                      className="tf-field-input tf-input"
                      id="firstname"
                      placeholder=" "
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                    <label className="tf-field-label" htmlFor="firstname">
                      First name
                    </label>
                  </div>
                  <div className="tf-field style-2 style-3">
                    <input
                      className="tf-field-input tf-input"
                      id="lastname"
                      placeholder=" "
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                    <label className="tf-field-label" htmlFor="lastname">
                      Last name
                    </label>
                  </div>
                  <div className="tf-field style-2 style-3">
                    <input
                      className="tf-field-input tf-input"
                      id="email"
                      placeholder=" "
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label className="tf-field-label" htmlFor="email">
                      Email
                    </label>
                  </div>
                </div>
                <div className="form-pass">
                  <div className="text-lg title-pass">Password Change</div>
                  <div className="tf-field style-2 style-3">
                    <input
                      className="tf-field-input tf-input"
                      id="pass"
                      placeholder=" "
                      type="password"
                      name="pass"
                      value={formData.pass}
                      onChange={handleChange}
                    />
                    <label className="tf-field-label" htmlFor="pass">
                      Current password
                    </label>
                  </div>
                  <div className="tf-field style-2 style-3">
                    <input
                      className="tf-field-input tf-input"
                      id="newpass"
                      placeholder=" "
                      type="password"
                      name="newpass"
                      value={formData.newpass}
                      onChange={handleChange}
                    />
                    <label className="tf-field-label" htmlFor="newpass">
                      New password
                    </label>
                  </div>
                  <div className="tf-field style-2 style-3">
                    <input
                      className="tf-field-input tf-input"
                      id="confirm-password"
                      placeholder=" "
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <label
                      className="tf-field-label"
                      htmlFor="confirm-password"
                    >
                      Confirm password
                    </label>
                  </div>
                </div>
                <button type="submit" className="tf-btn animate-btn">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
          {/* /Account */}
        </div>
      </div>
      {/* /Main Content */}
    </>
  );
};

export default AccountDetail;
