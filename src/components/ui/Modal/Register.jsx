import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../../services/auth/authApi";
import { toast } from "react-toastify";

const RegisterPopup = ({ show, onClose, toggleLogin }) => {
  const [signup, { isLoading }] = useSignupMutation();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(formData).unwrap();
      toast.success(res.message || "Registration successful!");
      onClose(); // close popup
      setTimeout(() => toggleLogin(), 100); // open login
    } catch (err) {
      const msg = err?.data?.message || "Registration failed.";
      toast.error(msg);
    }
  };

    // backdrop fix 
  
    // LoginPopup, RegisterPopup, ResetPasswordPopup, VerifyOtpAndResetPasswordPopup में add करें:
  
  useEffect(() => {
    if (!show) return;
    
    const modalElement = document.getElementById('modalId'); // अपना modal ID use करें
    
    if (modalElement) {
      const handleHidden = () => {
        // Cleanup after modal is hidden
        setTimeout(() => {
          const backdrops = document.querySelectorAll('.modal-backdrop, .offcanvas-backdrop');
          backdrops.forEach(b => b.remove());
          document.body.classList.remove('modal-open', 'offcanvas-open');
          document.body.style.overflow = '';
        }, 50);
      };
  
      modalElement.addEventListener('hidden.bs.modal', handleHidden);
      
      return () => {
        modalElement.removeEventListener('hidden.bs.modal', handleHidden);
      };
    }
  }, [show]);


  return (
    <div
      className={`offcanvas offcanvas-end popup-style-1 popup-register ${show ? "show d-block" : ""}`} style={{ visibility: show ? "visible" : "hidden" }} id="register"
    >
      <div className="canvas-wrapper">
        <div className="canvas-header popup-header">
          <span className="title">Create Account</span>
          <button
            className="icon-close icon-close-popup"
            onClick={onClose}
            aria-label="Close"
          />
        </div>
        <div className="canvas-body popup-inner">
          <form onSubmit={handleSubmit} className="form-register">
            <div className="name-fields">
              <fieldset className="first-name mb_12">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="last-name mb_12">
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile *"
                  required
                  value={formData.mobile}
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

            <div className="button-wrap d-flex gap-2 mt-4">
              <button
                className="subscribe-button tf-btn animate-btn d-inline-flex bg-dark-2 w-100"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
              <button
                type="button"
                onClick={() => { onClose(); toggleLogin(); }}
                className="tf-btn btn-out-line-dark2 w-100"
                href="#login"
                    data-bs-toggle="offcanvas"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
