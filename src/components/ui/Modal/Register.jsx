import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const RegisterPopup = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

const navigate = useNavigate();
 
const handleRegisterClick = () => {
    onClose();  // Close the popup
    navigate('/myaccount');  // Navigate to MyAccount
  };
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration form submitted:", formData);
    // You would typically make an API call here
  };

  return (
    <div
      className={`offcanvas offcanvas-end popup-style-1 popup-register ${
        show ? "show" : ""
      }`}
    >
      <div className="canvas-wrapper">
        <div className="canvas-header popup-header">
          <span className="title">Create Account</span>
          <button
            className="icon-close icon-close-popup"
            onClick={onClose} // Changed from data-bs-dismiss
            aria-label="Close"
          />
        </div>
        <div className="canvas-body popup-inner">
          <form onSubmit={handleSubmit} className="form-register">
            <div className="name-fields">
              <fieldset className="first-name mb_12">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name*"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="last-name mb_12">
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name*"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </fieldset>
            </div>
            <fieldset className="email mb_12">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="password mb_12">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password*"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </fieldset>

            <div className="button-wrap">
              <button
                className="subscribe-button tf-btn animate-btn d-inline-flex bg-dark-2 w-100"
                type="submit"
                 onClick={handleRegisterClick}
              >
                Register
              </button>
              <button
                type="button"
                className="tf-btn btn-out-line-dark2 w-100"
                onClick={() => {
                  onClose(); // Close register
                  // This function should be passed from Header
                  toggleLogin(); // Open login
                }}
              >
                Already have an account? Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
