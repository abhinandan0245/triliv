import React from "react";
import { useNavigate } from "react-router-dom";

const BreadcrumbP = ({ currentPage }) => {
  const navigate = useNavigate();

  const handlePrev = () => {
    // Implement previous page logic
    navigate(-1); // Goes back in history
  };

  const handleNext = () => {
    // Implement next page logic
    navigate(1); // Goes forward in history
  };

  const handleBackToShop = () => {
    navigate("/product"); // Navigates to product page
  };

  return (
    <div className="breadcrumb-sec">
      <div className="container">
        <div className="breadcrumb-wrap">
          <div className="breadcrumb-list">
            <a className="breadcrumb-item" href="/">
              Home
            </a>
            <div className="breadcrumb-item dot">
              <span />
            </div>
            <div className="breadcrumb-item current">Linen Blend Pants</div>
          </div>
          <div className="breadcrumb-prev-next">
            <a href="#" className="breadcrumb-prev">
              <i className="icon icon-arr-left"></i>
            </a>
            <a href="product" className="breadcrumb-back">
              <i className="icon icon-shop"></i>
            </a>
            <a href="#" className="breadcrumb-next">
              <i className="icon icon-arr-right2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbP;
