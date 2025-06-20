// src/components/common/Breadcrumbs.jsx
import React from 'react';

const Breadcrumbs = ({ currentPage }) => {
  return (
    <div className="breadcrumb-list">
      <a className="breadcrumb-item" href="index.php">Home</a>
      <div className="breadcrumb-item dot"><span /></div>
      <div className="breadcrumb-item current">{currentPage}</div>
    </div>
  );
};

export default Breadcrumbs;