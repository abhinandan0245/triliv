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
          
          
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbP;
