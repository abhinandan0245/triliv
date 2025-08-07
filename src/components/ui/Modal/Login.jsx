import React, { useState } from "react";
import { useLoginMutation } from "../../../services/auth/authApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/slice/authSlice";

const LoginPopup = ({ show, onClose, toggleRegister , openResetPopup }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
   const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await login(formData).unwrap();
      
      

      // Dispatch to global state
  dispatch(setCredentials({ customer: res.customer, token: res.token }));
  localStorage.setItem("CUSTOMER_TOKEN", res.token);
      localStorage.setItem("CUSTOMER_USER", JSON.stringify(res.customer));
      toast.success(res.message || "Login successful");
      // onClose(); // close popup
      // Delay closing and navigating to ensure toast shows
    // setTimeout(() => {
    //   onClose(); // close popup
    //   navigate("/"); // navigate to home
    // }, 1500); // 1.5 second delay
    onClose(); // ✅ Close modal immediately
    } catch (err) {
      const msg = err?.data?.message || "Login failed";
      setErrorMessage(msg);
      toast.error(msg);
    }
  };

  return (
    <div
     className={`offcanvas offcanvas-end popup-style-1 popup-login ${show ? "show d-block" : ""}`} style={{ visibility: show ? "visible" : "hidden" }}id="login"
    >
      <div className="canvas-wrapper">
        <div className="canvas-header popup-header">
          <span className="title">Log in</span>
          <button className="icon-close icon-close-popup" data-bs-dismiss="offcanvas"/>
        </div>
        <div className="canvas-body popup-inner">
          <form onSubmit={handleSubmit} className="form-login">
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
            <fieldset className="password">
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

            {errorMessage && (
              <div className="text-danger mt-2">{errorMessage}</div>
            )}

            <div className="bot mt-3">
              {/* <a href="#resetPass" className="text-sm text-main-2">
                Forgot your password?
              </a> */}

              <button
  type="button"
  className="btn btn-link text-sm text-main-2 p-0"
  onClick={() => {
    onClose(); // close login popup
    if (typeof openResetPopup === "function") openResetPopup();
  }}
>
  Forgot your password?
</button>

              <div className="button-wrap mt-3">
                <button
                  className="subscribe-button tf-btn animate-btn d-inline-flex bg-dark-2 w-100"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
                <button
                  type="button"
                  // onClick={openRegister}
                  className="tf-btn btn-out-line-dark2 w-100" href="#register"
                    data-bs-toggle="offcanvas"
                  onClick={() => { onClose(); toggleRegister(); }}
                >
                  Create an account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
