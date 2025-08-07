import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from "../../services/auth/authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

const AccountDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    billingAddress: "",
    shippingAddress: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    password: "",
    newpassword: "",
    confirmPassword: "",
  });

 const { data: profileData, isLoading, isError } = useGetUserProfileQuery(undefined, {
  refetchOnMountOrArgChange: true,
});

  const dispatch = useDispatch();
  const navigate = useNavigate();

// const profile = profileData?.data;

const [updateProfile, { isLoading: isUpdating }] =
    useUpdateUserProfileMutation();

 const profile = profileData?.customer || profileData?.data;

  useEffect(() => {
    if (profile) {
      // const [firstname = "", lastname = ""] = profile.name?.split(" ") || [];
      setFormData((prev) => ({
        ...prev,
       
        name: profile.name || "",
        email: profile.email || "",
        mobile: profile.mobile || "",
        billingAddress: profile.billingAddress || "",
        shippingAddress: profile.shippingAddress || "",
        city: profile.city || "",
        state: profile.state || "",
        country: profile.country || "",
        pinCode: profile.pinCode || "",
      }));
    }
  }, [profile]);

 const handleChange = (e) => {
  const { name, value } = e.target;

  // If editing pinCode, enforce numeric and max 10 digits
  if (name === "pinCode") {
    const numericValue = value.replace(/\D/g, ""); // remove non-digits
    if (numericValue.length <= 10) {
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    }
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...formData };
      if (!payload.password && !payload.newpassword && !payload.confirmPassword) {
      delete payload.password;
      delete payload.newpassword;
      delete payload.confirmPassword;
    }

      const response = await updateProfile(payload).unwrap();
      toast.success(response.message || "Profile updated successfully");

      // Clear password fields after success
    setFormData((prev) => ({
      ...prev,
      password: "",
      newpassword: "",
      confirmPassword: "",
    }));
    } catch (error) {
      console.error(error);
      toast.error("Error updating profile");
    }
  };

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p>Error loading profile</p>;


  // logout 


  const handleLogout = () => {
    dispatch(logout());   
    navigate("/"); // or redirect to login
  };

  return (
    <>
      <section className="tf-page-title">
        <div className="container">
          <div className="box-title text-center">
            <h4 className="title">My Account</h4>
            <div className="breadcrumb-list">
              <Link className="breadcrumb-item" to="/">Home</Link>
              <div className="breadcrumb-item dot"><span></span></div>
              <div className="breadcrumb-item current">Account</div>
            </div>
          </div>
        </div>
      </section>

      <div className="flat-spacing-13">
        <div className="container-7">
          <div className="btn-sidebar-mb d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
              <i className="icon icon-sidebar" />
            </button>
          </div>

          <div className="main-content-account">
            <div className="sidebar-account-wrap sidebar-content-wrap sticky-top d-lg-block d-none">
              <ul className="my-account-nav">
                <li><Link to="/myaccount" className="my-account-nav-item">Dashboard</Link></li>
                <li><Link to="/account-orders" className="my-account-nav-item">My Orders</Link></li>
                <li><Link to="/wish-list" className="my-account-nav-item">My Wishlist</Link></li>
                <li><Link to="/account-addresses" className="my-account-nav-item">Addresses</Link></li>
                <li><Link to="/account-detail" className="my-account-nav-item active">Account Details</Link></li>
                <li><span onClick={handleLogout} className="my-account-nav-item">Log Out</span></li>
              </ul>
            </div>

            <div className="my-acount-content account-dashboard">
              <form onSubmit={handleSubmit} className="form-edit-account">
                <h6 className="display-xs title-form">Account Details</h6>

                <div className="form-name">
                  {["name" , "email", "mobile"].map((field) => (
                    <div key={field} className="tf-field style-2 style-3">
                      <input
                        name={field}
                        placeholder=" "
                        type="text"
                        className="tf-field-input tf-input"
                        value={formData[field]}
                        onChange={handleChange}
                      />
                      <label className="tf-field-label">{field.replace(/([A-Z])/g, ' $1')}</label>
                    </div>
                  ))}
                </div>

                <h6 className="display-xs title-form mt-4">Address Information</h6>
                {["billingAddress", "shippingAddress", "city", "state", "country", "pinCode"].map((field) => (
                  <div key={field} className="tf-field style-2 style-3">
                    <input
                      name={field}
                      placeholder=" "
                      type="text"
                      className="tf-field-input tf-input"
                      value={formData[field]}
                      onChange={handleChange}
                    />
                    <label className="tf-field-label">{field.replace(/([A-Z])/g, ' $1')}</label>
                  </div>
                ))}

                <h6 className="display-xs title-form mt-4">Password Change</h6>
                {["password", "newpassword", "confirmPassword"].map((field) => (
                  <div key={field} className="tf-field style-2 style-3">
                    <input
                      name={field}
                      placeholder=""
                      type="password"
                      className="tf-field-input tf-input"
                      value={formData[field]}
                      onChange={handleChange}
                      
                    />
                    <label className="tf-field-label">{field.replace(/([A-Z])/g, ' ')}</label>
                  </div>
                ))}

                <button type="submit"  className="tf-btn animate-btn mt-4" disabled={isUpdating}>  {isUpdating ? "Saving..." : "Save Changes"}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetail;
