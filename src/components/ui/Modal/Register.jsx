import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, like API calls
    console.log('Form submitted:', formData);
    // For demo purposes, we'll just log to console
  };

  return (
    <div className="offcanvas offcanvas-end popup-style-1 popup-register" id="register">
      <div className="canvas-wrapper">
        <div className="canvas-header popup-header">
          <span className="title">Create account</span>
          <button 
            className="icon-close icon-close-popup" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close" 
          />
        </div>
        <div className="canvas-body popup-inner">
          <form onSubmit={handleSubmit} className="form-login">
            <div>
              <fieldset className="mb_12">
                <input 
                  type="text" 
                  placeholder="First name" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="mb_12">
                <input 
                  type="text" 
                  placeholder="Last name" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="email mb_12">
                <input 
                  type="email" 
                  placeholder="Email*" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset className="password">
                <input 
                  type="password" 
                  placeholder="Password*" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </fieldset>
            </div>
            <div className="bot">
              <p className="text text-sm text-main-2">
                Sign up for early Sale access plus tailored new arrivals, trends and promotions. 
                To opt out, click unsubscribe in our emails.
              </p>
              <div className="button-wrap">
                <button 
                  className="subscribe-button tf-btn animate-btn bg-dark-2 w-100" 
                  type="submit"
                >
                  Sign up
                </button>
                <button 
                  type="button" 
                  data-bs-target="#login" 
                  data-bs-toggle="offcanvas" 
                  className="tf-btn btn-out-line-dark2 w-100"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;